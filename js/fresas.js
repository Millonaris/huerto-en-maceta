/* =========================================================
   Mi Huerto en Maceta — PLAN MAESTRO DE FRESAS
   Sección 13 de la web. Contenido del documento
   "Plan maestro de fresas en Tortosa 2026-2027":
   40 plantas de día neutro (Albion + San Andreas) en diez
   jardineras de 1 m elevadas, ancladas y con goteo automático.

   Ojo: la ventana de plantación de la fresa "como cultivo del
   catálogo" sigue viviendo en js/catalogo.js (ficha «Fresa»).
   Aquí están las decisiones concretas de ESTE montaje.
   ========================================================= */

const FRESAS = {

  /* ---------- Cifras de cabecera ---------- */
  cifras: [
    { n: '40', t: 'plantas de día neutro' },
    { n: '10', t: 'jardineras de 1 metro' },
    { n: '4', t: 'plantas por jardinera' },
    { n: '25-30 cm', t: 'de profundidad, no menos' }
  ],

  /* ---------- Índice interno de la sección ---------- */
  subnav: [
    { id: 'fresas-decision',    t: 'La decisión' },
    { id: 'fresas-variedades',  t: 'Variedades' },
    { id: 'fresas-jardineras',  t: 'Jardineras' },
    { id: 'fresas-estructura',  t: 'Estructura y viento' },
    { id: 'fresas-sitio',       t: 'Sitio, sol y calor' },
    { id: 'fresas-sustrato',    t: 'Sustrato' },
    { id: 'fresas-plantacion',  t: 'Plantación' },
    { id: 'fresas-riego',       t: 'Riego' },
    { id: 'fresas-agua',        t: 'El agua de Tortosa' },
    { id: 'fresas-abonado',     t: 'Abonado' },
    { id: 'fresas-salud',       t: 'Salud y limpieza' },
    { id: 'fresas-dulzor',      t: 'Dulzor y cosecha' },
    { id: 'fresas-calendario',  t: 'Calendario 26-27' },
    { id: 'fresas-compra',      t: 'Compra y montaje' },
    { id: 'fresas-errores',     t: 'Errores' }
  ],

  /* ---------- 1. La decisión final, en una tabla ---------- */
  decision: [
    ['Plantas', '40 fresas de día neutro: 25 Albion + 15 San Andreas'],
    ['Jardineras', '10 unidades de 100 cm de largo × 20-25 cm de ancho × 25-30 cm de profundidad'],
    ['Volumen', 'Aproximadamente 50-65 L por jardinera, unos 55 L útiles'],
    ['Plantas por jardinera', '4, separadas 22-25 cm entre centros de corona'],
    ['Distribución', 'Dos filas de cinco jardineras, con pasillo de 50-70 cm'],
    ['Altura', 'Estructura a 40-50 cm del suelo, anclada al suelo o a una pared'],
    ['Sitio', 'Exterior con mucho sol pero protegido del viento fuerte'],
    ['Sustrato', '550-600 L, ligero y drenante, pH aproximado 5,5-6,5'],
    ['Riego', 'Goteo automático en pulsos, nunca agua entrando 24 horas'],
    ['Goteros', '1 autocompensante de 2 L/h por planta, a 5-8 cm de la corona'],
    ['Agua', 'Medir la EC del grifo; si sale cargada de sales, mezclar con lluvia u ósmosis'],
    ['Verano', 'Malla de sombreo del 30-40 % solo durante olas de calor'],
    ['Invierno', 'Fuera. Manta térmica guardada, solo para una helada excepcional'],
    ['Plantación', 'Entre mediados de septiembre y mediados de octubre de 2026, mirando el tiempo'],
    ['Primer mes', 'Quitar flores y estolones: primero raíces, luego fruta'],
    ['Cosecha', 'Cada 1-2 días cuando la producción sea fuerte']
  ],

  frase: 'Cuarenta fresas Albion y San Andreas en jardineras profundas de 1 m, elevadas 40-50 cm y ancladas, exterior soleado pero resguardado del viento, sustrato ligeramente ácido y drenante, goteo automático en pulsos, control de EC del agua, flores iniciales fuera, estolones fuera y protección ligera contra el calor extremo.',

  /* ---------- 2. Variedades ---------- */
  variedades: [
    {
      nombre: 'Albion',
      plantas: '25 plantas',
      papel: 'La base del proyecto',
      tipo: 'Día neutro · reflorescente',
      fuerte: [
        'Sabor muy bueno y dulzor alto.',
        'Fruta firme y de color rojo intenso.',
        'Producción repetida mientras la temperatura acompañe.',
        'Muy apropiada para contenedores.',
        'Produce menos estolones que las variedades clásicas: menos trabajo.'
      ],
      nota: 'UC ANR la describe como una referencia de sabor, y en ensayos de la Universidad de Minnesota Albion y San Andreas estuvieron entre las variedades más dulces evaluadas.'
    },
    {
      nombre: 'San Andreas',
      plantas: '15 plantas',
      papel: 'La compañera productiva',
      tipo: 'Día neutro · UC Davis',
      fuerte: [
        'Producción alta y bastante constante.',
        'Fruta de muy buena apariencia.',
        'Sabor comparable a Albion.',
        'Vigor inicial algo mayor.',
        'Pocos estolones en plena producción.'
      ],
      nota: 'Tener dos variedades permite comparar en casa cuál te gusta más y cuál aguanta mejor tu microclima, sin complicar el manejo.'
    },
    {
      nombre: 'Monterey',
      plantas: 'Opcional',
      papel: '¿Una tercera variedad?',
      tipo: 'Día neutro · solo si te apetece',
      fuerte: [
        'No es necesaria para el primer montaje.',
        'Si la encuentras en un vivero fiable, sustituye 5 Albion por 5 Monterey.',
        'UC ANR destaca su sabor y un posgusto dulce particular.'
      ],
      nota: 'Para arrancar prefiero no complicarlo: 25 Albion + 15 San Andreas. Dos variedades conocidas, muy buenas y fáciles de comparar entre sí.'
    }
  ],

  /* Reparto por jardinera: las dos variedades en las dos filas */
  jardineras_mapa: [
    { id: 'J1',  fila: 'A', v: 'Albion' },
    { id: 'J2',  fila: 'A', v: 'San Andreas' },
    { id: 'J3',  fila: 'A', v: 'Albion' },
    { id: 'J4',  fila: 'A', v: 'San Andreas' },
    { id: 'J5',  fila: 'A', v: 'Albion' },
    { id: 'J6',  fila: 'B', v: 'Albion' },
    { id: 'J7',  fila: 'B', v: 'San Andreas' },
    { id: 'J8',  fila: 'B', v: 'Albion' },
    { id: 'J9',  fila: 'B', v: 'San Andreas' },
    { id: 'J10', fila: 'B', v: 'Mixta' }
  ],

  etiquetado: [
    'Etiquetas duraderas: A1, A2, A3… para las Albion y S1, S2, S3… para las San Andreas.',
    'La jardinera J10 lleva la mezcla que haga falta para cerrar el reparto 25 / 15.',
    'En el móvil, tres notas al mes: fecha de plantación, cosecha aproximada, sabor, tamaño y problemas.',
    'No hace falta pesar cada fresa: con eso ya sabrás qué variedad funciona mejor en tu casa.'
  ],

  /* ---------- 3. Jardineras ---------- */
  jardinera_aviso: 'En la conversación salieron unas jardineras de unos 100 × 17,5 × 14,5 cm y 25 L. Para cultivar fresas pueden funcionar, pero no son las que compraría buscando lo mejor: Oregon State University recomienda para fresa en contenedor unos 25-46 cm de profundidad. Si todavía no las has comprado, cambia de modelo.',

  jardinera_ideal: [
    ['Largo', '100 cm'],
    ['Anchura', '20-25 cm'],
    ['Profundidad', '25-30 cm, mínimo 25'],
    ['Volumen', 'Aproximadamente 50-65 litros'],
    ['Color', 'Claro o medio, nunca negro a pleno sol'],
    ['Drenaje', 'Varios agujeros amplios y libres']
  ],

  jardinera_porque: [
    'Menos calentamiento del sustrato en pleno julio.',
    'Menos cambios bruscos de humedad entre riegos.',
    'Menos riesgo de que una tarde de viento y calor deje las raíces secas.',
    'Más margen si el riego falla unas horas.',
    'Acumulación de sales más lenta, que con el agua de Tortosa importa mucho.',
    'Plantas fáciles de mantener durante más de una temporada.'
  ],

  drenaje: [
    'Cada jardinera con varios agujeros de drenaje: es obligatorio.',
    'Nada de una capa de piedras de 5 cm en el fondo: roba volumen útil y no arregla un mal drenaje.',
    'Jardinera ligeramente elevada sobre el soporte para que el agua salga libre.',
    'Nunca debe quedar agua acumulada de forma permanente en el fondo.'
  ],

  /* ---------- 4. Estructura y viento (acordeón) ---------- */
  estructura: [
    {
      t: 'Distribución: dos filas de cinco jardineras',
      html: `<p>Cinco metros de jardinera en la fila A y cinco en la fila B: 10 jardineras y 40 plantas, con un pasillo de <strong>50-70 cm</strong> por el medio para trabajar y cosechar desde los dos lados.</p>
        <p>En cada metro van <strong>4 plantas separadas 22-25 cm entre centros</strong>. Caben cinco o seis, pero no las pondría: con cuatro tenemos mejor ventilación, más volumen de sustrato por planta, más luz, menos riesgo de Botrytis, fruta más accesible y menos competencia.</p>`
    },
    {
      t: 'Altura: 40-50 cm, no 60-80',
      html: `<p>Al principio hablamos de 60-80 cm de altura. Como en tu zona <strong>a veces hace mucho viento</strong>, lo bajaría a <strong>40-50 cm sobre el suelo</strong>.</p>
        <p>Con eso ya conseguimos lo importante: fruta lejos del suelo, trabajo cómodo, hojas y fresas cayendo por los laterales y buena ventilación. Y mantenemos el centro de gravedad bajo frente a las ráfagas.</p>`
    },
    {
      t: 'Cómo construir el soporte: tres opciones',
      html: `<p><strong>Opción A — bloques + largueros.</strong> Bloques de hormigón como apoyos y encima perfiles galvanizados o largueros resistentes, con tres puntos de apoyo por tramo largo para que no flexe. Es la más sencilla.</p>
        <p><strong>Opción B — estantería metálica de exterior.</strong> Una estructura galvanizada fuerte queda muy limpia y ocupa poco.</p>
        <p><strong>Opción C — madera.</strong> Funciona, pero debe ir bien protegida frente a la humedad y reforzada.</p>
        <p><strong>Carga que yo exigiría:</strong> que aguante <strong>60-70 kg por metro de jardinera</strong> sin deformarse. No porque cada metro pese eso, sino por margen: sustrato mojado, agua, plantas, fruta, viento y una persona apoyándose sin pensar.</p>`
    },
    {
      t: 'Anclaje contra el viento: esto no es opcional',
      html: `<p>No confiaría solo en el peso de las jardineras. Haría al menos una de estas cosas:</p>
        <ul>
          <li>fijar la estructura al suelo;</li>
          <li>fijarla a una pared resistente;</li>
          <li>usar picas o varillas de anclaje al terreno;</li>
          <li>unir las dos filas con travesaños inferiores para formar una sola pieza.</li>
        </ul>
        <p>La estructura completa debe comportarse como <strong>una pieza grande</strong>, no como diez jardineras independientes. Si una jardinera vacía se puede levantar o volcar con una ráfaga fuerte, el diseño no está terminado.</p>`
    }
  ],

  /* ---------- 5. Sitio, sol, calor y frío ---------- */
  prioridades_sitio: [
    'Exterior, siempre.',
    'Mucha luz.',
    'Protegidas del viento fuerte.',
    'Buen acceso al grifo.',
    'Buen drenaje alrededor.',
    'Posibilidad de montar sombreo en verano.'
  ],

  sitio: [
    {
      t: 'Sol: cuánto y a qué horas',
      html: `<p>Buscaría <strong>6 horas o más de sol directo</strong> durante la época productiva. Pero Tortosa tiene una particularidad: en pleno verano no necesitamos exprimir más radiación a las cinco de la tarde, necesitamos que las raíces no se cuezan.</p>
        <p>El emplazamiento perfecto tiene sol de mañana, sol de mediodía y algo de protección en la parte más dura de la tarde de julio y agosto. Si el sitio recibe sol todo el día no pasa nada: diseñaremos sombreo estacional.</p>`
    },
    {
      t: 'Orientación y separación de la pared',
      html: `<p>Si la parcela lo permite, filas aproximadamente <strong>norte-sur</strong> para repartir la luz. Pero es secundario: si una orientación este-oeste te permite poner las fresas junto a una pared que las protege del viento, elijo la <strong>protección del viento</strong> antes que la orientación teóricamente perfecta.</p>
        <p>No las pegaría a la pared. Dejaría <strong>20-30 cm</strong> detrás de la fila más cercana para que circule el aire, poder limpiar, llegar al tubo de riego y evitar humedad estancada.</p>`
    },
    {
      t: 'Cortavientos: permeable, nunca una lona cerrada',
      html: `<p>Una pared existente es ideal si no genera una zona completamente oscura. Si no la tienes, coloca un <strong>cortavientos permeable</strong>, no una lona cerrada que actúe como vela.</p>
        <p>El objetivo no es eliminar el aire: es bajar la velocidad de las ráfagas manteniendo la ventilación. No encerraría las fresas dentro de una caja de plástico.</p>`
    },
    {
      t: 'Calor: el problema de verdad en Tortosa',
      html: `<p>Las variedades de día neutro reducen su actividad reproductiva con calor excesivo. Cuando llegan periodos prolongados por encima de <strong>29-32 °C</strong>, una planta de día neutro puede dejar de formar flores y centrarse en sobrevivir.</p>
        <p>Por eso prepararía desde el principio unos soportes para colgar en verano una <strong>malla de sombreo del 30-40 %</strong>, y solo durante olas de calor o semanas con máximas persistentemente muy altas. Que proteja del sol agresivo de la tarde y mantenga el de la mañana.</p>
        <p>No la pondría todo el año, y no usaría malla del 70-90 %: daría demasiada sombra.</p>`
    },
    {
      t: 'Frío: menos importante de lo que parece',
      html: `<p>No metería las fresas dentro de casa durante un invierno normal. Toleran el frío mejor de lo que parece, y dentro de casa, con 1-2 horas de sol directo, perderíamos producción y dulzor claramente.</p>
        <p>Lo que sí compraría: una <strong>manta térmica agrícola ligera</strong> para emergencias. Se guarda doblada y solo se usa en una noche excepcional de helada, sobre todo si las plantas ya están floreciendo. El resto del invierno, fuera.</p>`
    },
    {
      t: '¿Y un miniinvernadero?',
      html: `<p>No cerraría las fresas dentro de un invernadero permanente: aquí el sobrecalentamiento puede ser mucho peor que el frío.</p>
        <p>Lo que sí podría hacer es un pequeño <strong>techo desmontable transparente</strong> para periodos muy lluviosos de primavera, dejando los laterales completamente abiertos: ayuda contra la Botrytis manteniendo flores y frutos más secos. Pero es <strong>opcional</strong>. Primero montaría las fresas abiertas y observaría una temporada.</p>`
    }
  ],

  /* ---------- 6. Sustrato ---------- */
  sustrato_busca: [
    'Apto para huerto, frutos rojos o fresa.',
    'Ligero.',
    'Buen drenaje.',
    'Buena retención de agua.',
    'Materia orgánica estable.',
    'pH aproximado 5,5-6,5 (las fuentes universitarias sitúan la fresa en 5,3-6,5).',
    'Salinidad o EC baja o moderada, si la etiqueta lo indica.'
  ],

  sustrato_evita: [
    'Tierra del propio terreno.',
    'Estiércol fresco.',
    'Compost casero muy salino sin conocerlo.',
    'Arena sola.',
    'Fibra de coco sola.',
    'Humus de lombriz puro.'
  ],

  sustrato_mezcla: [
    '70 % sustrato universal premium',
    '20 % fibra de coco',
    '10 % perlita'
  ],

  /* ---------- 7. Plantación ---------- */
  ventana: [
    { t: 'Ventana preferida', d: 'De mediados o finales de septiembre a mediados de octubre de 2026.', clase: 'c-primavera' },
    { t: 'Si el 20 de septiembre hace 33-35 °C', d: 'Esperamos. No hay ninguna prisa.', clase: 'c-verano' },
    { t: 'Si a finales de septiembre estamos en 24-29 °C', d: 'Perfecto para plantar.', clase: 'c-primavera' },
    { t: 'Regla', d: 'No una fecha fija: mirar el tiempo y plantar en unos días sin ola de calor.', clase: 'c-otono' }
  ],

  comprar_planta: [
    'Plantel en alveolo, plug o pequeña maceta, de vivero fiable. Nada de semillas: las variedades comerciales no se reproducen fielmente por semilla.',
    'Hojas verdes y firmes.',
    'Corona gruesa y sana.',
    'Sin manchas sospechosas.',
    'Sin raíces negras o podridas.',
    'Sin telarañas finas de ácaros ni pulgón visible.',
    'Etiqueta de variedad clara.'
  ],

  pasos_plantacion: [
    'Coloca las jardineras vacías en su sitio definitivo.',
    'Comprueba los anclajes.',
    'Comprueba el drenaje.',
    'Llena con sustrato dejando 2-3 cm hasta el borde.',
    'Riega el sustrato antes de plantar, para humedecerlo de forma uniforme.',
    'Marca las cuatro posiciones de cada jardinera.',
    'Haz el agujero justo para el cepellón.',
    'Saca la planta sin romper las raíces.',
    'Coloca la corona a ras de la superficie.',
    'Aprieta ligeramente alrededor.',
    'Riega otra vez.',
    'Instala el goteo inmediatamente.',
    'Los primeros días, vigila que ninguna planta se seque.'
  ],

  corona: [
    { t: 'Demasiado profunda', d: 'Corona enterrada: sube muchísimo el riesgo de pudrición.', mal: true },
    { t: 'Demasiado alta', d: 'Raíces al aire: se secan y la planta no arranca.', mal: true },
    { t: 'Correcto', d: 'El centro de la corona justo al nivel del sustrato.', mal: false }
  ],

  flores_estolones: [
    { t: 'Flores: fuera durante el establecimiento', d: 'La Universidad de Minnesota recomienda retirar las flores unas 4-6 semanas tras la plantación en fresas de día neutro, hasta que la planta tenga cinco o seis hojas desarrolladas. En otoño de 2026 lo que queremos construir es raíz, corona, hoja y reservas; no tres fresas pequeñas la semana de comprar la planta.' },
    { t: 'Estolones: cortar en producción', d: 'Los estolones son los brazos largos con los que la fresa fabrica plantas hijas. Una planta que alimenta hijas gasta energía que podría ir a flores, hojas, raíces y fruta. Durante la temporada de producción, cortarlos.' },
    { t: 'Después', d: 'Si el tiempo sigue suave y la planta está fuerte, puedes dejar alguna flor. Pero la gran recompensa la queremos en 2027.' }
  ],

  /* ---------- 8. Riego ---------- */
  riego_componentes: [
    'Programador de grifo fiable, a pilas.',
    'Filtro.',
    'Reductor de presión, aproximadamente 1-1,5 bar según el sistema elegido.',
    'Tubo principal de 16 mm.',
    'Microtubo de 4 mm si usamos gotero individual.',
    '40 goteros autocompensantes de 2 L/h: con 10 metros de cultivo en dos filas, queremos que la primera planta reciba lo mismo que la última.',
    'Tapones finales desmontables para poder purgar las líneas.'
  ],

  riego_minutos: [
    ['5 min', '0,17 L por planta'],
    ['10 min', '0,33 L'],
    ['15 min', '0,50 L'],
    ['20 min', '0,67 L'],
    ['30 min', '1 L']
  ],

  riego_pauta: [
    { est: 'Primeros 7-10 días', frec: '1 riego corto por la mañana', nota: 'Con tiempo suave basta. Si aún hace calor y viento, revisa por la tarde y da un segundo pulso corto solo si hace falta. El cepellón nunca debe secarse.', clase: 'c-otono' },
    { est: 'Octubre-noviembre', frec: 'Bajando la frecuencia', nota: 'Reducir conforme baje la temperatura. Comprobar que ninguna jardinera queda empapada.', clase: 'c-otono' },
    { est: 'Invierno', frec: 'Muy pocos riegos', nota: 'Puede bastar con dos o tres riegos por semana o menos, especialmente si llueve.', clase: 'c-invierno' },
    { est: 'Marzo-mayo', frec: 'Subiendo hasta diario', nota: 'Aumentar progresivamente. Con floración y producción fuerte puede ser necesario regar todos los días.', clase: 'c-primavera' },
    { est: 'Junio', frec: 'Diario y vigilando', nota: 'Riego diario y más atención: empieza el calor de verdad.', clase: 'c-verano' },
    { est: 'Julio-agosto', frec: '2 o 3 pulsos cortos', nota: 'Mejor varios pulsos cortos que un único riego enorme: mañana temprano, mediodía si el sustrato lo pide y un apoyo al final de la tarde si llega seco. No se activa por calendario: se activa por necesidad.', clase: 'c-verano', destacado: true }
  ],

  riego_senales: {
    poco: ['Hojas caídas por la mañana.', 'Bordes de hoja secos.', 'Sustrato muy ligero y seco, separado de las paredes.'],
    exceso: ['Sustrato siempre empapado.', 'Problemas en raíces y corona.', 'Hojas amarillentas sin explicación.', 'Hongos y mala aireación.']
  },

  /* ---------- 9. El agua de Tortosa ---------- */
  analiticas: [
    ['Ferreries · marzo 2026', '1.262 µS/cm', '7,6', '42 °F', '209 mg/L', '100 mg/L'],
    ['Santa Clara · julio 2026', '1.449 µS/cm', '7,8', '42 °F', '295 mg/L', '160 mg/L']
  ],

  umbrales: [
    ['Sodio', 'menos de 69 mg/L', '69-207 mg/L', 'más de 207 mg/L'],
    ['Cloruros', 'menos de 140 mg/L', '140-350 mg/L', 'más de 350 mg/L']
  ],

  agua_pasos: [
    { t: 'Paso 1 — Comprar un medidor de EC', d: 'Es barato y da muchísima información. Antes de montar nada caro, medimos el agua que sale de tu grifo concreto: alrededor de 0,5-0,8 mS/cm es bueno; 1,2-1,5 mS/cm se parece a las muestras municipales y para fresas intentaría mejorarla.' },
    { t: 'Paso 2 — Agua de lluvia', d: 'La primera opción. Cuando podamos almacenarla es excelente para mezclar con el agua de red. No hace falta regar siempre con 100 % lluvia.' },
    { t: 'Paso 3 — Mezclar con agua de ósmosis', d: 'Si la red da 1,4 mS/cm y la ósmosis está cerca de 0, una mezcla 50/50 nos deja cerca de 0,7 mS/cm antes de añadir fertilizante, y reduce a la mitad sodio, cloruros y dureza. Esto vale mucho más que cualquier bioestimulante milagroso.' },
    { t: 'Paso 4 — Si usamos solo agua de red', d: 'Se puede cultivar igual, pero hay que asegurar mucho drenaje, evitar sobrefertilizar, hacer riegos de lavado periódicos, controlar la acumulación de sales y renovar parte del sustrato con más frecuencia.' }
  ],

  lavado: 'De vez en cuando, y sobre todo con agua de EC alta, en lugar de un riego mínimo haz un riego largo y comprueba que <strong>sale agua claramente por todos los drenajes</strong>. Ese drenaje arrastra parte de las sales acumuladas. Después, dejar drenar por completo. Es el concepto de fracción de lavado que usa UC Extension, sin necesidad de cálculos agrícolas.',

  ph_aviso: 'El agua de red puede llegar con pH alcalino, pero no empieces echando vinagre o ácido cítrico sin medir: además del pH cuenta la alcalinidad del agua y la capacidad tampón del sustrato. Orden correcto: buen sustrato ligeramente ácido → medir EC → observar el pH del sustrato si aparecen problemas → y solo entonces plantear correcciones. Nada de "un chorrito de vinagre por garrafa".',

  /* ---------- 10. Abonado ---------- */
  abonado: [
    { t: 'Al plantar', d: 'Si el sustrato ya viene fertilizado, no añadiría un abono fuerte. Dejar que la planta enraíce.' },
    { t: 'Tras el establecimiento', d: 'Un abono orgánico granulado para frutos rojos, fresas u huerto, siguiendo la dosis para recipiente que indique el fabricante.' },
    { t: 'Final de invierno / primavera', d: 'Nueva aportación cuando empiece el crecimiento fuerte.' },
    { t: 'En producción', d: 'Si el granulado funciona y las hojas tienen buen color, no tocar nada. Si la planta muestra necesidad real, complementar con un líquido orgánico a dosis moderada.' }
  ],

  abonado_reglas: [
    'Nunca granulado a dosis completa + líquido a dosis completa al mismo tiempo.',
    'Un solo plan de abonado principal, no cinco productos a la vez.',
    'Queremos fresas, no una selva de hojas: el exceso de nitrógeno da vegetación tierna y densa, empeora la ventilación y favorece las pudriciones.',
    'Busca un producto para fresa, frutos rojos o fructificación. No abono de césped ni nada exageradamente nitrogenado.',
    'Con el agua de Tortosa tenemos un motivo más para no acumular sales innecesarias.'
  ],

  /* ---------- 11. Salud, limpieza y bichos ---------- */
  salud: [
    {
      t: 'Fruta limpia: acolchado fino, corona libre',
      html: `<p>El diseño ya ayuda muchísimo: las jardineras son estrechas y elevadas, así que buena parte de hojas, flores y frutos queda hacia los laterales.</p>
        <p><strong>Opción sencilla:</strong> una capa <strong>muy fina</strong> de paja limpia, no 10 cm; solo lo justo para evitar el contacto directo de la fruta y las salpicaduras.</p>
        <p><strong>Opción más técnica:</strong> una tira de acolchado horticultural blanco por arriba mantiene el sustrato más fresco en verano y la fruta limpia. La Universidad de Minnesota ha obtenido buenos resultados con plástico blanco-negro en cultivo de día neutro. Con tu enfoque ecológico no es imprescindible.</p>
        <p><strong>Siempre:</strong> sea paja, fibra o cualquier otro material, la corona debe quedar libre. No amontonar materia húmeda alrededor del centro de la planta.</p>`
    },
    {
      t: 'Botrytis o moho gris',
      html: `<p>Es uno de los problemas más típicos de la fresa, y las medidas que de verdad funcionan son culturales:</p>
        <ul>
          <li>riego por goteo, nunca ducha sobre flores y fruta;</li>
          <li>plantas separadas y buena ventilación;</li>
          <li>retirar fresas podridas inmediatamente;</li>
          <li>retirar hojas muertas;</li>
          <li>mantener la fruta separada del sustrato;</li>
          <li>no sobrefertilizar con nitrógeno.</li>
        </ul>
        <p>UC IPM recomienda precisamente camas elevadas, fruta separada del suelo, goteo y buena circulación de aire para reducir podredumbres.</p>`
    },
    {
      t: 'Araña roja',
      html: `<p>El calor seco favorece a los ácaros, así que en Tortosa es de las primeras cosas que vigilaría desde finales de primavera.</p>
        <p><strong>Una vez por semana:</strong> dar la vuelta a varias hojas y buscar puntitos amarillos, aspecto moteado, telarañas muy finas y ácaros pequeños. No esperar a que toda la fila esté tomada.</p>
        <p>Si aparece un problema, actuar de forma dirigida. No pulverizar productos "por si acaso" cada semana.</p>`
    },
    {
      t: 'Caracoles y babosas',
      html: `<p>La estructura elevada reduce muchísimo el problema, pero no lo elimina. Mantén el suelo de debajo limpio, sin montones de tablas húmedas ni paja acumulada, y revisa de noche si aparecen mordeduras.</p>
        <p>Si hiciera falta un cebo compatible con un enfoque ecológico, el <strong>fosfato férrico</strong> es una opción habitual; siempre siguiendo la etiqueta y con cuidado alrededor de niños y mascotas.</p>`
    },
    {
      t: 'Polinización',
      html: `<p>En exterior no necesitamos comprar una colmena. La fresa puede autopolinizarse y el aire ayuda, pero los insectos polinizadores mejoran la polinización y reducen los frutos deformados por polinización incompleta.</p>
        <ul>
          <li>no encerrar las plantas con malla fina durante la floración;</li>
          <li>tener cerca macetas con lavanda, romero, tomillo, albahaca en calor o flores sencillas para polinizadores;</li>
          <li>no pulverizar nada sobre flores abiertas cuando hay abejas trabajando.</li>
        </ul>
        <p>Esas aromáticas van en recipientes independientes: no las quiero dentro de las jardineras de fresa compitiendo por agua y nutrientes.</p>`
    },
    {
      t: 'Pájaros',
      html: `<p>Con 40 plantas y mucha fruta, tarde o temprano los pájaros descubren el buffet. Prepararía un arco o bastidor ligero sobre las dos filas.</p>
        <p>Cuando empiecen a ponerse rojas muchas fresas: colocar la red antipájaros, tensarla bien, que no toque los frutos y dejar acceso fácil para cosechar. Lo que no haría es cerrar una malla antinsectos durante la floración si impide entrar a los polinizadores.</p>`
    },
    {
      t: 'Higiene semanal y poda',
      html: `<p>Con 40 plantas, cinco minutos de limpieza a la semana hacen muchísimo: retirar fresas pasadas, fruta con moho, hojas completamente muertas, hojas rotas y los estolones que no queramos conservar. Nunca dejar fruta podrida dentro de la jardinera.</p>
        <p><strong>Y no podar en exceso.</strong> Las hojas producen la energía que alimenta la fruta: quita solo hojas viejas claramente deterioradas, enfermas o que se están pudriendo, más los estolones. Una fresa sana necesita buena masa foliar.</p>`
    }
  ],

  /* ---------- 12. Dulzor y cosecha ---------- */
  dulzor: [
    { n: '01', t: 'Variedad', d: 'Albion y San Andreas están entre las más dulces evaluadas.' },
    { n: '02', t: 'Luz suficiente', d: 'Durante toda la fase productiva.' },
    { n: '03', t: 'Planta sana', d: 'Con buena hoja, que es la fábrica de azúcar.' },
    { n: '04', t: 'Riego estable', d: 'Sin ciclos brutales de sequía y encharcamiento.' },
    { n: '05', t: 'Nitrógeno contenido', d: 'Pasarse da hoja, no sabor.' },
    { n: '06', t: 'Cosechar maduras', d: 'Nada de fruta verde o medio blanca.' },
    { n: '07', t: 'Sin estrés severo', d: 'Ni por calor extremo ni por salinidad.' }
  ],

  cosecha: [
    'En plena producción, revisar cada día o cada dos días.',
    'La Universidad de Minnesota recomienda cosechar cada 1-3 días en variedades de día neutro, y señala que hacerlo cada 1-2 días aumenta la fruta aprovechable y reduce problemas con algunas plagas.',
    'Fruta completamente coloreada, firme y seca.',
    'Mejor por la mañana, una vez desaparecido el rocío.',
    'No esperar a que esté casi fermentada pensando que será más dulce.'
  ],

  produccion: 'No prometo kilos exactos: dependen del plantel, del recipiente, del riego, del agua, de la temperatura, del sol, de la nutrición, de las plagas y de la edad de las plantas. Pero 40 plantas es cantidad suficiente para que, en plena producción, puedas cosechar muy a menudo. Antes de ampliar a 60-80, prefiero que las primeras 40 estén perfectas.',

  /* ---------- 13. Calendario de la fresa ---------- */
  calendario: [
    {
      id: '2026-08', corto: 'Ago 26', nombre: 'Agosto 2026', temp: 'calor',
      lema: 'Preparar, no plantar.',
      objetivo: 'Montar el sistema entero antes de que llegue una sola planta.',
      tareas: ['Decidir la ubicación y medir el espacio.', 'Comprar las jardineras adecuadas.', 'Fabricar la estructura y anclarla.', 'Montar el tubo principal de riego.', 'Comprar programador, filtro y reductor.', 'Comprar el medidor de EC y medir el agua de casa varias veces.'],
      ojo: 'Si sigue haciendo muchísimo calor, no corras a plantar.'
    },
    {
      id: '2026-09', corto: 'Sep 26', nombre: 'Septiembre 2026', temp: 'suave',
      lema: 'Plantación, cuando baje el calor.',
      objetivo: 'Las 40 plantas dentro y el goteo funcionando el mismo día.',
      tareas: ['Rellenar las jardineras y humedecer el sustrato.', 'Plantar las 40 fresas con la corona a ras.', 'Conectar los 40 goteros y comprobar uno por uno.', 'Quitar las flores iniciales y los estolones.', 'Vigilar el riego casi a diario durante el establecimiento.'],
      ojo: 'Si viene una semana de 35 °C, retrasa la plantación unos días o pon sombreo temporal.'
    },
    {
      id: '2026-10', corto: 'Oct 26', nombre: 'Octubre 2026', temp: 'suave',
      lema: 'Enraizamiento.',
      objetivo: 'Planta fuerte, no fruta.',
      tareas: ['Seguir quitando las primeras flores si aún no está bien establecida.', 'Quitar estolones.', 'Reducir el riego conforme refresca.', 'Comprobar que ninguna jardinera queda empapada.', 'Empezar a fijarse en qué Albion y qué San Andreas crecen mejor.'],
      ojo: 'Aquí se decide la cosecha de 2027: raíces antes que fresas.'
    },
    {
      id: '2026-11', corto: 'Nov 26', nombre: 'Noviembre 2026', temp: 'frio',
      lema: 'Muy poco trabajo.',
      objetivo: 'Mantener la planta limpia y la estructura firme.',
      tareas: ['Retirar hojas muertas.', 'Controlar la humedad.', 'No abonar por rutina si las plantas están sanas.', 'Comprobar anclajes antes de episodios de viento.'],
      ojo: 'El viento es el riesgo del mes, no el frío.'
    },
    {
      id: '2026-12', corto: 'Dic 26', nombre: 'Diciembre 2026', temp: 'frio',
      lema: 'Descanso.',
      objetivo: 'Que no falte drenaje ni sobre agua.',
      tareas: ['Riego bajo.', 'Retirar restos muertos.', 'Manta térmica preparada, pero no puesta de forma permanente.'],
      ojo: 'No meter las plantas dentro de casa.'
    },
    {
      id: '2027-01', corto: 'Ene 27', nombre: 'Enero 2027', temp: 'frio',
      lema: 'Mantenimiento mínimo.',
      objetivo: 'Revisar lo que el invierno puede haber estropeado.',
      tareas: ['Revisar drenajes.', 'Lavar sales si el sustrato o la EC indican acumulación.', 'Comprobar que el viento no ha aflojado los soportes.'],
      ojo: 'Un riego de lavado ahora vale más que cualquier abono.'
    },
    {
      id: '2027-02', corto: 'Feb 27', nombre: 'Febrero 2027', temp: 'frio',
      lema: 'Empieza la preparación de primavera.',
      objetivo: 'Dejar el sistema a punto antes de la floración.',
      tareas: ['Limpiar hojas muy viejas.', 'Añadir un poco de sustrato si ha bajado el nivel, sin cubrir coronas.', 'Primera aportación ligera de abono según el producto.', 'Revisar todos los goteros.', 'Volver a comprobar la EC del agua.'],
      ojo: 'Nivel de sustrato sí, coronas enterradas nunca.'
    },
    {
      id: '2027-03', corto: 'Mar 27', nombre: 'Marzo 2027', temp: 'suave',
      lema: 'Aquí empieza lo serio.',
      objetivo: 'Dejar que la planta florezca a fondo.',
      tareas: ['Dejar todas las flores.', 'Mantener los estolones cortados.', 'Empezar a vigilar polinizadores.', 'Aumentar el riego si suben las temperaturas.', 'Inspección semanal de ácaros y pulgón.', 'Preparar el bastidor de la red antipájaros.'],
      ojo: 'Se acabó quitar flores.'
    },
    {
      id: '2027-04', corto: 'Abr 27', nombre: 'Abril 2027', temp: 'suave',
      lema: 'Primeras cosechas importantes.',
      objetivo: 'Recoger a menudo y mantener la fruta sana.',
      tareas: ['Recoger fruta con frecuencia.', 'Quitar la fruta dañada.', 'Mantener los goteros limpios.', 'Revisar la humedad a diario.', 'No mojar flores ni fruta con manguera.', 'Empezar a comparar Albion contra San Andreas.'],
      ojo: 'Cosechar cada 1-2 días es parte del cultivo, no un detalle.'
    },
    {
      id: '2027-05', corto: 'May 27', nombre: 'Mayo 2027', temp: 'suave',
      lema: 'Mes estrella.',
      objetivo: 'La mayor producción del año.',
      tareas: ['Revisar casi cada día.', 'Cosechar cada 1-2 días.', 'Retirar fruta pasada.', 'Cortar estolones.', 'Vigilar el riego.', 'Vigilar Botrytis si hay lluvias.', 'Instalar la red si entran los pájaros.'],
      ojo: 'Con 40 plantas bien establecidas puede salir mucha fruta a la vez.'
    },
    {
      id: '2027-06', corto: 'Jun 27', nombre: 'Junio 2027', temp: 'calor',
      lema: 'Sigue la producción, empieza el calor.',
      objetivo: 'Producir sin que el calor pille al sistema sin preparar.',
      tareas: ['Aumentar la frecuencia de riego.', 'No aumentar el abono automáticamente.', 'Preparar la malla de sombreo.', 'Mirar araña roja dos veces por semana en calor seco.', 'Mantener la zona ventilada.'],
      ojo: 'Más calor no significa más abono.'
    },
    {
      id: '2027-07', corto: 'Jul 27', nombre: 'Julio 2027', temp: 'calor',
      lema: 'El objetivo cambia: no quemar las plantas.',
      objetivo: 'Supervivencia y salud, no producción.',
      tareas: ['Malla del 30-40 % en periodos de calor fuerte.', 'Varios pulsos cortos de riego si es necesario.', 'Evitar que el recipiente reciba sol directo.', 'Reducir expectativas de floración.', 'No forzar con abono.'],
      ojo: 'Una planta que descansa en julio puede volver a producir cuando refresque.'
    },
    {
      id: '2027-08', corto: 'Ago 27', nombre: 'Agosto 2027', temp: 'calor',
      lema: 'Parecido a julio.',
      objetivo: 'Aguantar bien el pico de calor.',
      tareas: ['Sombra parcial durante los picos.', 'Riego preciso.', 'Vigilancia de ácaros.', 'Nada de excesos de abono.'],
      ojo: 'A final de mes, si refresca, ir quitando el sombreo.'
    },
    {
      id: '2027-09', corto: 'Sep 27', nombre: 'Septiembre 2027', temp: 'suave',
      lema: 'Posible segunda fase muy interesante.',
      objetivo: 'Provocar una nueva oleada de floración.',
      tareas: ['Retirar el sombreo.', 'Fertilización moderada si corresponde.', 'Volver a dejar toda la floración.', 'Seleccionar las 3-5 mejores plantas para sacar hijas.'],
      ojo: 'Al bajar la temperatura, la fresa de día neutro vuelve a arrancar.'
    },
    {
      id: '2027-10', corto: 'Oct 27', nombre: 'Octubre 2027', temp: 'suave',
      lema: 'Cosecha de otoño y balance.',
      objetivo: 'Cosechar mientras el tiempo acompañe y decidir qué renovar.',
      tareas: ['Cosecha otoñal mientras dure.', 'Anotar producción y sabor por variedad.', 'Enraizar los estolones seleccionados en macetitas.', 'Revisar el nivel de sustrato y reponer los centímetros superficiales degradados.'],
      ojo: 'Con las notas de este mes decides el reparto de variedades del año siguiente.'
    }
  ],

  /* ---------- 14. Multiplicar y renovar ---------- */
  multiplicar: [
    'Selecciona 3-5 Albion especialmente productivas o sabrosas.',
    'Deja un estolón por planta, no más.',
    'Coloca la planta hija sobre una maceta pequeña con sustrato.',
    'Sujétala sin cortar el cordón que la une a la madre.',
    'Espera a que enraíce.',
    'Después corta la conexión: ya tienes recambio gratis.'
  ],

  renovacion: [
    'Revisar el rendimiento al final del segundo año.',
    'Sustituir las plantas débiles y conservar hijas sanas de las mejores.',
    'Renovar una parte importante cada 2-3 años si baja la productividad.',
    'Cada temporada, retirar algunos centímetros superficiales de sustrato si están degradados y reponer con sustrato fresco, sin enterrar las coronas.'
  ],

  /* ---------- 15. Compra y orden de montaje ---------- */
  compra: [
    { g: 'Plantas', items: ['25 fresas Albion', '15 fresas San Andreas'] },
    { g: 'Jardineras', items: [
      '10 jardineras de 1 m',
      'Profundidad ideal 25-30 cm',
      'Anchura ideal 20-25 cm',
      'Mínimo 50 L aproximadamente',
      'Drenaje abundante',
      'Color claro o medio'
    ]},
    { g: 'Estructura', items: [
      'Bloques, perfiles o estantería galvanizada para 40-50 cm de altura',
      'Anclajes al suelo o a la pared',
      'Travesaños para unir las dos filas',
      'Arcos o soportes para sombreo y red'
    ]},
    { g: 'Sustrato', items: [
      '550-600 L de sustrato de calidad',
      'pH objetivo aprox. 5,5-6,5',
      'Fibra de coco y perlita si tienes que hacer la mezcla tú'
    ]},
    { g: 'Riego', items: [
      'Programador de grifo fiable',
      'Filtro',
      'Reductor de presión',
      'Tubo de 16 mm',
      'Microtubo de 4 mm',
      '40 goteros autocompensantes de 2 L/h',
      'Llaves, codos y T según el diseño',
      'Tapones finales desmontables'
    ]},
    { g: 'Medición', items: ['Medidor de EC', 'Opcional: medidor de pH decente'] },
    { g: 'Protección', items: [
      'Malla de sombreo del 30-40 %',
      'Manta térmica agrícola',
      'Red antipájaros'
    ]},
    { g: 'Mantenimiento', items: [
      'Tijera pequeña y limpia para estolones',
      'Etiquetas duraderas',
      'Abono orgánico para fresa o frutos rojos',
      'Paja limpia para una capa muy fina'
    ]},
    { g: 'Agua (opcional pero muy recomendable)', items: [
      'Depósito de agua de lluvia',
      'O agua de ósmosis para mezclar si la EC de tu grifo es alta'
    ]}
  ],

  montaje: [
    'Medir el hueco donde irán las dos filas.',
    'Comprar una sola jardinera del modelo elegido.',
    'Comprobar en ella medidas reales interiores, drenaje, resistencia y encaje en la estructura.',
    'Si convence, comprar las otras nueve.',
    'Construir y anclar el soporte.',
    'Montar el riego completo y probarlo SIN plantas.',
    'Medir la EC del agua.',
    'Comprar el sustrato.',
    'Comprar las 40 plantas solo cuando todo esté preparado.',
    'Plantar en un día, o en dos días consecutivos.'
  ],

  /* ---------- 16. Errores a evitar ---------- */
  errores: [
    { n: '01', t: 'Jardineras demasiado poco profundas', d: 'Con 14,5 cm el sustrato se calienta y se seca a otra velocidad.', s: '25-30 cm de profundidad.' },
    { n: '02', t: 'Plantar 6-8 fresas por metro porque caben', d: 'Menos ventilación, más Botrytis y más competencia.', s: '4 por metro, a 22-25 cm.' },
    { n: '03', t: 'Enterrar la corona', d: 'La corona enterrada se pudre.', s: 'centro de la corona a ras del sustrato.' },
    { n: '04', t: 'Regar continuamente', d: 'Las raíces necesitan agua y oxígeno, no un pantano.', s: 'goteo en pulsos.' },
    { n: '05', t: 'Dejar secar el sustrato del todo entre riegos', d: 'El ciclo seco-empapado castiga la planta y el sabor.', s: 'humedad estable, comprobada con el dedo.' },
    { n: '06', t: 'Mantenerlo siempre empapado', d: 'Raíces y corona con problemas, hojas amarillas y hongos.', s: 'drenaje libre y riego por necesidad.' },
    { n: '07', t: 'Usar agua salina sin vigilar la acumulación de sales', d: 'El agua se evapora, las sales se quedan, y en jardinera van más rápido que en suelo profundo.', s: 'medir EC y hacer riegos de lavado.' },
    { n: '08', t: 'Poner mucho abono pensando que así habrá más fruta', d: 'Da hoja tierna, mala ventilación y más pudrición.', s: 'un solo plan de abonado, a dosis de etiqueta.' },
    { n: '09', t: 'Dejar todos los estolones', d: 'La planta alimenta hijas en vez de fruta.', s: 'cortarlos durante la producción.' },
    { n: '10', t: 'Meter las 40 plantas en casa por miedo al frío', d: 'Con 1-2 horas de sol directo se pierde producción y dulzor.', s: 'exterior resguardado y manta térmica solo en emergencia.' },
    { n: '11', t: 'Dejar las jardineras elevadas sin anclar en zona ventosa', d: 'Una ráfaga puede volcar la fila entera.', s: 'anclaje al suelo o a la pared, todo unido como una pieza.' },
    { n: '12', t: 'Usar malla de sombreo todo el año', d: 'Menos luz es menos azúcar.', s: 'solo en olas de calor, y del 30-40 %.' },
    { n: '13', t: 'Mojar flores y frutos todas las tardes', d: 'Es la receta del moho gris.', s: 'goteo a la zona radicular, nunca ducha.' },
    { n: '14', t: 'Dejar fresas podridas entre las plantas', d: 'Un foco de Botrytis dentro de la jardinera.', s: 'cinco minutos de limpieza a la semana.' },
    { n: '15', t: 'Tapar las flores con una malla que impida polinizadores', d: 'Frutos deformados por polinización incompleta.', s: 'red antipájaros cuando la fruta empieza a colorear, no en plena floración.' },
    { n: '16', t: 'Comprar productos milagro antes de resolver lo básico', d: 'Ningún bioestimulante arregla luz, agua, temperatura o raíces.', s: 'luz, agua, temperatura y raíces primero.' }
  ],

  /* ---------- 17. Fuentes del plan de fresas ---------- */
  fuentes: [
    { t: 'University of California Agriculture and Natural Resources (UC ANR)', d: 'Growing Strawberries in the Home Garden.' },
    { t: 'UC Davis Strawberry Breeding & Research Program', d: 'Fichas de Albion, San Andreas y Monterey.' },
    { t: 'University of Minnesota Extension', d: 'Day-neutral strawberries; retirada de flores y frecuencia de cosecha.' },
    { t: 'University of Minnesota Extension', d: 'Strawberry nutrient management.' },
    { t: 'Oregon State University Extension Service', d: 'Growing strawberries in your home garden; profundidad de contenedor.' },
    { t: 'Oregon State University Extension Service', d: 'Recomendaciones de Botrytis / gray mold y riego.' },
    { t: 'UC Integrated Pest Management (UC IPM)', d: 'Botrytis Rot (Gray Mold) on Strawberries y guías de cultivo.', url: 'https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-strawberry/' },
    { t: 'UC Cooperative Extension', d: 'Manejo de salinidad y calidad del agua de riego; fracción de lavado.' },
    { t: 'USDA Agricultural Research Service', d: 'Sensibilidad de la fresa a la salinidad.' },
    { t: 'FAO', d: 'Calidad del agua de riego y tolerancia de cultivos a la salinidad.' },
    { t: 'Aigües de Tortosa', d: 'Analíticas oficiales de la red de 2026 (Santa Clara y Ferreries, entre otras).' },
    { t: 'Royal Horticultural Society (RHS)', d: 'Cultivo de fresas en recipientes y colocación de la corona.' }
  ],

  adaptacion: 'No existe una guía universitaria que diga literalmente "40 Albion en diez jardineras de una casa de Tortosa". Esta configuración es una adaptación razonada de la investigación sobre variedades de día neutro, cultivo mediterráneo de fresa, manejo de contenedores, respuesta al calor, requisitos de riego, sensibilidad a la salinidad, las analíticas recientes del agua de Tortosa y la necesidad de proteger el sistema del viento. Con dos medidas tuyas — EC del agua y horas reales de sol del sitio elegido — se puede afinar todavía más.'
};
