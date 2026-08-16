/* =========================================================
   Mi Huerto en Maceta — lógica de la web
   JavaScript sin dependencias. Se apoya en js/datos.js.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Utilidades ---------- */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function esc(txt) {
    return String(txt)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const LETRAS_MES = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  const GRUPOS = {
    'Árboles frutales': { clase: 'etiqueta--arbol',     corto: 'Árbol' },
    'Frutas pequeñas':  { clase: 'etiqueta--fruta',     corto: 'Fruta' },
    'Verduras':         { clase: 'etiqueta--verdura',   corto: 'Verdura' },
    'Aromáticas':       { clase: 'etiqueta--aromatica', corto: 'Aromática' }
  };

  function htmlDificultad(dif, grande) {
    let out = '<span class="puntos-dif' + (grande ? ' puntos-dif--grande' : '') + '">';
    for (let i = 1; i <= 5; i++) {
      const on = i <= dif ? ' on' + (dif >= 3 ? ' alta' : '') : '';
      out += '<span class="' + on.trim() + '"></span>';
    }
    return out + '</span>';
  }

  function htmlTira(meses, grande, resaltado) {
    // Se usa <span> en lugar de <div> porque la tira vive dentro de un <button>.
    let out = '<span class="tira' + (grande ? ' tira--grande' : '') + '">';
    LETRAS_MES.forEach((l, i) => {
      let clases = meses.indexOf(i + 1) >= 0 ? 'on' : '';
      if (resaltado && resaltado === i + 1) clases += ' foco';
      out += '<span' + (clases ? ' class="' + clases.trim() + '"' : '') + '>' + l + '</span>';
    });
    return out + '</span>';
  }

  /* ---------- Estado ---------- */
  const hoy = new Date().getMonth() + 1;
  const estado = {
    filtro: 'Todas',
    filtroMes: 0,          // 0 = cualquier mes
    orden: 'grupo',
    mes: hoy,
    sim: hoy,
    abierta: null
  };

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

  function pintarTablaMacetas() {
    pintarTabla('#tablaMacetas', ['Planta', 'Recipiente objetivo'], MACETAS, [1]);
  }

  /* =========================================================
     3. ACORDEONES
     ========================================================= */
  function pintarAcordeon(selector, datos) {
    $(selector).innerHTML = datos.map((d, i) => `
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
     4. CATÁLOGO
     ========================================================= */
  function plantasVisibles() {
    let lista = PLANTAS.slice();
    if (estado.orden === 'facil') {
      lista.sort((a, b) => a.dif - b.dif || a.nombre.localeCompare(b.nombre, 'es'));
    }
    if (estado.filtro !== 'Todas') lista = lista.filter(p => p.grupo === estado.filtro);
    if (estado.filtroMes) lista = lista.filter(p => p.meses.indexOf(estado.filtroMes) >= 0);
    return lista;
  }

  function pintarFiltros() {
    const nombres = ['Todas', 'Árboles frutales', 'Frutas pequeñas', 'Verduras', 'Aromáticas'];
    const botones = nombres.map(n =>
      `<button type="button" class="chip${estado.filtro === n ? ' activo' : ''}" data-filtro="${esc(n)}">${n}</button>`
    ).join('');
    const orden = `<button type="button" class="chip chip--orden" id="botonOrden">Orden: ${
      estado.orden === 'facil' ? 'más fáciles primero' : 'por grupo'}</button>`;
    $('#filtros').innerHTML = botones + orden;

    const cualquiera = `<button type="button" class="chip chip--mes${
      estado.filtroMes === 0 ? ' activo' : ''}" data-filtro-mes="0">Cualquier mes</button>`;
    const meses = MESES.map(m => {
      const cuantas = PLANTAS.filter(p => p.meses.indexOf(m.n) >= 0).length;
      return `<button type="button" class="chip chip--mes${
        estado.filtroMes === m.n ? ' activo' : ''}${cuantas ? '' : ' vacio'}" data-filtro-mes="${m.n}"
        title="${m.nombre}: ${cuantas} ${cuantas === 1 ? 'planta' : 'plantas'}">${m.corto}<span class="chip__n">${cuantas}</span></button>`;
    }).join('');
    $('#filtrosMes').innerHTML = cualquiera + meses;
  }

  function textoConteo(n) {
    const grupo = estado.filtro === 'Todas' ? '' : ' de ' + estado.filtro.toLowerCase();
    const unidad = n === 1 ? ' planta' : ' plantas';
    if (!estado.filtroMes) {
      return n + unidad + grupo + (estado.filtro === 'Todas' ? ' en total' : '');
    }
    const mes = MESES.find(m => m.n === estado.filtroMes).nombre.toLowerCase();
    return n === 0
      ? 'Nada' + grupo + ' que plantar en ' + mes
      : n + unidad + grupo + ' que se plantan en ' + mes;
  }

  function pintarCatalogo() {
    const lista = plantasVisibles();

    $('#conteo').textContent = textoConteo(lista.length);
    $('#sinResultados').hidden = lista.length > 0;

    $('#rejillaPlantas').innerHTML = lista.map(p => {
      const g = GRUPOS[p.grupo];
      const v = VIAS[(VIA_PLANTA[p.id] || {}).via] || null;
      return `
      <button type="button" class="planta" data-planta="${p.id}">
        <span class="planta__alto">
          <span class="planta__nombre">${p.nombre}</span>
          <span class="etiqueta ${g.clase}">${g.corto}</span>
        </span>
        <span class="planta__corto">${p.corto}</span>
        <span class="dificultad">
          <span class="dificultad__t">Dificultad</span>
          ${htmlDificultad(p.dif)}
        </span>
        <span>
          ${htmlTira(p.meses, false, estado.filtroMes)}
          <span class="planta__pie">
            <span>Plantar: ${p.plantarCorto}</span>
            ${v ? `<span class="via ${v.clase}">${v.t}</span>` : ''}
          </span>
        </span>
      </button>`;
    }).join('');
  }

  /* ---------- Cómo se empieza esta planta ---------- */
  function htmlVia(id) {
    const d = VIA_PLANTA[id];
    if (!d) return '';
    const v = VIAS[d.via];
    const etiquetaSemilla = {
      semilla:  'Siembra directa',
      material: 'Qué plantas'
    }[d.via] || 'Desde semilla';
    return `
      <div class="bloque-via">
        <p class="subtitulo-bloque" style="margin-bottom:10px;">Cómo se empieza</p>
        <p class="bloque-via__reco"><span class="via ${v.clase}">${v.t}</span> ${d.reco}</p>
        <dl class="bloque-via__lista">
          ${d.semilla ? `<dt>${etiquetaSemilla}</dt><dd>${d.semilla}</dd>` : ''}
          ${d.trasplante ? `<dt>Trasplante</dt><dd>${d.trasplante}</dd>` : ''}
        </dl>
        ${d.nota ? `<p class="bloque-via__nota">${d.nota}</p>` : ''}
      </div>`;
  }

  /* ---------- Panel lateral ---------- */
  function abrirFicha(id) {
    const p = PLANTAS.find(x => x.id === id);
    if (!p) return;
    const g = GRUPOS[p.grupo];

    $('#panel').innerHTML = `
      <div class="panel__alto">
        <div>
          <span class="etiqueta ${g.clase}">${p.grupo}</span>
          <h3 class="panel__nombre">${p.nombre}</h3>
          <p class="panel__variedad">${p.variedad}</p>
        </div>
        <button type="button" class="cerrar" data-cerrar aria-label="Cerrar ficha">×</button>
      </div>

      <div class="panel__dif">
        <span>Dificultad ${p.dif} de 5</span>
        ${htmlDificultad(p.dif, true)}
      </div>

      <div class="rejilla rejilla--3" style="gap:12px; margin-bottom:22px;">
        <div class="tarjeta--plana"><p class="dato-etiqueta">Cuándo plantar</p><p class="dato-valor">${p.plantar}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Cuándo cosechar</p><p class="dato-valor">${p.cosecha}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Dónde va</p><p class="dato-valor">${p.maceta}</p></div>
        <div class="tarjeta--plana"><p class="dato-etiqueta">Riego</p><p class="dato-valor">${p.riego}</p></div>
      </div>

      <p class="subtitulo-bloque">Meses de plantación</p>
      <div style="margin-bottom:24px;">${htmlTira(p.meses, true, estado.filtroMes)}</div>

      ${htmlVia(p.id)}

      ${p.aviso ? `<div class="aviso"><p class="aviso__t">Aviso</p><p>${p.aviso}</p></div>` : ''}

      <p class="subtitulo-bloque">Qué hacer exactamente</p>
      <p style="margin:0 0 24px; color:var(--texto-2);">${p.accion}</p>

      <p class="subtitulo-bloque">Trucos de principiante</p>
      <ol class="puntos">
        ${p.trucos.map(t => `<li><p>${t}</p></li>`).join('')}
      </ol>`;

    $('#fondoPanel').hidden = false;
    document.body.style.overflow = 'hidden';
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
     5. CALENDARIO
     ========================================================= */
  function pintarCalendario() {
    $('#botonesMes').innerHTML = MESES.map(m =>
      `<button type="button" class="mes-btn${m.n === estado.mes ? ' activo' : ''}" data-mes="${m.n}">${m.corto}</button>`
    ).join('');

    const txt = { frio: 'Meses frescos', suave: 'Temperatura suave', calor: 'Calor extremo' };
    $('#temperaturasMes').innerHTML = MESES.map(m =>
      `<span class="temp--${m.temp}" title="${m.nombre}: ${txt[m.temp]}"></span>`).join('');

    const m = MESES.find(x => x.n === estado.mes);
    const a = MES_ACCIONES[estado.mes] || {};
    $('#fichaMes').innerHTML = `
      <div class="ficha-mes__cab">
        <h3>${m.nombre}</h3>
        <p>${m.lema}</p>
      </div>
      <div class="ficha-mes__celda"><p class="dato-etiqueta et-planta">Se planta</p><p>${m.planta}</p></div>
      <div class="ficha-mes__celda"><p class="dato-etiqueta et-cosecha">Se cosecha</p><p>${m.cosecha}</p></div>
      <div class="ficha-mes__celda"><p class="dato-etiqueta et-tarea">Tu tarea</p><p>${m.tarea}</p></div>
      <div class="ficha-mes__celda"><p class="dato-etiqueta et-semilla">Siembra directa</p><p>${a.directa || '—'}</p></div>
      <div class="ficha-mes__celda"><p class="dato-etiqueta et-plantel">Compra hecho</p><p>${a.plantel || '—'}</p></div>
      <div class="ficha-mes__celda ficha-mes__celda--enlace">
        <a href="#catalogo" data-ver-mes="${m.n}">Ver las plantas de ${m.nombre.toLowerCase()} en el catálogo →</a>
      </div>`;
  }

  /* =========================================================
     5 bis. SEMILLA O PLANTEL
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

    const cab = ['Cultivo', 'Si partes de semilla', 'Cuándo va al bancal', 'Si compras plantel', 'Lo recomendado'];
    $('#tablaSemilla').innerHTML = TABLA_SEMILLA.map(f => `
      <tr>
        <td data-etiqueta="${cab[0]}"><strong>${f[0]}</strong></td>
        <td data-etiqueta="${cab[1]}">${f[1]}</td>
        <td data-etiqueta="${cab[2]}" class="num">${f[2]}</td>
        <td data-etiqueta="${cab[3]}">${f[3]}</td>
        <td data-etiqueta="${cab[4]}"><span class="via ${(VIAS[claseVia(f[4])] || {}).clase || ''}">${f[4]}</span></td>
      </tr>`).join('');

    $('#listaPrimerAno').innerHTML = PRIMER_ANO.map(b => `
      <div class="tarjeta" data-reveal>
        <span class="via ${VIAS[b.via].clase}">${VIAS[b.via].t}</span>
        <h4 class="titulo-4" style="margin-top:12px;">${b.t}</h4>
        <ul class="puntos">${b.items.map(i => `<li><p>${i}</p></li>`).join('')}</ul>
      </div>`).join('');
  }

  // Traduce el texto de la columna "lo recomendado" a una de las cuatro vías.
  function claseVia(txt) {
    const t = txt.toLowerCase();
    if (t.indexOf('diente') >= 0 || t.indexOf('patata') >= 0 || t.indexOf('tubérculo') >= 0) return 'material';
    if (t.indexOf('plantel') >= 0) return 'plantel';
    if (t.indexOf('semilla directa') >= 0) return 'semilla';
    return 'vivero';
  }

  /* =========================================================
     6. RIEGO
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
     7. CUIDADOS
     ========================================================= */
  function pintarRutinas() {
    $('#listaRutinas').innerHTML = RUTINAS.map(r => `
      <div class="tarjeta" data-reveal>
        <p class="dato-etiqueta">${r.tiempo}</p>
        <h4 class="titulo-4">${r.t}</h4>
        <ul class="puntos">${r.items.map(i => `<li><p>${i}</p></li>`).join('')}</ul>
      </div>`).join('');
  }

  /* Pinta una tabla. `cabeceras` se copia en cada celda como data-etiqueta:
     en móvil las tablas se convierten en tarjetas y esa etiqueta es la que
     hace de título de cada dato, para no tener que arrastrar de lado. */
  function pintarTabla(selector, cabeceras, filas, columnasNum) {
    const num = columnasNum || [];
    $(selector).innerHTML = filas.map(f =>
      '<tr>' + f.map((c, i) => {
        const clase = num.indexOf(i) >= 0 ? ' class="num"' : '';
        const cont = i === 0 ? `<strong>${c}</strong>` : c;
        return `<td data-etiqueta="${esc(cabeceras[i] || '')}"${clase}>${cont}</td>`;
      }).join('') + '</tr>').join('');
  }

  /* =========================================================
     8. ERRORES Y DIAGNÓSTICO
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
     9. PLAN 2026-2027
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
     10. LISTA DE COMPRA
     ========================================================= */
  const CLAVE_COMPRA = 'huerto-compra-v1';

  function leerCompra() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_COMPRA) || '{}') || {};
    } catch (e) { return {}; }
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
     11. QUÉ PLANTO HOY
     ========================================================= */
  function pintarSimulador() {
    $('#botonesSim').innerHTML = MESES.map(m =>
      `<button type="button" class="mes-btn${m.n === estado.sim ? ' activo' : ''}" data-sim="${m.n}">${m.corto}</button>`
    ).join('');

    const mes = MESES.find(m => m.n === estado.sim);
    const lista = PLANTAS.filter(p => p.meses.indexOf(estado.sim) >= 0);

    $('#simTitulo').textContent = lista.length
      ? 'En ' + mes.nombre.toLowerCase() + ' puedes plantar ' + lista.length + (lista.length === 1 ? ' cosa' : ' cosas')
      : 'En ' + mes.nombre.toLowerCase() + ' no se planta nada';

    $('#simSub').textContent = lista.length
      ? mes.lema
      : 'Y está bien. Tu tarea este mes: ' + mes.tarea.charAt(0).toLowerCase() + mes.tarea.slice(1);

    $('#simLista').innerHTML = lista.map(p => {
      const g = GRUPOS[p.grupo];
      return `
      <button type="button" class="simulador__item" data-planta="${p.id}">
        <span style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <span class="simulador__nombre">${p.nombre}</span>
          <span class="etiqueta ${g.clase}">${g.corto}</span>
        </span>
        <span class="simulador__accion">${p.accion}</span>
      </button>`;
    }).join('');
  }

  /* =========================================================
     12. FUENTES
     ========================================================= */
  function pintarFuentes() {
    $('#listaFuentes').innerHTML = FUENTES.map(f => `
      <li>
        <strong>${f.t}</strong>
        <a href="${f.u}" target="_blank" rel="noopener">${f.u}</a>
      </li>`).join('');
  }

  /* =========================================================
     13. GLOSARIO FLOTANTE
     ========================================================= */
  function mostrarTermino(clave) {
    const t = GLOSARIO[clave];
    if (!t) return;
    $('#avisoTerminoTexto').innerHTML = '<strong>' + t.t + ':</strong> ' + t.d;
    $('#avisoTermino').hidden = false;
  }

  function ocultarTermino() { $('#avisoTermino').hidden = true; }

  /* =========================================================
     14. INTERFAZ: scroll, nav, reveal, menú
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

    // Se revela también lo que queda POR ENCIMA del viewport: si no, al entrar
    // por un enlace con ancla o al recargar a media página, esos bloques nunca
    // llegarían a intersecar y se quedarían invisibles para siempre.
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
     15. EVENTOS GLOBALES
     ========================================================= */
  function activarEventos() {
    document.addEventListener('click', e => {
      // Filtros del catálogo
      const chip = e.target.closest('[data-filtro]');
      if (chip) {
        estado.filtro = chip.getAttribute('data-filtro');
        pintarFiltros(); pintarCatalogo(); return;
      }

      // Filtro por mes de plantación
      const chipMes = e.target.closest('[data-filtro-mes]');
      if (chipMes) {
        const n = parseInt(chipMes.getAttribute('data-filtro-mes'), 10);
        estado.filtroMes = estado.filtroMes === n ? 0 : n; // volver a tocarlo lo quita
        pintarFiltros(); pintarCatalogo(); return;
      }

      // «Ver las plantas de <mes> en el catálogo»
      const verMes = e.target.closest('[data-ver-mes]');
      if (verMes) {
        estado.filtroMes = parseInt(verMes.getAttribute('data-ver-mes'), 10);
        estado.filtro = 'Todas';
        pintarFiltros(); pintarCatalogo();
        return; // el propio enlace #catalogo hace el desplazamiento
      }

      if (e.target.closest('#botonOrden')) {
        estado.orden = estado.orden === 'facil' ? 'grupo' : 'facil';
        pintarFiltros(); pintarCatalogo(); return;
      }

      // Abrir ficha de planta
      const planta = e.target.closest('[data-planta]');
      if (planta) { abrirFicha(planta.getAttribute('data-planta')); return; }

      // Cerrar ficha
      if (e.target.closest('[data-cerrar]') || e.target.id === 'fondoPanel') {
        cerrarFicha(); return;
      }

      // Calendario
      const mes = e.target.closest('[data-mes]');
      if (mes) { estado.mes = parseInt(mes.getAttribute('data-mes'), 10); pintarCalendario(); return; }

      // Simulador
      const sim = e.target.closest('[data-sim]');
      if (sim) { estado.sim = parseInt(sim.getAttribute('data-sim'), 10); pintarSimulador(); return; }

      // Glosario
      const termino = e.target.closest('[data-termino]');
      if (termino) { mostrarTermino(termino.getAttribute('data-termino')); return; }

      if (e.target.closest('#avisoTerminoCerrar')) { ocultarTermino(); return; }
    });

    // Lista de compra
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

    // Calculadoras
    ['#numGoteros', '#caudalGotero', '#minutosRiego'].forEach(sel =>
      $(sel).addEventListener('input', calcularAgua));
    ['#largoBancal', '#anchoBancal', '#altoBancal', '#numBancales'].forEach(sel =>
      $(sel).addEventListener('input', calcularSustrato));

    // Teclado
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { cerrarFicha(); ocultarTermino(); }
    });
  }

  /* =========================================================
     16. ARRANQUE
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
    pintarCalendario();
    pintarRiego();
    calcularAgua();
    calcularSustrato();
    pintarAcordeon('#acordeonCuidados', CUIDADOS);
    pintarRutinas();
    const cabHort = ['Cultivo', 'Inicio fácil', 'Separación', 'Lugar recomendado', 'Dificultad'];
    pintarTabla('#tablaVerano', cabHort, HORTALIZAS_VERANO, [2]);
    pintarTabla('#tablaInvierno', cabHort, HORTALIZAS_INVIERNO, [2]);
    pintarErrores();
    pintarDiagnostico();
    pintarCronologia();
    pintarPresupuesto();
    pintarCompra();
    pintarSimulador();
    pintarFuentes();

    activarAcordeones();
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
