/* =========================================================
   Mi Huerto en Maceta — lógica de la web
   JavaScript sin dependencias.

   Datos:
   · js/catalogo.js  → dataset maestro V3 (114 fichas). FUENTE DE VERDAD de
                       todas las fechas. Generado desde datos/*.json.
   · js/datos.js     → el resto del contenido (reglas, riego, cuidados…) y los
                       trucos escritos a mano. Aquí NO hay fechas de plantación.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Utilidades ---------- */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function esc(txt) {
    return String(txt == null ? '' : txt)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function sinAcentos(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  /* ---------- Dataset V3 ---------- */
  const CAT     = window.CATALOGO;
  const CROPS   = CAT.crops;
  const FUENTES = CAT.source_registry;
  const NOMBRE_MES = ['', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const LETRAS_MES = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  const CATEGORIAS = {
    hortaliza:     { t: 'Hortalizas',      corto: 'Hortaliza', clase: 'etiqueta--verdura' },
    frutal:        { t: 'Frutales',        corto: 'Frutal',    clase: 'etiqueta--arbol' },
    fruta_pequena: { t: 'Frutas pequeñas', corto: 'Fruta',     clase: 'etiqueta--fruta' },
    aromatica:     { t: 'Aromáticas',      corto: 'Aromática', clase: 'etiqueta--aromatica' },
    flor_util:     { t: 'Flores útiles',   corto: 'Flor',      clase: 'etiqueta--flor' }
  };
  const ORDEN_CATEGORIAS = ['hortaliza', 'aromatica', 'fruta_pequena', 'frutal', 'flor_util'];

  const AJUSTE = {
    condicional:      { t: 'Condicional en Tortosa', clase: 'ajuste--condicional' },
    poco_recomendado: { t: 'Poco recomendado aquí',  clase: 'ajuste--poco' }
  };

  // Cada método de establecimiento hereda el color de su "vía" equivalente.
  const CLASE_METODO = {
    semillero:              'via--semilla',
    siembra_directa:        'via--semilla',
    trasplante_plantel:     'via--plantel',
    bulbo_tuberculo_diente: 'via--material',
    plantacion_vivero:      'via--vivero',
    raiz_desnuda:           'via--vivero'
  };

  /* ---------- Estado ---------- */
  const hoy = new Date().getMonth() + 1;
  const estado = {
    categoria: 'Todas',
    filtroMes: 0,          // 0 = cualquier mes
    modo: 'plantar',       // 'plantar' = puedo ponerlo ya · 'cualquiera' = incluye semilleros
    orden: 'grupo',
    busqueda: '',
    mes: hoy,              // calendario
    sim: hoy,              // "qué planto hoy"
    fresaMes: '2026-09',   // calendario propio del plan de fresas
    abierta: null
  };

  /* Meses de catálogo según el modo activo */
  function mesesDe(c) {
    return estado.modo === 'cualquiera' ? c.catalog_any_start_months : c.catalog_plantable_months;
  }

  /* =========================================================
     1. REGLAS
     ========================================================= */
  function pintarReglas() {
    $('#listaReglas').innerHTML = REGLAS.map(r => `
      <article class="regla" data-reveal>
        <span class="regla__n">${r.n}</span>
        <div>
          <h3 class="titulo-4">${r.t}</h3>
          <p>${r.d}</p>
          <p class="regla__por">Por qué: ${r.p}</p>
        </div>
      </article>`).join('');
  }

  /* =========================================================
     2. TERRENO
     ========================================================= */
  function pintarClima() {
    $('#listaClima').innerHTML = CLIMA.map(c => `
      <div class="tarjeta">
        <p class="riego-tarjeta__frec c-verano" style="font-size:30px;">${c.n}</p>
        <p class="dato-etiqueta" style="margin-bottom:8px;">${c.t}</p>
        <p class="riego-tarjeta__nota">${c.d}</p>
      </div>`).join('');
  }

  function pintarZonas() {
    $('#listaZonas').innerHTML = ZONAS.map(z => `
      <div class="tarjeta" data-reveal>
        <p class="riego-tarjeta__frec c-primavera" style="font-size:34px;">Zona ${z.l}</p>
        <h4 class="titulo-4">${z.t}</h4>
        <p class="riego-tarjeta__nota" style="margin-bottom:10px;">${z.d}</p>
        <p class="regla__por">${z.extra}</p>
      </div>`).join('');
  }

  /* =========================================================
     3. ACORDEONES
     ========================================================= */
  function pintarAcordeon(selector, datos) {
    $(selector).innerHTML = datos.map(d => `
      <div class="acordeon__item">
        <button class="acordeon__btn" type="button" aria-expanded="false">${d.t}</button>
        <div class="acordeon__cuerpo">${d.html}</div>
      </div>`).join('');
  }

  function activarAcordeones() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.acordeon__btn');
      if (!btn) return;
      const item = btn.parentElement;
      const abierto = item.classList.toggle('abierto');
      btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  /* =========================================================
     4. TABLAS
     En móvil cada fila pasa a ser una tarjeta: por eso cada celda
     lleva su cabecera copiada en data-etiqueta.
     ========================================================= */
  function pintarTabla(selector, cabeceras, filas, columnasNum) {
    const num = columnasNum || [];
    $(selector).innerHTML = filas.map(f =>
      '<tr>' + f.map((c, i) => {
        const clase = num.indexOf(i) >= 0 ? ' class="num"' : '';
        const cont = i === 0 ? `<strong>${c}</strong>` : c;
        return `<td data-etiqueta="${esc(cabeceras[i] || '')}"${clase}>${cont}</td>`;
      }).join('') + '</tr>').join('');
  }

  function pintarTablaMacetas() {
    pintarTabla('#tablaMacetas', ['Planta', 'Recipiente objetivo'], MACETAS, [1]);
  }

  /* Tabla de necesidades, derivada del dataset: sin fechas, solo agronomía. */
  function pintarTablaNecesidades() {
    const filas = CROPS
      .filter(c => c.category === 'hortaliza' || c.category === 'aromatica')
      .sort((a, b) => a.name.localeCompare(b.name, 'es'))
      .map(c => [
        c.name,
        c.sun === 'sol' ? 'Sol' : (c.sun === 'semisombra' ? 'Semisombra' : c.sun),
        { alto: 'Alto', medio: 'Medio', bajo: 'Bajo' }[c.water] || c.water,
        c.spacing_cm ? c.spacing_cm + ' cm' : '—',
        c.container_min_l ? c.container_min_l + ' L' : '—',
        c.bed_depth_cm ? c.bed_depth_cm + ' cm' : '—'
      ]);
    pintarTabla('#tablaNecesidades',
      ['Cultivo', 'Sol', 'Agua', 'Separación', 'Maceta mínima', 'Fondo de bancal'],
      filas, [3, 4, 5]);
    $('#conteoNecesidades').textContent =
      filas.length + ' hortalizas y aromáticas del catálogo.';
  }

  /* Resumen de las 114 fichas: método, ventana posible y ventana óptima. */
  function pintarTablaResumen() {
    const filas = CROPS.slice()
      .sort((a, b) =>
        ORDEN_CATEGORIAS.indexOf(a.category) - ORDEN_CATEGORIAS.indexOf(b.category) ||
        a.name.localeCompare(b.name, 'es'))
      .map(c => [
        c.name,
        `<span class="via ${CLASE_METODO[c.catalog_default_action] || 'via--vivero'}">${c.catalog_default_label}</span>`,
        c.catalog_plantable_text,
        c.catalog_optimal_text || '—',
        AJUSTE[c.tortosa_fit]
          ? `<span class="ajuste ${AJUSTE[c.tortosa_fit].clase}">${c.tortosa_fit.replace('_', ' ')}</span>`
          : c.tortosa_fit
      ]);
    pintarTabla('#tablaResumen',
      ['Cultivo', 'Método principal', 'Puede plantarse', 'Mejor', 'Adaptación'],
      filas);
  }

  /* =========================================================
     5. CATÁLOGO
     ========================================================= */
  function cultivosVisibles() {
    let lista = CROPS.slice();

    if (estado.categoria !== 'Todas') lista = lista.filter(c => c.category === estado.categoria);
    if (estado.filtroMes) lista = lista.filter(c => mesesDe(c).indexOf(estado.filtroMes) >= 0);

    if (estado.busqueda) {
      const q = sinAcentos(estado.busqueda);
      lista = lista.filter(c =>
        sinAcentos(c.name).indexOf(q) >= 0 ||
        sinAcentos(c.subcategory || '').indexOf(q) >= 0 ||
        sinAcentos(c.notes || '').indexOf(q) >= 0);
    }

    if (estado.orden === 'facil') {
      lista.sort((a, b) => a.difficulty - b.difficulty || a.name.localeCompare(b.name, 'es'));
    } else {
      lista.sort((a, b) =>
        ORDEN_CATEGORIAS.indexOf(a.category) - ORDEN_CATEGORIAS.indexOf(b.category) ||
        a.name.localeCompare(b.name, 'es'));
    }
    return lista;
  }

  function htmlDificultad(dif, grande) {
    let out = '<span class="puntos-dif' + (grande ? ' puntos-dif--grande' : '') + '">';
    for (let i = 1; i <= 5; i++) {
      const on = i <= dif ? ' on' + (dif >= 3 ? ' alta' : '') : '';
      out += '<span class="' + on.trim() + '"></span>';
    }
    return out + '</span>';
  }

  /* Tira de 12 meses: verde = óptimo, ámbar = posible, gris = fuera. */
  function htmlTira(cultivo, grande) {
    const posibles = mesesDe(cultivo);
    const optimos = cultivo.catalog_optimal_months || [];
    let out = '<span class="tira' + (grande ? ' tira--grande' : '') + '">';
    LETRAS_MES.forEach((l, i) => {
      const m = i + 1;
      let clases = '';
      if (optimos.indexOf(m) >= 0) clases = 'optimo';
      else if (posibles.indexOf(m) >= 0) clases = 'posible';
      if (estado.filtroMes === m) clases += ' foco';
      out += '<span' + (clases ? ' class="' + clases.trim() + '"' : '') + '>' + l + '</span>';
    });
    return out + '</span>';
  }

  /* Qué toca hacer exactamente con este cultivo en el mes seleccionado */
  function accionDelMes(c, mes) {
    if (!mes) return null;
    const metodos = c.establishment_methods.filter(m => m.possible_months.indexOf(mes) >= 0);
    if (!metodos.length) return null;
    // El método recomendado manda; si no aplica ese mes, el primero que sí.
    const m = metodos.find(x => x.recommended_for_user) || metodos[0];
    const optimo = (m.optimal_months || []).indexOf(mes) >= 0;
    return {
      label: m.label,
      clase: CLASE_METODO[m.key] || 'via--vivero',
      estado: optimo ? 'óptimo' : 'con precaución',
      claseEstado: optimo ? 'estado--optimo' : 'estado--precaucion'
    };
  }

  function pintarFiltros() {
    const cats = ['Todas'].concat(ORDEN_CATEGORIAS);
    $('#filtros').innerHTML = cats.map(k => {
      const t = k === 'Todas' ? 'Todas' : CATEGORIAS[k].t;
      const n = k === 'Todas' ? CROPS.length : CROPS.filter(c => c.category === k).length;
      return `<button type="button" class="chip${estado.categoria === k ? ' activo' : ''}" data-categoria="${esc(k)}">${t}<span class="chip__n">${n}</span></button>`;
    }).join('') +
      `<button type="button" class="chip chip--orden" id="botonOrden">Orden: ${
        estado.orden === 'facil' ? 'más fáciles primero' : 'por grupo'}</button>`;

    const cualquiera = `<button type="button" class="chip chip--mes${
      estado.filtroMes === 0 ? ' activo' : ''}" data-filtro-mes="0">Cualquier mes</button>`;
    const meses = LETRAS_MES.map((_, i) => {
      const m = i + 1;
      const n = CROPS.filter(c => mesesDe(c).indexOf(m) >= 0).length;
      const corto = CAT.months[String(m)];
      return `<button type="button" class="chip chip--mes${
        estado.filtroMes === m ? ' activo' : ''}${n ? '' : ' vacio'}" data-filtro-mes="${m}"
        title="${NOMBRE_MES[m]}: ${n} cultivos">${corto}<span class="chip__n">${n}</span></button>`;
    }).join('');
    $('#filtrosMes').innerHTML = cualquiera + meses;

    $('#modoPlantar').classList.toggle('activo', estado.modo === 'plantar');
    $('#modoCualquiera').classList.toggle('activo', estado.modo === 'cualquiera');
  }

  function textoConteo(n) {
    const cat = estado.categoria === 'Todas' ? 'cultivos' : CATEGORIAS[estado.categoria].t.toLowerCase();
    if (!estado.filtroMes) return n + ' ' + cat + (estado.categoria === 'Todas' ? ' en total' : '');
    const verbo = estado.modo === 'cualquiera' ? 'puedes empezar' : 'puedes plantar';
    return n === 0
      ? 'Nada de ' + cat + ' para ' + NOMBRE_MES[estado.filtroMes]
      : n + ' ' + cat + ' que ' + verbo + ' en ' + NOMBRE_MES[estado.filtroMes];
  }

  function pintarCatalogo() {
    const lista = cultivosVisibles();

    $('#conteo').textContent = textoConteo(lista.length);
    $('#sinResultados').hidden = lista.length > 0;

    $('#rejillaPlantas').innerHTML = lista.map(c => {
      const cat = CATEGORIAS[c.category];
      const fit = AJUSTE[c.tortosa_fit];
      const acc = accionDelMes(c, estado.filtroMes);
      return `
      <button type="button" class="planta" data-cultivo="${c.id}">
        <span class="planta__alto">
          <span class="planta__nombre">${c.name}</span>
          <span class="etiqueta ${cat.clase}">${cat.corto}</span>
        </span>
        ${fit ? `<span class="ajuste ${fit.clase}">${fit.t}</span>` : ''}
        <span class="dificultad">
          <span class="dificultad__t">Dificultad</span>
          ${htmlDificultad(c.difficulty)}
        </span>
        <span>
          ${htmlTira(c)}
          <span class="planta__pie">
            <span>Plantar: ${estado.modo === 'cualquiera' ? c.catalog_any_start_text : c.catalog_plantable_text}</span>
            <span class="via ${CLASE_METODO[c.catalog_default_action] || 'via--vivero'}">${etiquetaCorta(c.catalog_default_label)}</span>
          </span>
        </span>
        ${acc ? `<span class="accion-mes">
            <span class="via ${acc.clase}">${etiquetaCorta(acc.label)}</span>
            <span class="estado ${acc.claseEstado}">${acc.estado}</span>
          </span>` : `<span class="planta__resumen">${c.start_options_summary}</span>`}
      </button>`;
    }).join('');
  }

  /* "COMPRAR / TRASPLANTAR PLANTEL" no cabe en una tarjeta de móvil. */
  function etiquetaCorta(label) {
    return {
      'COMPRAR / TRASPLANTAR PLANTEL': 'Plantel',
      'DESDE SEMILLA · SIEMBRA DIRECTA': 'Semilla directa',
      'DESDE SEMILLA · SEMILLERO': 'Semillero',
      'PLANTA / ÁRBOL DE VIVERO': 'Vivero',
      'COMPRAR / PLANTAR DE VIVERO': 'Vivero',
      'BULBO / TUBÉRCULO / DIENTE / GARRA': 'Bulbo o diente',
      'RAÍZ DESNUDA': 'Raíz desnuda'
    }[label] || label;
  }

  /* ---------- Ficha ---------- */
  function htmlMetodo(m) {
    const rango = r => r && r.length
      ? r.map(x => x.from_text + ' – ' + x.to_text).join(' · ')
      : null;
    const posible = rango(m.possible_date_ranges);
    const optimo = rango(m.optimal_date_ranges);
    const fuentes = (m.source_keys || []).filter(k => FUENTES[k]);

    return `
      <div class="metodo${m.recommended_for_user ? ' metodo--recomendado' : ''}">
        <p class="metodo__alto">
          <span class="via ${CLASE_METODO[m.key] || 'via--vivero'}">${m.label}</span>
          ${m.recommended_for_user ? '<span class="metodo__reco">recomendado</span>' : ''}
        </p>
        <dl class="metodo__lista">
          <dt>Posible</dt><dd>${m.possible_text}${posible ? `<span class="metodo__fechas">${posible}</span>` : ''}</dd>
          <dt class="es-optimo">Mejor</dt><dd class="es-optimo">${m.optimal_text || '—'}${optimo ? `<span class="metodo__fechas">${optimo}</span>` : ''}</dd>
          ${m.caution_months && m.caution_months.length
            ? `<dt class="es-precaucion">Precaución</dt><dd class="es-precaucion">${m.caution_text}</dd>` : ''}
        </dl>
        ${m.note ? `<p class="metodo__nota">${m.note}</p>` : ''}
        ${fuentes.length ? `<p class="metodo__fuentes">Fuentes: ${fuentes.map(k =>
          `<a href="${FUENTES[k].url}" target="_blank" rel="noopener" title="${esc(FUENTES[k].title)}">${k}</a>`).join(', ')}</p>` : ''}
      </div>`;
  }

  function abrirFicha(id) {
    const c = CROPS.find(x => x.id === id);
    if (!c) return;
    const cat = CATEGORIAS[c.category];
    const fit = AJUSTE[c.tortosa_fit];
    const extra = (typeof TRUCOS !== 'undefined' && TRUCOS[c.id]) || null;

    const cosecha = (c.harvest_months || []).length
      ? c.harvest_months.map(m => CAT.months[String(m)]).join(' · ')
      : 'Según variedad y año';

    $('#panel').innerHTML = `
      <div class="panel__alto">
        <div>
          <span class="etiqueta ${cat.clase}">${cat.t}</span>
          <h3 class="panel__nombre">${c.name}</h3>
          <p class="panel__variedad">${c.subcategory ? c.subcategory.replace(/_/g, ' ') : ''} · ciclo ${c.life_cycle}</p>
        </div>
        <button type="button" class="cerrar" data-cerrar aria-label="Cerrar ficha">×</button>
      </div>

      ${fit ? `<div class="aviso"><p class="aviso__t">${fit.t}</p><p>${c.notes}</p></div>` : ''}

      <div class="panel__dif">
        <span>Dificultad ${c.difficulty} de 5</span>
        ${htmlDificultad(c.difficulty, true)}
      </div>

      <p class="subtitulo-bloque">Meses en los que puedes plantarlo</p>
      <div style="margin-bottom:10px;">${htmlTira(c, true)}</div>
      <p class="leyenda-tira">
        <span><i class="muestra muestra--optimo"></i> mejor</span>
        <span><i class="muestra muestra--posible"></i> posible</span>
        <span><i class="muestra muestra--fuera"></i> fuera de ventana</span>
      </p>
      <p class="nota-ventanas">La temperatura real, la variedad y tu microclima mandan; las fechas son ventanas orientativas para Tortosa.</p>

      <p class="subtitulo-bloque">${CAT.ui_contract.detail_page.section_title}</p>
      ${c.establishment_methods.map(htmlMetodo).join('')}

      <div class="rejilla rejilla--3" style="gap:12px; margin:24px 0 22px;">
        <div class="tarjeta--plana"><p class="dato-etiqueta">Cosecha</p><p class="dato-valor">${cosecha}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Sol</p><p class="dato-valor">${c.sun === 'sol' ? 'Sol directo' : (c.sun || '—')}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Agua</p><p class="dato-valor">${({ alto: 'Alta', medio: 'Media', bajo: 'Baja' })[c.water] || c.water || '—'}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Separación</p><p class="dato-valor">${c.spacing_cm ? c.spacing_cm + ' cm' : '—'}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Maceta mínima</p><p class="dato-valor">${c.container_min_l ? c.container_min_l + ' L' : '—'}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Fondo de bancal</p><p class="dato-valor">${c.bed_depth_cm ? c.bed_depth_cm + ' cm' : '—'}</p></div>
      </div>

      ${!fit && c.notes ? `<p class="subtitulo-bloque">En resumen</p><p style="margin:0 0 24px; color:var(--texto-2);">${c.notes}</p>` : ''}

      ${extra && extra.aviso ? `<div class="aviso"><p class="aviso__t">Aviso</p><p>${extra.aviso}</p></div>` : ''}

      ${extra && extra.trucos ? `
        <p class="subtitulo-bloque">Trucos de principiante</p>
        <ol class="puntos">${extra.trucos.map(t => `<li><p>${t}</p></li>`).join('')}</ol>` : ''}

      ${(c.research_sources || []).length ? `
        <p class="subtitulo-bloque" style="margin-top:24px;">Fuentes de este cultivo</p>
        <ul class="fuentes fuentes--compacta">
          ${c.research_sources.filter(k => FUENTES[k]).map(k =>
            `<li><a href="${FUENTES[k].url}" target="_blank" rel="noopener">${esc(FUENTES[k].title)}</a></li>`).join('')}
        </ul>` : ''}`;

    $('#fondoPanel').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#panel').scrollTop = 0;
    estado.abierta = id;
    const btn = $('.cerrar', $('#panel'));
    if (btn) btn.focus();
  }

  function cerrarFicha() {
    $('#fondoPanel').hidden = true;
    document.body.style.overflow = '';
    estado.abierta = null;
  }

  /* =========================================================
     6. CALENDARIO — qué se planta y qué se cosecha cada mes,
        calculado desde el dataset.
     ========================================================= */
  function agruparPorAccion(mes, soloOptimos) {
    const grupos = {};
    CROPS.forEach(c => {
      if (c.catalog_plantable_months.indexOf(mes) < 0) return;
      if (soloOptimos && c.catalog_optimal_months.indexOf(mes) < 0) return;
      const k = c.catalog_default_label;
      (grupos[k] = grupos[k] || []).push(c);
    });
    return grupos;
  }

  function pintarCalendario() {
    $('#botonesMes').innerHTML = MESES.map(m =>
      `<button type="button" class="mes-btn${m.n === estado.mes ? ' activo' : ''}" data-mes="${m.n}">${m.corto}</button>`
    ).join('');

    const txt = { frio: 'Meses frescos', suave: 'Temperatura suave', calor: 'Calor extremo' };
    $('#temperaturasMes').innerHTML = MESES.map(m =>
      `<span class="temp--${m.temp}" title="${m.nombre}: ${txt[m.temp]}"></span>`).join('');

    const m = MESES.find(x => x.n === estado.mes);
    const mes = estado.mes;

    const optimos = agruparPorAccion(mes, true);
    const totalPosibles = CROPS.filter(c => c.catalog_plantable_months.indexOf(mes) >= 0).length;
    const totalOptimos = CROPS.filter(c => c.catalog_optimal_months.indexOf(mes) >= 0).length;
    const cosecha = CROPS.filter(c => (c.harvest_months || []).indexOf(mes) >= 0);

    const bloques = Object.keys(optimos).map(label => `
      <p class="mes-accion">
        <span class="via ${CLASE_METODO[claveDeLabel(label)] || 'via--vivero'}">${etiquetaCorta(label)}</span>
        ${optimos[label].map(c => `<button type="button" class="enlace-cultivo" data-cultivo="${c.id}">${c.name}</button>`).join(', ')}
      </p>`).join('');

    $('#fichaMes').innerHTML = `
      <div class="ficha-mes__cab">
        <h3>${m.nombre}</h3>
        <p>${m.lema}</p>
      </div>
      <div class="ficha-mes__celda ficha-mes__celda--ancha">
        <p class="dato-etiqueta et-planta">Lo mejor que puedes plantar en ${m.nombre.toLowerCase()} · ${totalOptimos} cultivos</p>
        ${bloques || '<p>Ninguno está en su ventana óptima este mes. Es un mes para mantener, no para plantar.</p>'}
      </div>
      <div class="ficha-mes__celda">
        <p class="dato-etiqueta et-cosecha">Se cosecha · ${cosecha.length} cultivos</p>
        <p>${cosecha.length ? cosecha.slice(0, 14).map(c => c.name).join(', ') + (cosecha.length > 14 ? ` y ${cosecha.length - 14} más` : '') : '—'}</p>
      </div>
      <div class="ficha-mes__celda">
        <p class="dato-etiqueta et-tarea">Tu tarea</p>
        <p>${m.tarea}</p>
      </div>
      <div class="ficha-mes__celda ficha-mes__celda--enlace">
        <a href="#catalogo" data-ver-mes="${m.n}">Ver los ${totalPosibles} cultivos que admite ${m.nombre.toLowerCase()} →</a>
      </div>`;
  }

  function claveDeLabel(label) {
    const c = CROPS.find(x => x.catalog_default_label === label);
    return c ? c.catalog_default_action : null;
  }

  /* =========================================================
     7. RIEGO
     ========================================================= */
  function pintarRiego() {
    $('#listaRiego').innerHTML = RIEGO.map(r => `
      <div class="riego-tarjeta${r.destacado ? ' riego-tarjeta--verano' : ''}">
        <p class="riego-tarjeta__est ${r.clase}">${r.est}</p>
        <p class="riego-tarjeta__frec ${r.clase}">${r.frec}</p>
        <p class="riego-tarjeta__nota">${r.nota}</p>
      </div>`).join('');

    pintarTabla('#tablaGoteros',
      ['Recipiente', 'Configuración', 'Caudal total'],
      GOTEROS.map(g => [g.maceta, g.config, g.total]), [2]);
  }

  function num(id, porDefecto) {
    const v = parseFloat($(id).value);
    return isFinite(v) && v > 0 ? v : porDefecto;
  }

  function formatear(n, decimales) {
    return n.toLocaleString('es-ES', {
      minimumFractionDigits: decimales, maximumFractionDigits: decimales
    });
  }

  function calcularAgua() {
    const n = num('#numGoteros', 1);
    const c = num('#caudalGotero', 4);
    const min = num('#minutosRiego', 30);
    const caudal = n * c;
    const litros = caudal * (min / 60);
    $('#resultadoAgua').textContent = formatear(litros, litros < 10 ? 1 : 0) + ' L';
    $('#resultadoAguaTexto').textContent =
      'Caudal total ' + formatear(caudal, 0) + ' L/h durante ' + formatear(min, 0) + ' min';
  }

  function calcularSustrato() {
    const largo = num('#largoBancal', 200) / 100;
    const ancho = num('#anchoBancal', 100) / 100;
    const alto  = num('#altoBancal', 30) / 100;
    const cuantos = Math.round(num('#numBancales', 1));
    const m3 = largo * ancho * alto * cuantos;
    $('#resultadoSustrato').textContent = formatear(m3, 2) + ' m³';
    $('#resultadoSustratoTexto').textContent =
      formatear(Math.round(m3 * 1000), 0) + ' litros en total' +
      (m3 >= 0.5 ? ' — a granel sale mucho más barato que en sacos' : '');
  }

  /* =========================================================
     8. CUIDADOS
     ========================================================= */
  function pintarRutinas() {
    $('#listaRutinas').innerHTML = RUTINAS.map(r => `
      <div class="tarjeta" data-reveal>
        <p class="dato-etiqueta">${r.tiempo}</p>
        <h4 class="titulo-4">${r.t}</h4>
        <ul class="puntos">${r.items.map(i => `<li><p>${i}</p></li>`).join('')}</ul>
      </div>`).join('');
  }

  /* =========================================================
     9. SEMILLA O PLANTEL
     ========================================================= */
  function pintarSemilla() {
    $('#listaFormas').innerHTML = FORMAS.map(f => `
      <div class="tarjeta" data-reveal>
        <h4 class="titulo-4">${f.t}</h4>
        <p class="riego-tarjeta__nota" style="margin-bottom:12px;">${f.d}</p>
        <p class="regla__por">${f.ej}</p>
      </div>`).join('');

    $('#listaVocabulario').innerHTML = VOCABULARIO.map(v => `
      <div class="tarjeta">
        <p class="riego-tarjeta__frec c-primavera" style="font-size:24px;">${v.t}</p>
        <p class="riego-tarjeta__nota">${v.d}</p>
      </div>`).join('');

    $('#listaPrimerAno').innerHTML = PRIMER_ANO.map(b => `
      <div class="tarjeta" data-reveal>
        <span class="via ${VIAS[b.via].clase}">${VIAS[b.via].t}</span>
        <h4 class="titulo-4" style="margin-top:12px;">${b.t}</h4>
        <ul class="puntos">${b.items.map(i => `<li><p>${i}</p></li>`).join('')}</ul>
      </div>`).join('');
  }

  /* =========================================================
     10. ERRORES Y DIAGNÓSTICO
     ========================================================= */
  function pintarErrores() {
    $('#listaErrores').innerHTML = ERRORES.map(e => `
      <article class="error">
        <div class="error__alto">
          <span class="error__n">${e.n}</span>
          <h3>${e.t}</h3>
        </div>
        <p>${e.d}</p>
        <p class="error__sol">Solución: ${e.s}</p>
      </article>`).join('');
  }

  function pintarDiagnostico() {
    $('#listaDiagnostico').innerHTML = DIAGNOSTICO.map(d => `
      <article class="diagnostico-item">
        <h3 class="diagnostico-item__s">${d.s}</h3>
        <p class="diagnostico-item__c">${d.c}</p>
        <p class="diagnostico-item__q">→ ${d.q}</p>
      </article>`).join('');
  }

  /* =========================================================
     11. PLAN 2026-2027
     ========================================================= */
  function pintarCronologia() {
    $('#listaCronologia').innerHTML = CRONOLOGIA.map(h => `
      <li class="hito${h.clave ? ' hito--clave' : ''}" data-reveal>
        <p class="hito__fecha">${h.f}</p>
        <h3 class="hito__t">${h.t}</h3>
        <p>${h.d}</p>
        ${h.extra ? `<p style="margin-top:8px; color:var(--ocre); font-weight:500;">${h.extra}</p>` : ''}
      </li>`).join('');
  }

  function pintarPresupuesto() {
    $('#listaPresupuesto').innerHTML = PRESUPUESTO.map(f => `
      <div class="tarjeta" data-reveal>
        <p class="dato-etiqueta">${f.f}</p>
        <h4 class="titulo-4">${f.t}</h4>
        <p class="subtitulo-bloque" style="color:var(--verde-2); margin-top:14px;">Gasta aquí</p>
        <p class="riego-tarjeta__nota" style="margin-bottom:10px;">${f.gasta.join(', ')}.</p>
        ${f.ahorra ? `<p class="subtitulo-bloque" style="color:var(--terracota);">Ahorra aquí</p>
          <p class="riego-tarjeta__nota">${f.ahorra.join(', ')}.</p>` : ''}
        ${f.nota ? `<p class="regla__por" style="margin-top:10px;">${f.nota}</p>` : ''}
      </div>`).join('');
  }

  /* =========================================================
     12. LISTA DE COMPRA
     ========================================================= */
  const CLAVE_COMPRA = 'huerto-compra-v1';

  function leerCompra() {
    try { return JSON.parse(localStorage.getItem(CLAVE_COMPRA) || '{}') || {}; }
    catch (e) { return {}; }
  }

  function guardarCompra(obj) {
    try { localStorage.setItem(CLAVE_COMPRA, JSON.stringify(obj)); } catch (e) { /* modo privado */ }
  }

  function pintarCompra() {
    const marcados = leerCompra();
    let n = 0;
    $('#listaCompra').innerHTML = COMPRA.map(g => `
      <div class="compra-grupo">
        <h3>${g.g}</h3>
        <ul class="compra-lista">
          ${g.items.map(item => {
            const id = 'c-' + (n++);
            const on = marcados[item] ? ' checked' : '';
            return `<li class="compra-item">
              <label for="${id}">
                <input type="checkbox" id="${id}" data-item="${esc(item)}"${on}>
                <span>${item}</span>
              </label></li>`;
          }).join('')}
        </ul>
      </div>`).join('');

    $('#noComprar').textContent = NO_COMPRAR.join(' · ') + '.';
    actualizarProgresoCompra();
  }

  function actualizarProgresoCompra() {
    const cajas = $$('#listaCompra input[type="checkbox"]');
    const hechas = cajas.filter(c => c.checked).length;
    const pct = cajas.length ? (hechas / cajas.length) * 100 : 0;
    $('#compraTexto').textContent = hechas + ' de ' + cajas.length + ' comprados';
    $('#compraBarra').style.width = pct + '%';
  }

  /* =========================================================
     13. QUÉ PLANTO HOY
     ========================================================= */
  function pintarSimulador() {
    $('#botonesSim').innerHTML = MESES.map(m =>
      `<button type="button" class="mes-btn${m.n === estado.sim ? ' activo' : ''}" data-sim="${m.n}">${m.corto}</button>`
    ).join('');

    const mes = estado.sim;
    const optimos = CROPS.filter(c => c.catalog_optimal_months.indexOf(mes) >= 0);
    const posibles = CROPS.filter(c => c.catalog_plantable_months.indexOf(mes) >= 0);
    const lista = optimos.length ? optimos : posibles;

    $('#simTitulo').textContent = optimos.length
      ? 'En ' + NOMBRE_MES[mes] + ', ' + optimos.length + (optimos.length === 1 ? ' cultivo está' : ' cultivos están') + ' en su mejor momento'
      : 'En ' + NOMBRE_MES[mes] + ' ninguno está en su ventana óptima';

    $('#simSub').textContent = optimos.length
      ? 'Estos son los que plantaría este mes. En total admite ' + posibles.length + '.'
      : 'Aún puedes establecer ' + posibles.length + ' cultivos, pero ninguno en su mejor momento: es mes de mantener.';

    $('#simLista').innerHTML = lista
      .slice()
      .sort((a, b) =>
        ORDEN_CATEGORIAS.indexOf(a.category) - ORDEN_CATEGORIAS.indexOf(b.category) ||
        a.name.localeCompare(b.name, 'es'))
      .map(c => {
        const cat = CATEGORIAS[c.category];
        const acc = accionDelMes(c, mes);
        return `
        <button type="button" class="simulador__item" data-cultivo="${c.id}">
          <span style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
            <span class="simulador__nombre">${c.name}</span>
            <span class="etiqueta ${cat.clase}">${cat.corto}</span>
          </span>
          <span class="simulador__accion">${acc ? etiquetaCorta(acc.label) : c.catalog_default_label}</span>
        </button>`;
      }).join('');
  }

  /* =========================================================
     14. FUENTES
     ========================================================= */
  function pintarFuentes() {
    const claves = Object.keys(FUENTES);
    $('#listaFuentes').innerHTML = claves.map(k => `
      <li>
        <strong>${esc(FUENTES[k].title)}</strong>
        <span class="fuentes__ambito">${esc(FUENTES[k].scope || '')}</span>
        <a href="${FUENTES[k].url}" target="_blank" rel="noopener">${FUENTES[k].url}</a>
      </li>`).join('');
    $('#conteoFuentes').textContent =
      claves.length + ' referencias oficiales y universitarias. ' + CAT.meta.research_note;
  }

  /* =========================================================
     14 bis. SECCIÓN MONOGRÁFICA DE FRESAS
     Datos en js/fresas.js. Es una sección independiente: no
     toca el catálogo ni el calendario general del huerto.
     ========================================================= */
  const CLAVE_COMPRA_FRESAS = 'huerto-fresas-compra-v1';

  const CLASE_VARIEDAD = {
    'Albion': 'jard--albion',
    'San Andreas': 'jard--sanandreas',
    'Mixta': 'jard--mixta'
  };

  function pintarFresasCabecera() {
    $('#fresasCifras').innerHTML = FRESAS.cifras.map(c => `
      <div class="tarjeta">
        <p class="riego-tarjeta__frec c-primavera" style="font-size:30px;">${c.n}</p>
        <p class="dato-etiqueta" style="margin-bottom:0;">${c.t}</p>
      </div>`).join('');

    $('#fresasSubnav').innerHTML = FRESAS.subnav
      .map(s => `<a href="#${s.id}">${s.t}</a>`).join('');
  }

  function pintarFresasDecision() {
    pintarTabla('#fresasDecision', ['Decisión', 'Qué haría'], FRESAS.decision);
    $('#fresasFrase').textContent = FRESAS.frase;
  }

  function pintarFresasVariedades() {
    $('#fresasVariedades').innerHTML = FRESAS.variedades.map(v => `
      <div class="tarjeta" data-reveal>
        <p class="dato-etiqueta">${v.papel}</p>
        <h4 class="titulo-4">${v.nombre}</h4>
        <p class="riego-tarjeta__frec c-primavera" style="font-size:22px;">${v.plantas}</p>
        <p class="regla__por" style="margin-bottom:14px;">${v.tipo}</p>
        <ul class="puntos">${v.fuerte.map(f => `<li><p>${f}</p></li>`).join('')}</ul>
        <p class="regla__por" style="margin-top:14px;">${v.nota}</p>
      </div>`).join('');

    const caja = j => `
      <div class="jard ${CLASE_VARIEDAD[j.v] || ''}">
        <span class="jard__id">${j.id}</span>
        <span class="jard__v">${j.v}</span>
        <span class="jard__f" aria-hidden="true">🍓🍓🍓🍓</span>
      </div>`;
    const fila = letra => FRESAS.jardineras_mapa.filter(j => j.fila === letra).map(caja).join('');

    $('#fresasMapa').innerHTML = `
      <p class="mapa__fila">Fila A · 20 fresas</p>
      <div class="mapa__linea">${fila('A')}</div>
      <p class="mapa__pasillo">Pasillo de 50-70 cm · cabe trabajar desde los dos lados</p>
      <p class="mapa__fila">Fila B · 20 fresas</p>
      <div class="mapa__linea">${fila('B')}</div>`;

    $('#fresasEtiquetado').innerHTML =
      FRESAS.etiquetado.map(t => `<li><p>${t}</p></li>`).join('');
  }

  function pintarFresasJardineras() {
    $('#fresasJardineraAviso').textContent = FRESAS.jardinera_aviso;
    pintarTabla('#fresasJardineraIdeal', ['Medida', 'Objetivo'], FRESAS.jardinera_ideal);
    $('#fresasJardineraPorque').innerHTML =
      FRESAS.jardinera_porque.map(t => `<li><p>${t}</p></li>`).join('');
    $('#fresasDrenaje').innerHTML =
      FRESAS.drenaje.map(t => `<li><p>${t}</p></li>`).join('');
  }

  function pintarFresasSitio() {
    $('#fresasPrioridades').innerHTML = FRESAS.prioridades_sitio.map((t, i) =>
      `<li><span class="pasos__n">0${i + 1}</span><p>${t}</p></li>`).join('');
  }

  function pintarFresasSustrato() {
    $('#fresasSustratoBusca').innerHTML =
      FRESAS.sustrato_busca.map(t => `<li><p>${t}</p></li>`).join('');
    $('#fresasSustratoEvita').innerHTML =
      FRESAS.sustrato_evita.map(t => `<li><p>${t}</p></li>`).join('');
    $('#fresasMezcla').innerHTML = FRESAS.sustrato_mezcla.map(t => {
      const partes = t.split(' ');
      return `<div class="tarjeta--plana">
        <p class="riego-tarjeta__frec c-primavera" style="font-size:24px;">${partes.shift()}</p>
        <p class="dato-valor" style="font-size:15px;">${partes.join(' ')}</p>
      </div>`;
    }).join('');
  }

  function pintarFresasPlantacion() {
    $('#fresasVentana').innerHTML = FRESAS.ventana.map(v => `
      <div class="riego-tarjeta">
        <p class="riego-tarjeta__est ${v.clase}">${v.t}</p>
        <p class="riego-tarjeta__nota">${v.d}</p>
      </div>`).join('');

    $('#fresasComprarPlanta').innerHTML =
      FRESAS.comprar_planta.map(t => `<li><p>${t}</p></li>`).join('');

    $('#fresasCorona').innerHTML = FRESAS.corona.map(c => `
      <div class="corona-caso ${c.mal ? 'corona-caso--mal' : 'corona-caso--bien'}">
        <p class="corona-caso__t">${c.t}</p>
        <p>${c.d}</p>
      </div>`).join('');

    $('#fresasPasos').innerHTML = FRESAS.pasos_plantacion.map((t, i) =>
      `<li><span class="pasos__n">${String(i + 1).padStart(2, '0')}</span><p>${t}</p></li>`).join('');

    $('#fresasFlores').innerHTML = FRESAS.flores_estolones.map(f => `
      <div class="tarjeta" data-reveal>
        <h4 class="titulo-4">${f.t}</h4>
        <p class="riego-tarjeta__nota">${f.d}</p>
      </div>`).join('');
  }

  function pintarFresasRiego() {
    $('#fresasRiegoComponentes').innerHTML =
      FRESAS.riego_componentes.map(t => `<li><p>${t}</p></li>`).join('');

    pintarTabla('#fresasTablaMinutos', ['Tiempo de riego', 'Agua por planta'],
      FRESAS.riego_minutos, [1]);

    $('#fresasRiegoPauta').innerHTML = FRESAS.riego_pauta.map(r => `
      <div class="riego-tarjeta${r.destacado ? ' riego-tarjeta--verano' : ''}">
        <p class="riego-tarjeta__est ${r.clase}">${r.est}</p>
        <p class="riego-tarjeta__frec ${r.clase}" style="font-size:22px;">${r.frec}</p>
        <p class="riego-tarjeta__nota">${r.nota}</p>
      </div>`).join('');

    $('#fresasSenalPoco').innerHTML =
      FRESAS.riego_senales.poco.map(t => `<li><p>${t}</p></li>`).join('');
    $('#fresasSenalExceso').innerHTML =
      FRESAS.riego_senales.exceso.map(t => `<li><p>${t}</p></li>`).join('');
  }

  function pintarFresasAgua() {
    pintarTabla('#fresasAnaliticas',
      ['Muestra', 'Conductividad', 'pH', 'Dureza', 'Cloruros', 'Sodio'],
      FRESAS.analiticas, [1, 2, 3, 4, 5]);
    pintarTabla('#fresasUmbrales',
      ['Parámetro', 'Sin restricción', 'Restricción ligera o moderada', 'Problemático'],
      FRESAS.umbrales);

    $('#fresasAguaPasos').innerHTML = FRESAS.agua_pasos.map(p => `
      <div class="tarjeta">
        <h4 class="titulo-4">${p.t}</h4>
        <p class="riego-tarjeta__nota">${p.d}</p>
      </div>`).join('');

    $('#fresasLavado').innerHTML = FRESAS.lavado;
    $('#fresasPh').textContent = FRESAS.ph_aviso;
  }

  function pintarFresasAbonado() {
    $('#fresasAbonado').innerHTML = FRESAS.abonado.map(a => `
      <div class="tarjeta" data-reveal>
        <p class="dato-etiqueta">${a.t}</p>
        <p class="riego-tarjeta__nota">${a.d}</p>
      </div>`).join('');
    $('#fresasAbonadoReglas').innerHTML =
      FRESAS.abonado_reglas.map(t => `<li><p>${t}</p></li>`).join('');
  }

  function pintarFresasDulzor() {
    $('#fresasDulzor').innerHTML = FRESAS.dulzor.map(d => `
      <div class="tarjeta">
        <p class="riego-tarjeta__est c-primavera">${d.n}</p>
        <h4 class="titulo-4">${d.t}</h4>
        <p class="riego-tarjeta__nota">${d.d}</p>
      </div>`).join('');

    $('#fresasCosecha').innerHTML =
      FRESAS.cosecha.map(t => `<li><p>${t}</p></li>`).join('');
    $('#fresasProduccion').textContent = FRESAS.produccion;
    $('#fresasMultiplicar').innerHTML = FRESAS.multiplicar.map((t, i) =>
      `<li><span class="pasos__n">0${i + 1}</span><p>${t}</p></li>`).join('');
    $('#fresasRenovacion').innerHTML =
      FRESAS.renovacion.map(t => `<li><p>${t}</p></li>`).join('');
  }

  /* Calendario propio de la fresa: 15 meses, de agosto 2026 a octubre 2027 */
  function pintarFresasCalendario() {
    const meses = FRESAS.calendario;

    $('#fresasBotonesMes').innerHTML = meses.map(m =>
      `<button type="button" class="mes-btn${m.id === estado.fresaMes ? ' activo' : ''}" data-fresa-mes="${m.id}">${m.corto}</button>`
    ).join('');

    const txt = { frio: 'Meses frescos', suave: 'Temperatura suave', calor: 'Calor extremo' };
    $('#fresasTemperaturas').innerHTML = meses.map(m =>
      `<span class="temp--${m.temp}" title="${m.nombre}: ${txt[m.temp]}"></span>`).join('');

    const m = meses.find(x => x.id === estado.fresaMes) || meses[0];
    $('#fresasFichaMes').innerHTML = `
      <div class="ficha-mes__cab">
        <h3>${m.nombre}</h3>
        <p>${m.lema}</p>
      </div>
      <div class="ficha-mes__celda">
        <p class="dato-etiqueta et-planta">Objetivo del mes</p>
        <p>${m.objetivo}</p>
      </div>
      <div class="ficha-mes__celda ficha-mes__celda--ancha">
        <p class="dato-etiqueta et-tarea">Qué hago</p>
        <ul class="puntos" style="margin-top:12px;">${m.tareas.map(t => `<li><p>${t}</p></li>`).join('')}</ul>
      </div>
      <div class="ficha-mes__celda--enlace" style="font-weight:500;">
        <p class="dato-etiqueta et-cosecha" style="margin-bottom:4px;">Ojo con esto</p>
        <p style="margin:0; color:var(--texto-2);">${m.ojo}</p>
      </div>`;
  }

  /* Lista de compra propia, con su propia clave de localStorage */
  function leerCompraFresas() {
    try { return JSON.parse(localStorage.getItem(CLAVE_COMPRA_FRESAS) || '{}') || {}; }
    catch (e) { return {}; }
  }

  function guardarCompraFresas(obj) {
    try { localStorage.setItem(CLAVE_COMPRA_FRESAS, JSON.stringify(obj)); } catch (e) { /* modo privado */ }
  }

  function pintarFresasCompra() {
    const marcados = leerCompraFresas();
    let n = 0;
    $('#fresasListaCompra').innerHTML = FRESAS.compra.map(g => `
      <div class="compra-grupo">
        <h3>${g.g}</h3>
        <ul class="compra-lista">
          ${g.items.map(item => {
            const id = 'cf-' + (n++);
            const on = marcados[item] ? ' checked' : '';
            return `<li class="compra-item">
              <label for="${id}">
                <input type="checkbox" id="${id}" data-item="${esc(item)}"${on}>
                <span>${item}</span>
              </label></li>`;
          }).join('')}
        </ul>
      </div>`).join('');

    $('#fresasMontaje').innerHTML = FRESAS.montaje.map((t, i) =>
      `<li><span class="pasos__n">${String(i + 1).padStart(2, '0')}</span><p>${t}</p></li>`).join('');

    actualizarProgresoCompraFresas();
  }

  function actualizarProgresoCompraFresas() {
    const cajas = $$('#fresasListaCompra input[type="checkbox"]');
    const hechas = cajas.filter(c => c.checked).length;
    const pct = cajas.length ? (hechas / cajas.length) * 100 : 0;
    $('#fresasCompraTexto').textContent = hechas + ' de ' + cajas.length + ' comprados';
    $('#fresasCompraBarra').style.width = pct + '%';
  }

  function pintarFresasErrores() {
    $('#fresasErrores').innerHTML = FRESAS.errores.map(e => `
      <article class="error">
        <div class="error__alto">
          <span class="error__n">${e.n}</span>
          <h3>${e.t}</h3>
        </div>
        <p>${e.d}</p>
        <p class="error__sol">En su lugar: ${e.s}</p>
      </article>`).join('');
  }

  function pintarFresasFuentes() {
    $('#fresasAdaptacion').textContent = FRESAS.adaptacion;
    $('#fresasFuentes').innerHTML = FRESAS.fuentes.map(f => `
      <li>
        <strong>${esc(f.t)}</strong>
        <span class="fuentes__ambito">${esc(f.d)}</span>
        ${f.url ? `<a href="${f.url}" target="_blank" rel="noopener">${f.url}</a>` : ''}
      </li>`).join('');
  }

  /* Calculadoras propias de la sección */
  function calcularFresasSustrato() {
    const jardineras = Math.round(num('#fresasNumJard', 10));
    const litros = num('#fresasLitrosJard', 55);
    const total = jardineras * litros;
    const conMargen = Math.round((total * 1.1) / 50) * 50; // margen del 10 %, al saco de 50 L
    $('#fresasResultadoSustrato').textContent = formatear(conMargen, 0) + ' L';
    $('#fresasResultadoSustratoTexto').textContent =
      formatear(total, 0) + ' L de relleno + un 10 % de margen: el sustrato se asienta y habrá que rellenar.';
  }

  function calcularFresasAgua() {
    const goteros = num('#fresasGoteros', 1);
    const caudal = num('#fresasCaudal', 2);
    const minutos = num('#fresasMinutos', 20);
    const plantas = Math.round(num('#fresasPlantas', 40));
    const porPlanta = goteros * caudal * (minutos / 60);
    const total = porPlanta * plantas;
    $('#fresasResultadoAgua').textContent = formatear(porPlanta, 2) + ' L por planta';
    $('#fresasResultadoAguaTexto').textContent =
      formatear(total, total < 10 ? 1 : 0) + ' L en total para ' + plantas +
      ' plantas · caudal de ' + formatear(goteros * caudal * plantas, 0) + ' L/h en el sistema';
  }

  function calcularFresasMezcla() {
    const red = num('#fresasEcRed', 1.4);
    const objetivo = num('#fresasEcObjetivo', 0.7);

    if (objetivo >= red) {
      $('#fresasResultadoMezcla').textContent = 'No hace falta mezclar';
      $('#fresasResultadoMezclaTexto').textContent =
        'Tu agua ya está en el objetivo o por debajo: riega con ella y vigila el drenaje.';
      return;
    }
    const pctRed = Math.round((objetivo / red) * 100);
    $('#fresasResultadoMezcla').textContent = pctRed + ' % red + ' + (100 - pctRed) + ' % lluvia u ósmosis';
    $('#fresasResultadoMezclaTexto').textContent =
      'Para pasar de ' + formatear(red, 2) + ' a ' + formatear(objetivo, 2) +
      ' mS/cm. Baja en la misma proporción sodio, cloruros y dureza.';
  }

  function pintarFresas() {
    pintarFresasCabecera();
    pintarFresasDecision();
    pintarFresasVariedades();
    pintarFresasJardineras();
    pintarAcordeon('#fresasEstructura', FRESAS.estructura);
    pintarFresasSitio();
    pintarAcordeon('#fresasSitio', FRESAS.sitio);
    pintarFresasSustrato();
    pintarFresasPlantacion();
    pintarFresasRiego();
    pintarFresasAgua();
    pintarFresasAbonado();
    pintarAcordeon('#fresasSalud', FRESAS.salud);
    pintarFresasDulzor();
    pintarFresasCalendario();
    pintarFresasCompra();
    pintarFresasErrores();
    pintarFresasFuentes();
    calcularFresasSustrato();
    calcularFresasAgua();
    calcularFresasMezcla();
  }

  function activarEventosFresas() {
    $('#fresasListaCompra').addEventListener('change', e => {
      if (e.target.type !== 'checkbox') return;
      const marcados = leerCompraFresas();
      const item = e.target.getAttribute('data-item');
      if (e.target.checked) marcados[item] = 1; else delete marcados[item];
      guardarCompraFresas(marcados);
      actualizarProgresoCompraFresas();
    });

    $('#fresasCompraReset').addEventListener('click', () => {
      guardarCompraFresas({});
      $$('#fresasListaCompra input[type="checkbox"]').forEach(c => { c.checked = false; });
      actualizarProgresoCompraFresas();
    });

    ['#fresasNumJard', '#fresasLitrosJard'].forEach(sel =>
      $(sel).addEventListener('input', calcularFresasSustrato));
    ['#fresasGoteros', '#fresasCaudal', '#fresasMinutos', '#fresasPlantas'].forEach(sel =>
      $(sel).addEventListener('input', calcularFresasAgua));
    ['#fresasEcRed', '#fresasEcObjetivo'].forEach(sel =>
      $(sel).addEventListener('input', calcularFresasMezcla));
  }

  /* =========================================================
     15. GLOSARIO FLOTANTE
     ========================================================= */
  function mostrarTermino(clave) {
    const t = GLOSARIO[clave];
    if (!t) return;
    $('#avisoTerminoTexto').innerHTML = '<strong>' + t.t + ':</strong> ' + t.d;
    $('#avisoTermino').hidden = false;
  }

  function ocultarTermino() { $('#avisoTermino').hidden = true; }

  /* =========================================================
     16. INTERFAZ: scroll, nav, reveal, menú
     ========================================================= */
  function activarProgreso() {
    const barra = $('#progreso');
    const enlaces = $$('.cabecera__nav a[href^="#"]');
    const secciones = enlaces
      .map(a => ({ a: a, s: document.getElementById(a.getAttribute('href').slice(1)) }))
      .filter(x => x.s);

    function alScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      barra.style.width = (max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0) + '%';

      let actual = null;
      const y = doc.scrollTop + 120;
      secciones.forEach(x => { if (x.s.offsetTop <= y) actual = x.a; });
      enlaces.forEach(a => a.classList.remove('activo'));
      if (actual && !actual.classList.contains('destacado')) actual.classList.add('activo');
    }

    window.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alScroll);
    alScroll();
  }

  function activarReveal() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    function desvelar(el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }

    const io = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          desvelar(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px' });

    let ocultos = [];
    $$('[data-reveal]:not([data-rv])').forEach(el => {
      el.setAttribute('data-rv', '1');
      if (el.getBoundingClientRect().top < window.innerHeight) return; // ya a la vista
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      io.observe(el);
      ocultos.push(el);
    });

    // Red de seguridad. El observador solo avisa cuando la intersección CAMBIA:
    // si un bloque pasa de estar bajo el pliegue a quedar por encima de un salto
    // (ancla, tecla Fin, scroll muy rápido) nunca llega a intersecar y se
    // quedaría invisible. Este barrido lo rescata.
    let pendiente = false;
    function barrer() {
      pendiente = false;
      ocultos = ocultos.filter(el => {
        if (el.getBoundingClientRect().bottom < 0) { desvelar(el); io.unobserve(el); return false; }
        return el.style.opacity === '0';
      });
      if (!ocultos.length) window.removeEventListener('scroll', alScroll);
    }
    function alScroll() {
      if (pendiente) return;
      pendiente = true;
      setTimeout(barrer, 100);
    }
    window.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('hashchange', alScroll);
    setTimeout(barrer, 600);
  }

  function activarMenu() {
    const boton = $('#menuBoton');
    const nav = $('#navPrincipal');
    boton.addEventListener('click', () => {
      const abierto = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* =========================================================
     17. EVENTOS
     ========================================================= */
  function activarEventos() {
    document.addEventListener('click', e => {
      const cat = e.target.closest('[data-categoria]');
      if (cat) {
        estado.categoria = cat.getAttribute('data-categoria');
        pintarFiltros(); pintarCatalogo(); return;
      }

      const chipMes = e.target.closest('[data-filtro-mes]');
      if (chipMes) {
        const n = parseInt(chipMes.getAttribute('data-filtro-mes'), 10);
        estado.filtroMes = estado.filtroMes === n ? 0 : n; // volver a tocarlo lo quita
        pintarFiltros(); pintarCatalogo(); return;
      }

      const modo = e.target.closest('[data-modo]');
      if (modo) {
        estado.modo = modo.getAttribute('data-modo');
        pintarFiltros(); pintarCatalogo(); return;
      }

      const verMes = e.target.closest('[data-ver-mes]');
      if (verMes) {
        estado.filtroMes = parseInt(verMes.getAttribute('data-ver-mes'), 10);
        estado.categoria = 'Todas';
        estado.modo = 'plantar';
        pintarFiltros(); pintarCatalogo();
        return; // el propio enlace #catalogo hace el desplazamiento
      }

      if (e.target.closest('#botonOrden')) {
        estado.orden = estado.orden === 'facil' ? 'grupo' : 'facil';
        pintarFiltros(); pintarCatalogo(); return;
      }

      const cultivo = e.target.closest('[data-cultivo]');
      if (cultivo) { abrirFicha(cultivo.getAttribute('data-cultivo')); return; }

      if (e.target.closest('[data-cerrar]') || e.target.id === 'fondoPanel') {
        cerrarFicha(); return;
      }

      const mes = e.target.closest('[data-mes]');
      if (mes) { estado.mes = parseInt(mes.getAttribute('data-mes'), 10); pintarCalendario(); return; }

      const fresaMes = e.target.closest('[data-fresa-mes]');
      if (fresaMes) {
        estado.fresaMes = fresaMes.getAttribute('data-fresa-mes');
        pintarFresasCalendario(); return;
      }

      const sim = e.target.closest('[data-sim]');
      if (sim) { estado.sim = parseInt(sim.getAttribute('data-sim'), 10); pintarSimulador(); return; }

      const termino = e.target.closest('[data-termino]');
      if (termino) { mostrarTermino(termino.getAttribute('data-termino')); return; }

      if (e.target.closest('#avisoTerminoCerrar')) { ocultarTermino(); return; }
    });

    let tiempoBusqueda;
    $('#busqueda').addEventListener('input', e => {
      clearTimeout(tiempoBusqueda);
      const v = e.target.value;
      tiempoBusqueda = setTimeout(() => { estado.busqueda = v.trim(); pintarCatalogo(); }, 140);
    });

    $('#listaCompra').addEventListener('change', e => {
      if (e.target.type !== 'checkbox') return;
      const marcados = leerCompra();
      const item = e.target.getAttribute('data-item');
      if (e.target.checked) marcados[item] = 1; else delete marcados[item];
      guardarCompra(marcados);
      actualizarProgresoCompra();
    });

    $('#compraReset').addEventListener('click', () => {
      guardarCompra({});
      $$('#listaCompra input[type="checkbox"]').forEach(c => { c.checked = false; });
      actualizarProgresoCompra();
    });

    ['#numGoteros', '#caudalGotero', '#minutosRiego'].forEach(sel =>
      $(sel).addEventListener('input', calcularAgua));
    ['#largoBancal', '#anchoBancal', '#altoBancal', '#numBancales'].forEach(sel =>
      $(sel).addEventListener('input', calcularSustrato));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { cerrarFicha(); ocultarTermino(); }
    });
  }

  /* =========================================================
     18. ARRANQUE
     ========================================================= */
  function iniciar() {
    pintarReglas();
    pintarClima();
    pintarZonas();
    pintarAcordeon('#acordeonInfra', INFRAESTRUCTURA);
    pintarTablaMacetas();
    pintarFiltros();
    pintarCatalogo();
    pintarSemilla();
    pintarTablaResumen();
    pintarCalendario();
    pintarRiego();
    calcularAgua();
    calcularSustrato();
    pintarAcordeon('#acordeonCuidados', CUIDADOS);
    pintarRutinas();
    pintarTablaNecesidades();
    pintarErrores();
    pintarDiagnostico();
    pintarCronologia();
    pintarPresupuesto();
    pintarCompra();
    pintarSimulador();
    pintarFuentes();
    pintarFresas();

    activarAcordeones();
    activarEventosFresas();
    activarEventos();
    activarMenu();
    activarProgreso();

    // La animación de entrada se monta después de `load`: para entonces el
    // navegador ya ha saltado al ancla de la URL o ha restaurado la posición
    // de scroll, así que sabemos de verdad qué está a la vista y qué no.
    if (document.readyState === 'complete') setTimeout(activarReveal, 0);
    else window.addEventListener('load', () => setTimeout(activarReveal, 0));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
