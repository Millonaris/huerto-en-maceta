/* =========================================================
   Mi Huerto en Maceta — datos
   Contenido del "Plan definitivo de huerto, frutales y aromáticas.
   Tortosa (Tarragona) 2026-2027".
   ========================================================= */



/* ---------------------------------------------------------
   2. CALENDARIO MES A MES
   --------------------------------------------------------- */
const MESES = [
  { n: 1, corto: 'Ene', nombre: 'Enero', lema: 'Mes de plantar árboles y podar.', tarea: 'Podar los caducos mientras están sin hojas, revisar tutores y comprobar que el goteo no tenga fugas.', temp: 'frio' },
  { n: 2, corto: 'Feb', nombre: 'Febrero', lema: 'Última llamada para los árboles.', tarea: 'Comprar compost, abono granulado, tutores y sustrato. Preparar los bancales para el huerto de verano.', temp: 'frio' },
  { n: 3, corto: 'Mar', nombre: 'Marzo', lema: 'Arranca el año de verdad.', tarea: 'Renovar la capa superficial de sustrato de los frutales y empezar la fertilización de primavera. Se acabó el descanso invernal.', temp: 'suave' },
  { n: 4, corto: 'Abr', nombre: 'Abril', lema: 'El mes más ocupado del año.', tarea: 'Poner los tutores el mismo día de plantar y subir el riego a cada 2-3 días. Acolchar cuando el suelo ya esté caliente.', temp: 'suave' },
  { n: 5, corto: 'May', nombre: 'Mayo', lema: 'Entran melón y sandía.', tarea: 'Ajustar el programador, revisar pulgón, guiar el pepino y atar el tomate. Empieza el calor de verdad.', temp: 'suave' },
  { n: 6, corto: 'Jun', nombre: 'Junio', lema: 'Llegan las brevas.', tarea: 'Riego diario, acolchado completo y revisión semanal del goteo. Cosechar los calabacines jóvenes con frecuencia.', temp: 'calor' },
  { n: 7, corto: 'Jul', nombre: 'Julio', lema: 'Mes crítico de agua.', tarea: 'Riega temprano. Si una maceta se seca cada tarde, aumenta agua o divide el riego en dos. Comprueba las pilas del programador.', temp: 'calor' },
  { n: 8, corto: 'Ago', nombre: 'Agosto', lema: 'Mes de preparar, no de plantar.', tarea: 'Comprar material y montar el riego por goteo. Es normal que el calor extremo reduzca el cuajado: no lo compenses con más abono.', temp: 'calor' },
  { n: 9, corto: 'Sep', nombre: 'Septiembre', lema: 'Empieza el huerto de otoño.', tarea: 'Bajar el riego a cada 3-4 días y hacer balance del año: kilos, variedades que funcionaron, qué sobró y qué faltó.', temp: 'suave' },
  { n: 10, corto: 'Oct', nombre: 'Octubre', lema: 'Fresas y ajos a la tierra.', tarea: 'Último abonado del año y compost superficial en los bancales. A partir de aquí las plantas descansan.', temp: 'suave' },
  { n: 11, corto: 'Nov', nombre: 'Noviembre', lema: 'Los árboles, más baratos que nunca.', tarea: 'Comprar árboles a raíz desnuda: mejor momento y mejor precio del año. Con 2-3 frutales ya empiezas bien.', temp: 'frio' },
  { n: 12, corto: 'Dic', nombre: 'Diciembre', lema: 'Frío suave, todo tranquilo.', tarea: 'Comprobar que los drenajes no estén bloqueados, proteger los cítricos si anuncian helada excepcional y no regar casi nada.', temp: 'frio' }
];

/* ---------------------------------------------------------
   3. LAS 8 REGLAS
   --------------------------------------------------------- */
const REGLAS = [
  { n: '01', t: 'Nada en el suelo del terreno', d: 'Todo va en maceta o en bancal, sin excepción.', p: 'la tierra es mala y la casa es de alquiler; así el huerto se muda contigo.' },
  { n: '02', t: 'Ninguna maceta tocando el suelo', d: 'Siempre apoyada sobre dos ladrillos o tacos, con 1-3 cm de aire.', p: 'si toca la tierra, las raíces salen por el agujero y se anclan al terreno.' },
  { n: '03', t: 'Riego por goteo con programador', d: 'Instalado antes de que llegue el verano, y en dos zonas independientes.', p: 'una maceta a 40 °C se seca en horas y tú no siempre estarás en casa.' },
  { n: '04', t: 'Árboles de 2-3 años', d: 'Con el tronco gordo como un dedo.', p: 'un plantón fino tarda años; uno hecho te da fruta el primer verano.' },
  { n: '05', t: 'Compra por variedad, no por especie', d: 'No compres "un ciruelo": compra un Santa Rosa autofértil.', p: 'sin la palabra autofértil en la etiqueta tendrás flores y cero fruta.' },
  { n: '06', t: 'Macetas rígidas, claras y escaladas', d: 'De 35-50 L al principio y sube a 60-90 L cuando el árbol lo pida.', p: 'una maceta negra al sol de agosto cuece las raíces, y una gigante desde el día uno se riega mal.' },
  { n: '07', t: 'Nunca deshagas el cepellón', d: 'El bloque de tierra con raíces se pasa entero; solo corrige las raíces que dan vueltas.', p: 'al desmenuzarlo rompes las raíces finas, que son las que beben.' },
  { n: '08', t: 'En maceta, abonar es obligatorio', d: 'Compost o humus + un solo abono orgánico granulado, según etiqueta.', p: 'la maceta es un plato cerrado y el riego lava los nutrientes constantemente.' }
];

/* ---------------------------------------------------------
   4. RIEGO POR ESTACIÓN
   --------------------------------------------------------- */
const RIEGO = [
  { est: 'Invierno', frec: 'Cada 7-10 días', nota: 'La planta descansa y el sustrato tarda en secarse.', clase: 'c-invierno' },
  { est: 'Primavera', frec: 'Cada 2-3 días', nota: 'Empieza a crecer y a pedir agua de verdad. Comprueba humedad antes de regar.', clase: 'c-primavera' },
  { est: 'Verano', frec: 'Todos los días', nota: 'En julio y agosto, si una maceta se seca cada tarde, divide el riego en mañana y tarde.', clase: 'c-verano', destacado: true },
  { est: 'Otoño', frec: 'Cada 3-4 días', nota: 'Baja el ritmo poco a poco según refresca.', clase: 'c-otono' }
];

/* Caudal orientativo de goteros según tamaño de maceta */
const GOTEROS = [
  { maceta: '35-50 L', config: '1-2 goteros de 2-4 L/h', total: '2-8 L/h' },
  { maceta: '60-90 L', config: '2 goteros de 4 L/h en lados opuestos', total: '8 L/h' },
  { maceta: '100-120 L', config: '3-4 puntos de agua alrededor de la zona radicular', total: '12-16 L/h' },
  { maceta: 'Bancal de 2 × 1 m', config: '3 líneas de goteo integrado separadas 30-35 cm', total: '6 m de tubería por bancal' }
];

/* ---------------------------------------------------------
   5. ERRORES QUE MATAN EL HUERTO
   --------------------------------------------------------- */
const ERRORES = [
  { n: '01', t: 'Maceta apoyada en el suelo', d: 'Las raíces salen por el agujero, se anclan al terreno y ya no puedes mover el árbol nunca más.', s: 'dos ladrillos debajo, desde el primer día.' },
  { n: '02', t: 'Comprar demasiadas plantas el primer mes', d: 'Doce macetas a la vez son doce riegos, doce abonados y doce sitios donde fallar. Casi nadie aguanta ese ritmo el primer año.', s: '2-4 frutales bien elegidos y dos bancales. Nada más.' },
  { n: '03', t: 'Usar la tierra mala del terreno', d: 'La tierra mineral del jardín metida en un recipiente se compacta, pierde aireación y ahoga las raíces.', s: 'sustrato comprado siempre, aunque duela pagarlo.' },
  { n: '04', t: 'Poner grava en el fondo de la maceta', d: 'Es un consejo antiguo pero incorrecto: la capa de grava eleva la zona saturada y encima te quita litros útiles de raíz.', s: 'agujeros grandes y libres, sustrato correcto y maceta elevada.' },
  { n: '05', t: 'Un único programa de riego para todo', d: 'El tomate quiere agua a diario y el romero cada quince días. Con un solo programa, uno de los dos muere.', s: 'dos zonas independientes: bancales y frutales.' },
  { n: '06', t: 'Deshacer el cepellón al trasplantar', d: 'Rompes las raíces finas, las que de verdad beben, y la planta tarda semanas en recuperarse.', s: 'sácalo entero y plántalo entero; solo afloja las raíces que dan vueltas.' },
  { n: '07', t: 'Enterrar el tronco más de lo que estaba', d: 'El cuello del árbol enterrado se pudre. Es un fallo silencioso que se paga meses después.', s: 'el cuello queda a la misma altura que en el tiesto de vivero.' },
  { n: '08', t: 'Empezar directamente con 120 L', d: 'Un árbol pequeño en un recipiente enorme se riega mal, pesa una barbaridad y te ha costado sustrato que aún no necesitabas.', s: 'escala: 35-50 L, luego 60-80 L, y 80-120 L solo si hace falta.' },
  { n: '09', t: 'Macetero negro enorme a pleno sol', d: 'Un recipiente oscuro expuesto al sol de agosto cuece las raíces como una olla.', s: 'blanco, beige, gris claro o terracota clara.' },
  { n: '10', t: 'No abonar', d: 'El riego lava los nutrientes constantemente: a los tres meses el sustrato está vacío. Planta preciosa, fruta cero.', s: 'compost/humus + un abono orgánico granulado, siguiendo la etiqueta.' },
  { n: '11', t: 'Abonar más porque no crece en agosto', d: 'Durante una ola de calor el problema es la temperatura o el agua, casi nunca la nutrición. También se puede sobrefertilizar con productos "naturales".', s: 'estabiliza el riego antes de tocar el abono.' },
  { n: '12', t: 'Fallar el riego en agosto', d: 'Dos días sin agua a 40 °C y el árbol se seca. No hay riego de emergencia que lo salve.', s: 'programador de goteo instalado y probado antes de junio.' },
  { n: '13', t: 'Comprar sin mirar "autofértil"', d: 'Árbol lleno de flores preciosas y ni una pieza de fruta, porque nadie lo poliniza. Ni todos los ciruelos ni todos los manzanos son iguales.', s: 'pregunta variedad, patrón, autofertilidad y necesidades de frío.' },
  { n: '14', t: 'Plantar cítricos en otoño', d: 'Recién plantado no tiene raíces para aguantar la primera helada.', s: 'cítricos solo en marzo o abril.' },
  { n: '15', t: 'Romero en el mismo riego que el tomate', d: 'La aromática mediterránea se pudre con riego diario; el tomate se marchita sin él. No caben en la misma línea.', s: 'separa el grupo seco del grupo húmedo, siempre.' },
  { n: '16', t: 'No acolchar en verano', d: 'Sin 5-8 cm de acolchado, la evaporación se dispara, salen hierbas y el suelo cambia de temperatura de golpe.', s: 'paja, hojas secas o compost grueso, sin amontonar contra el tallo.' },
  { n: '17', t: 'No poner tutor hasta que ya está tumbado', d: 'Clavar una caña junto a un tomate de un metro rompe raíces y ya no lo endereza.', s: 'tutor el mismo día de plantar.' },
  { n: '18', t: 'Tratar plagas que no existen', d: 'Los tratamientos preventivos semanales "por si acaso" gastan dinero y castigan a la fauna auxiliar.', s: 'prevención → observación → intervención mínima.' },
  { n: '19', t: 'Jabón de cocina, lejía o vinagre como remedio', d: 'No están autorizados como fitosanitarios, pueden quemar la planta y "natural" no significa inocuo ni legalmente utilizable.', s: 'producto autorizado para ese cultivo y esa plaga, siguiendo su etiqueta.' },
  { n: '20', t: 'Montar hidroponía antes de saber regar', d: 'Añadir pH y EC al primer año, cuando aún estás aprendiendo a llenar un bancal, es la vía rápida al abandono.', s: 'prueba 2 plantas contra 2 en 2027, y decide después.' }
];

/* ---------------------------------------------------------
   6. CLIMA DE TORTOSA
   --------------------------------------------------------- */
const CLIMA = [
  { n: '32 °C', t: 'máxima media de julio y agosto', d: 'Estación AEMET Tortosa-Roquetes. Tu enemigo es el calor, no la helada.' },
  { n: '508 mm', t: 'precipitación anual normal', d: 'Repartida de forma muy irregular: no puedes contar con la lluvia.' },
  { n: '6-8 h', t: 'de sol directo para el huerto', d: 'Mejor sol de mañana y mediodía que solo el abrasador de la tarde.' },
  { n: 'Raras', t: 'heladas fuertes', d: 'Por eso el plan gira alrededor del agua y la protección de las raíces.' }
];

/* ---------------------------------------------------------
   7. ZONAS DEL TERRENO
   --------------------------------------------------------- */
const ZONAS = [
  { l: 'A', t: 'Huerto principal', d: 'Dos bancales de 2 × 1 m. Solo 4 m² cultivados, y con eso te sobra para empezar: baratos de llenar, fáciles de regar y de proteger, y llegas al centro desde los dos lados.', extra: 'Pasillos de 70-90 cm entre bancales. Debe caber una carretilla.' },
  { l: 'B', t: 'Frutales en maceta', d: 'Una franja soleada dejando 80-150 cm entre macetas según tamaño. No necesitas alineación perfecta: necesitas poder caminar alrededor, revisar plagas, conectar goteros y mover el árbol cuando te mudes.', extra: 'Todas sobre ladrillos, nunca tocando el terreno.' },
  { l: 'C', t: 'Aromáticas', d: 'Nunca todas en la misma jardinera. Separa el grupo seco (romero, tomillo, orégano, salvia, lavanda) del grupo húmedo (perejil, albahaca, cilantro).', extra: 'La menta va sola. Siempre.' },
  { l: 'D', t: 'Fresas', d: 'Tubos verticales, jardineras o recipientes anchos. No necesitan 40 cm de profundidad ni una instalación hidropónica el primer año.', extra: 'Protección del sol de tarde en pleno julio y agosto.' },
  { l: 'E', t: 'Reserva experimental', d: 'Un hueco pequeño cerca del agua y de un enchufe, reservado para el experimento de coco de primavera de 2027.', extra: 'No compres todavía la instalación.' }
];

/* ---------------------------------------------------------
   8. INFRAESTRUCTURA (acordeón)
   --------------------------------------------------------- */
const INFRAESTRUCTURA = [
  {
    t: 'Bancales: cuál, de qué tamaño y qué poner debajo',
    html: `<p><strong>Primera opción: acero galvanizado modular.</strong> Se monta con tornillos, no pesa demasiado, no se pudre, dura años, se desmonta si te mudas y no pide mantenimiento anual. Segunda opción: madera, si la consigues barata y de procedencia conocida. Evita palets manchados o con tratamientos desconocidos en contacto con sustrato comestible.</p>
      <p><strong>Medidas:</strong> 200 cm de largo × 100 cm de ancho × 25-35 cm de alto. No necesitas 70-80 cm de altura si lo único que quieres es evitar el suelo malo: cuanta más altura, más sustrato pagas y más rápido se seca.</p>
      <p><strong>Qué va debajo</strong>, si el terreno es pobre pero no está contaminado:</p>
      <ul>
        <li>corta las hierbas muy bajas;</li>
        <li>pon cartón marrón sin plastificar, solapando las piezas 15-20 cm;</li>
        <li>mójalo;</li>
        <li>coloca el bancal encima y llénalo de sustrato.</li>
      </ul>
      <p>Nada de lámina de plástico impermeable: necesitas drenaje. El cartón asfixia la mayoría de las hierbas y se descompone solo. La malla antihierbas déjala para los pasillos, si acaso.</p>
      <p><em>Este plan asume un suelo malo agronómicamente, no contaminado. Si el terreno tuviera historial industrial o de vertidos, habría que analizarlo antes.</em></p>`
  },
  {
    t: 'Sustratos: qué comprar para cada cosa',
    html: `<p><strong>Para los bancales:</strong> sustrato de huerto elevado o tierra vegetal mejorada, a granel si encuentras proveedor local. Dos bancales de 2 × 1 × 0,30 m son 0,60 m³ cada uno, <strong>1,2 m³ en total</strong>. Comprar 1.200 litros en saquitos es absurdo económicamente.</p>
      <p>Si no encuentras buen preparado a granel: aproximadamente 70 % tierra vegetal cribada de calidad + 30 % compost maduro. No hace falta precisión de laboratorio. Solo añade perlita o pómice <em>si</em> la mezcla se encharca; no automáticamente.</p>
      <p><strong>Para macetas de frutales:</strong> aquí sí, sustrato comercial de calidad para macetas y frutales, con fibra de coco, corteza compostada, perlita o pómice. Nunca la tierra del terreno.</p>
      <p><strong>Para fresas:</strong> sustrato universal de calidad, aireado y con materia orgánica.</p>
      <p><strong>Para arándanos:</strong> sustrato específico de acidófilas, sin excepción.</p>
      <p><strong>Para semilleros:</strong> sustrato de semilleros. No merece la pena inventar una receta para una bandeja.</p>`
  },
  {
    t: 'Macetas: material, color y cómo escalar el tamaño',
    html: `<p><strong>Material:</strong> plástico rígido de calidad, color claro, con muchos agujeros de drenaje. Pierde menos agua que la maceta de tela, pesa poco vacía, es barata, protege mejor el cepellón del viento seco y tolera mejor los descuidos de riego.</p>
      <p><strong>Color, por orden:</strong> blanco, beige, gris claro, terracota plástica clara. Evita recipientes negros grandes a pleno sol de agosto.</p>
      <p>Las macetas de tela no están prohibidas: son útiles para fresas, patatas, arbustos medianos y experimentos. Pero no para el limonero o el granado que quieres tener años.</p>
      <p><strong>No empieces con 120 L.</strong> Si compras un árbol en maceta de vivero de 10-20 L:</p>
      <ul>
        <li><strong>Etapa 1:</strong> 35-50 L.</li>
        <li><strong>Etapa 2:</strong> 60-80 L, después de 1-2 temporadas.</li>
        <li><strong>Etapa 3:</strong> 80-120 L, solo cuando lo necesite.</li>
      </ul>
      <p>Reduces coste inicial, peso, riesgo de exceso de riego y sustrato desperdiciado.</p>`
  },
  {
    t: 'Cómo plantar un árbol en una maceta nueva',
    html: `<ol class="pasos-html">
        <li>Riega el árbol unas horas antes.</li>
        <li>Prepara la maceta y comprueba el drenaje.</li>
        <li>Pon sustrato en el fondo hasta que el cuello del árbol quede a la misma altura que estaba.</li>
        <li>Saca el cepellón.</li>
        <li>Inspecciona las raíces.</li>
        <li>Si están sanas y no dan vueltas, manipula lo mínimo.</li>
        <li>Si están enrolladas alrededor del cepellón, afloja o corta ligeramente las raíces circulares.</li>
        <li>Coloca el árbol recto.</li>
        <li>Rellena alrededor sin enterrar el tronco.</li>
        <li>Deja 3-5 cm libres hasta el borde para poder regar.</li>
        <li>Riega lentamente hasta que salga agua por los agujeros.</li>
        <li>Acolcha después, sin amontonar contra el tronco.</li>
      </ol>`
  },
  {
    t: 'Tutores, mallas y viento del Ebro',
    html: `<p><strong>Tomate:</strong> el tutor se pone el día de plantar, no cuando ya mide un metro. Tutor espiral, caña robusta, cuerda desde una estructura superior o malla vertical. Para tomates indeterminados, mejor estructura firme o cuerda que una caña fina.</p>
      <p><strong>Pepino y judía trepadora:</strong> malla vertical en el lado norte del bancal. Ahorras suelo, la fruta sale limpia, ventila mejor y se recolecta sin agacharse.</p>
      <p><strong>Viento:</strong> la zona del Ebro tiene episodios fuertes. No montes estructuras altas y ligeras sin anclaje, y recuerda que un árbol en maceta también vuelca. Recipientes anchos, árboles contenidos por poda, tutores flexibles mientras se establecen y nunca una copa enorme sobre un recipiente estrecho.</p>`
  }
];

/* ---------------------------------------------------------
   9. TABLA DE MACETAS
   --------------------------------------------------------- */
const MACETAS = [
  ['Kumquat', '40-60 L'], ['Limonero', '60-90 L'], ['Mandarino', '60-90 L'],
  ['Granado', '60-90 L'], ['Higuera', '60-100 L'], ['Níspero', '80-100 L'],
  ['Ciruelo de porte contenido', '70-100 L'], ['Caqui', '90-120 L'],
  ['Olivo', '60-100 L'], ['Parra', '50-80 L'], ['Mora sin espinas', '30-50 L'],
  ['Menta', '10-20 L y siempre sola']
];





/* ---------------------------------------------------------
   11. CUIDADOS (acordeón)
   --------------------------------------------------------- */
const CUIDADOS = [
  {
    t: 'Abonado: solo dos productos, nada más',
    html: `<p><strong>Producto 1 — compost o humus de lombriz.</strong> Aporta materia orgánica, mejora la estructura, libera nutrientes poco a poco y ayuda a retener agua.</p>
      <p><strong>Producto 2 — un abono orgánico granulado completo</strong> que indique en la etiqueta que está autorizado para agricultura ecológica y es válido para huerto y/o frutales. Sigue la dosis del fabricante: también se puede sobrefertilizar con productos orgánicos.</p>
      <p><strong>En bancales:</strong> capa fina de compost maduro en primavera y otoño, incorporada superficialmente, más el granulado si el cultivo es exigente. Si el tomate crece bien y tiene buen color, no le eches fertilizante cada semana por rutina.</p>
      <p><strong>En frutales en maceta:</strong> compost superficial en primavera + granulado para frutales según etiqueta, reponiendo según la duración del producto. Evita abonados fuertes al final del otoño. El recipiente pierde nutrientes con cada riego, así que pide más alimentación regular que un árbol en suelo.</p>
      <p><strong>Cítricos:</strong> si aparece hoja amarilla con los nervios todavía verdes, puede ser <span class="termino" data-termino="clorosis">clorosis</span> férrica. Observa primero; si hace falta, usa un corrector de hierro expresamente indicado como utilizable en agricultura ecológica.</p>
      <p><strong>Lo que no funciona como base:</strong> posos de café, cáscaras de huevo enterradas, agua de plátano, agua con azúcar, leche, restos de cocina junto a las raíces o "tés" fermentados sin control. Puedes compostar residuos correctamente, pero los remedios caseros no sustituyen un abonado equilibrado.</p>`
  },
  {
    t: 'Plagas y enfermedades: prevención, observación, intervención mínima',
    html: `<p>Cinco minutos de inspección semanal evitan muchos tratamientos. Mira el envés de las hojas, los brotes nuevos, tallos, flores, frutos, hormigas subiendo, manchas, hojas enrolladas y telarañas finas.</p>
      <ul>
        <li><strong>Pulgón:</strong> elimina brotes muy infestados, chorro de agua moderado, favorece insectos auxiliares. Si necesitas producto, uno autorizado para ese cultivo y plaga (por ejemplo, formulaciones de jabón potásico cuando proceda según su registro).</li>
        <li><strong>Mosca blanca:</strong> revisa el envés, elimina focos, trampas amarillas sobre todo como monitorización.</li>
        <li><strong>Orugas:</strong> existen productos microbiológicos con <em>Bacillus thuringiensis</em> autorizados para determinados usos. La etiqueta manda: cultivo, plaga, dosis y plazo.</li>
        <li><strong>Araña roja:</strong> frecuente con calor y sequedad. Punteado claro, bronceado y telaraña muy fina. Evita plantas crónicamente estresadas por falta de agua.</li>
        <li><strong>Cochinilla en cítricos:</strong> inspección de ramas y hojas, retirada manual en focos pequeños.</li>
        <li><strong>Oídio:</strong> típico en cucurbitáceas. Ventila, no amontones plantas, no mojes el follaje de noche y retira las hojas muy afectadas.</li>
        <li><strong>Caracoles y babosas:</strong> trampas físicas, retirada manual al anochecer y bordes del bancal despejados.</li>
      </ul>
      <p><strong>Regla legal:</strong> en España los fitosanitarios deben estar autorizados e inscritos en el Registro Oficial y usarse según su registro. Aunque un producto se venda como "natural" o "ecológico", comprueba etiqueta y uso autorizado.</p>`
  },
  {
    t: 'Poda y mantenimiento de los frutales en maceta',
    html: `<p>Podar un árbol en maceta persigue dos cosas: mantenerlo sano y mantener un tamaño compatible con el recipiente y con la futura mudanza.</p>
      <p><strong>Primer año:</strong> nada de podas fuertes recién comprado, salvo ramas dañadas o una formación clara.</p>
      <p><strong>Después, cada invierno en los caducos:</strong> madera seca, ramas cruzadas, chupones, ramas hacia el interior y control de altura. En cítricos, poda ligera y selectiva: no necesitan poda fuerte anual.</p>
      <p><strong>Renovación de sustrato:</strong> cada primavera retira unos centímetros de la capa superficial, sin dañar raíces importantes, y repón con compost o sustrato fresco.</p>
      <p><strong>Trasplante o poda de raíces:</strong> no por calendario. Hazlo cuando veas raíces ocupando todo el recipiente, agua que atraviesa de forma anormal, secado demasiado rápido, raíces saliendo masivamente por los drenajes o pérdida de vigor sin otra explicación. Entonces sube de maceta, o mantén la misma recortando moderadamente raíces y renovando sustrato.</p>`
  },
  {
    t: 'Semillas, plantel y las 5 preguntas del vivero',
    html: `<p><strong>Compra plantel</strong> de tomate, pimiento, berenjena, calabacín, pepino, melón, sandía, lechuga, coles y fresas. Te saltas 4-8 semanas de cuidados, cuesta poco para un huerto doméstico y eliges plantas sanas.</p>
      <p><strong>Siembra directa</strong> de zanahoria, rábano, judía, guisante, haba, ajo, maíz y las aromáticas con las que quieras experimentar.</p>
      <p><strong>Árboles:</strong> a raíz desnuda durante el reposo invernal es la opción más barata; en contenedor es más fácil y está disponible más meses. Para cítricos, prefiere contenedor y trasplante en clima suave.</p>
      <p><strong>Las cinco preguntas que debes hacer para cada frutal:</strong></p>
      <ol class="pasos-html">
        <li>¿Qué variedad exacta es?</li>
        <li>¿Es autofértil o necesita otra variedad compatible?</li>
        <li>Si es caduca, ¿es adecuada para zonas de bajo requerimiento de frío?</li>
        <li>¿Sobre qué patrón está injertada y qué vigor tendrá?</li>
        <li>¿Es adecuada para mantenerla mediante poda en una maceta grande?</li>
      </ol>
      <p>Nunca compres un ciruelo simplemente porque la etiqueta diga "ciruelo".</p>`
  },
  {
    t: 'Vacaciones y fallos del riego',
    html: `<p><strong>Una semana antes de irte</strong> — no cambies todo el sistema, solo: limpia el filtro, purga las líneas, prueba todos los goteros, cambia pilas si dudas, comprueba el grifo, revisa que ningún tubo esté pinzado y repón el acolchado.</p>
      <p><strong>Dos días antes:</strong> prueba completa. No la dejes para el día que te marchas.</p>
      <p><strong>El día antes:</strong> mira la previsión y adapta el programa si viene una ola de calor.</p>
      <p><strong>Si te vas varias semanas</strong>, lo más fiable sigue siendo que alguien pase de vez en cuando y confirme que el grifo sigue abierto, que hay presión, que no hay tubería rota y que las plantas no están colapsadas. No necesita regar a mano.</p>
      <p><strong>¿Un programador de dos salidas o dos programadores?</strong> Si el de dos salidas falla, fallan las dos zonas. Dos programadores baratos independientes dan cierta redundancia, aunque añaden piezas. Elige según presupuesto.</p>`
  },
  {
    t: 'Cómo trasladar todo si cambias de casa',
    html: `<p><strong>Bancales:</strong> son desmontables. No tienes que llevarte todo el sustrato: vacíalo en sacos, regala parte, déjalo si el propietario acepta o llévate solo la mejor fracción.</p>
      <p><strong>Frutales:</strong> riega ligeramente el día anterior sin empapar, ata suavemente las ramas, usa carretilla de carga, transporta en vertical y evita la mudanza en pleno mediodía de agosto.</p>
      <p><strong>Peso:</strong> un recipiente grande y húmedo puede superar ampliamente los 70-100 kg. Por eso el plan crece progresivamente de 40-50 L a 60-80 L y no llena doce macetas de 120 L el primer día.</p>
      <p><strong>Raíces:</strong> mantén las macetas elevadas con tacos o ladrillos y comprueba una o dos veces al año que ninguna raíz gruesa haya llegado al terreno.</p>`
  }
];

/* ---------------------------------------------------------
   12. RUTINAS
   --------------------------------------------------------- */
const RUTINAS = [
  { t: 'Cada día en verano', tiempo: '2 minutos', items: ['Mira si hay plantas marchitas.', 'Mira si el goteo ha funcionado.', 'Recoge los frutos maduros.'] },
  { t: 'Una vez por semana', tiempo: '15-30 minutos', items: ['Revisar el envés de las hojas.', 'Comprobar goteros.', 'Atar tomates y guiar pepinos.', 'Quitar frutos pasados y hierbas pequeñas.', 'Comprobar humedad profunda.'] },
  { t: 'Cada mes en temporada de riego', tiempo: '20 minutos', items: ['Limpiar el filtro.', 'Purgar los extremos de la tubería.', 'Revisar las pilas del programador.', 'Observar los drenajes de las macetas.', 'Comprobar que el acolchado sigue cubriendo.'] },
  { t: 'Dos veces al año', tiempo: 'primavera y otoño', items: ['Compost y abonado de primavera.', 'Compost y preparación de la temporada de otoño.'] },
  { t: 'Una vez al año', tiempo: 'invierno', items: ['Revisar la poda de los caducos.', 'Registrar variedades.', 'Ver qué maceta necesita cambio.', 'Decidir si realmente necesitas ampliar el huerto.'] }
];

/* ---------------------------------------------------------
   13. CRONOGRAMA AGOSTO 2026 – DICIEMBRE 2027
   --------------------------------------------------------- */
const CRONOLOGIA = [
  { f: '16-31 agosto 2026', t: 'Diseñar, no correr', clave: true, d: 'No compres diez árboles en plena ola de calor. Localiza el grifo, observa el terreno varios días, marca las horas de sol, decide dónde van los 2 bancales y la fila de macetas, mide la distancia al grifo, compra bancales y material de goteo, monta la infraestructura vacía, prueba fugas y busca proveedor local de sustrato a granel.', extra: 'Ya puedes comprar: romero, tomillo, lavanda, recipientes y material de riego. Trasplanta al atardecer.' },
  { f: 'Septiembre 2026', t: 'Primeras plantaciones', d: 'Llena y riega el sustrato de los bancales para que asiente. Siembra rábanos, zanahorias si ha bajado el calor, perejil y cilantro cuando refresque. Finales de septiembre es buen momento para establecer las fresas: empieza con 10-15 plantas y observa.' },
  { f: 'Octubre 2026', t: 'Ajos y cebollas', d: 'Planta ajos, cebollas y cebolletas, guisantes si los quieres y cultivos de hoja opcionales. Revisa el funcionamiento del riego con temperaturas suaves y empieza a buscar viveros de frutales para el invierno.' },
  { f: 'Noviembre 2026', t: 'Se abre la ventana de los frutales', clave: true, d: 'Empieza la ventana de los caducos. Prioridad si encuentras buenos ejemplares: higuera, granado, parra y ciruelo de bajo frío (solo si la variedad está bien identificada). No hace falta comprar los cuatro: con 2-3 frutales este invierno ya empiezas bien.' },
  { f: 'Diciembre 2026', t: 'Mantenimiento', d: 'Poca fertilización, comprobar que los drenajes no estén bloqueados, proteger macetas pequeñas si se anuncia una helada excepcional y comprar frutales a raíz desnuda si esa es la opción elegida.' },
  { f: 'Enero 2027', t: 'Terminar plantación de caducos', d: 'Últimos caducos, revisar tutores, poda de formación ligera solo si sabes qué quieres formar, y continuar ajo, cebolla y guisantes según el estado del huerto.' },
  { f: 'Febrero 2027', t: 'Preparar la temporada fuerte', d: 'Compra compost, abono orgánico granulado, material de tutores, las semillas directas que vayas a usar y patata de siembra si la quieres. No compres plantel de tomate demasiado pronto: se quedaría semanas en una macetita pasando frío.' },
  { f: 'Marzo 2027', t: 'Arranca el año', clave: true, d: 'Según la temperatura real: primeros tomates al final del mes si las noches ya son suaves (o espera a abril), primeros calabacines protegidos, renovación de la capa superficial de los frutales, inicio de la fertilización de primavera y compra de limonero, mandarino o kumquat. No necesitas los tres cítricos el mismo año.' },
  { f: 'Abril 2027', t: 'El mes más ocupado', clave: true, d: 'Tomate, pimiento, berenjena, pepino, calabacín, judía y albahaca. Pon los tutores el día de plantar. Acolcha cuando el suelo ya esté caliente.' },
  { f: 'Mayo 2027', t: 'Melón y sandía', d: 'Melón y sandía si los quieres, control del riego, revisión de pulgón, guiar el pepino y atar el tomate. Quita fruta muy pequeña solo si una planta trasplantada está claramente débil; en plantas sanas no hace falta obsesionarse.' },
  { f: 'Junio 2027', t: 'Primeras cosechas', d: 'Revisa el goteo semanalmente, aumenta el agua según el calor, completa el acolchado, cosecha los calabacines jóvenes con frecuencia y revisa tomate y pepino cada pocos días.' },
  { f: 'Julio 2027', t: 'Mes crítico de agua', clave: true, d: 'Riega temprano. Si una maceta se seca cada tarde, no esperes a que el árbol se marchite repetidamente: aumenta agua o divide el riego. Comprueba la batería del programador. Usa malla de sombreo solo donde haga falta, no tapes todo el huerto.' },
  { f: 'Agosto 2027', t: 'Cosecha y calor extremo', d: 'Continúa la cosecha. Es normal que algunas plantas reduzcan el cuajado con calor extremo: no compenses cada problema echando más abono. Muchas veces el problema es temperatura o agua, no nutrición.' },
  { f: 'Septiembre 2027', t: 'Balance del primer año', clave: true, d: 'Apunta kilos aproximados, plantas que mejor funcionaron, variedades, enfermedades, qué sobró y qué faltó. Empieza nuevas fresas si hace falta y prepara el otoño. Si el experimento de coco te ha gustado, este es el momento de decidir si amplías.' },
  { f: 'Octubre 2027', t: 'Segundo otoño', d: 'Ajo, cebolla, rábanos, zanahoria, guisante, perejil y cilantro, más compost superficial en los bancales.' },
  { f: 'Noviembre 2027', t: 'Segundo invierno de frutales', d: 'Puedes añadir un solo árbol nuevo de la siguiente prioridad: níspero, caqui, ciruelo, u otro cítrico la primavera siguiente.' },
  { f: 'Diciembre 2027', t: 'Inventario anual', d: 'En este punto ya sabrás mucho más de tu microclima que cualquier guía general.' }
];

/* ---------------------------------------------------------
   14. PRESUPUESTO POR FASES
   --------------------------------------------------------- */
const PRESUPUESTO = [
  { f: 'Fase 1', t: 'Infraestructura', gasta: ['programador fiable', 'filtro', 'tubo y accesorios razonables', 'buen sustrato', 'bancales resistentes'], ahorra: ['decoración', 'maceteros bonitos', 'sensores', 'estructuras especiales', 'herramientas duplicadas'] },
  { f: 'Fase 2', t: 'Plantas de otoño', gasta: ['ajo', 'semillas directas', 'aromáticas', 'fresas'], nota: 'Es la fase más barata de todo el plan.' },
  { f: 'Fase 3', t: 'Frutales', gasta: ['2-4 árboles, no diez'], nota: 'Un árbol barato de mala variedad sale más caro a largo plazo que uno correcto un poco más caro.' },
  { f: 'Fase 4', t: 'Primavera 2027', gasta: ['plantel de 10-15 hortalizas'], nota: 'Cuesta poco comparado con la infraestructura. No merece la pena ahorrar unos euros haciendo 60 semilleros si no disfrutas esa parte.' },
  { f: 'Fase 5', t: 'Hidroponía experimental', gasta: ['dos cubos de coco y lo justo'], nota: 'Solo después de tener el huerto funcionando. No compres una torre comercial cara para aprender algo que aprendes con dos cubos.' }
];

/* ---------------------------------------------------------
   15. DIAGNÓSTICO RÁPIDO
   --------------------------------------------------------- */
const DIAGNOSTICO = [
  { s: 'Marchita a mediodía, recuperada por la noche', c: 'Probablemente estrés térmico temporal, no necesariamente falta de agua.', q: 'Comprueba la humedad antes de inundar la maceta.' },
  { s: 'Marchita por la mañana y el sustrato está seco', c: 'Le falta agua o le falta frecuencia.', q: 'Sube el tiempo de riego o añade una segunda pasada.' },
  { s: 'Marchita con el sustrato empapado', c: 'Falta de oxígeno, pudrición radicular o mal drenaje.', q: 'No añadas más agua. Revisa agujeros de drenaje y deja secar.' },
  { s: 'Hojas inferiores amarillas', c: 'Puede ser envejecimiento natural, exceso de agua, falta de nitrógeno o problemas de raíz.', q: 'Mira el conjunto de la planta antes de abonar.' },
  { s: 'Hojas jóvenes amarillas con los nervios verdes (cítricos)', c: 'Posible clorosis férrica, típica con agua o sustrato alcalinos.', q: 'Corrector de hierro autorizado en ecológico, siguiendo etiqueta.' },
  { s: 'Bordes de hoja secos en maceta', c: 'Falta de agua, exceso de sales, viento y calor, o raíces muy apretadas.', q: 'Revisa el riego y si el cepellón ha ocupado todo el recipiente.' },
  { s: 'Tomates con el culo negro', c: 'Podredumbre apical: problema de disponibilidad y movimiento del calcio, casi siempre asociado a riego irregular.', q: 'Estabiliza el riego. No es "echar calcio a la tierra".' },
  { s: 'Mucha hoja y poca fruta', c: 'Exceso de nitrógeno, falta de sol, calor extremo o variedad y polinización.', q: 'Deja de añadir abono nitrogenado.' }
];

/* ---------------------------------------------------------
   16. LISTA DE COMPRA INICIAL
   --------------------------------------------------------- */
const COMPRA = [
  { g: 'Infraestructura', items: [
    '2 bancales desmontables de aprox. 200 × 100 × 25-35 cm',
    'Cartón marrón limpio para la base',
    'Aprox. 1,2 m³ de sustrato / tierra de huerto para el llenado inicial',
    'Distribuidor de 2 vías o programador de 2 zonas',
    '1-2 programadores a pilas según diseño',
    'Filtros de riego',
    'Reguladores de presión, si tu instalación los necesita',
    'Tubo principal de 16 mm',
    'Tubería de goteo con emisores integrados para los bancales',
    'Accesorios de 16 mm: T, codos, tapones, llaves',
    'Microtubo y goteros de caudal conocido para macetas',
    'Abrazaderas / punzón según sistema'
  ]},
  { g: 'Sustratos y fertilización', items: [
    '1 saco de sustrato universal de exterior de calidad para aromáticas y fresas',
    'Compost o humus de lombriz',
    '1 abono orgánico granulado completo apto para agricultura ecológica',
    'Paja limpia u otro acolchado'
  ]},
  { g: 'Plantas iniciales', items: [
    '10-15 fresas',
    '1 romero',
    '1 tomillo',
    '1 orégano',
    '1 perejil',
    '1 menta o hierbabuena, con maceta propia',
    'Semillas de rábano',
    'Semillas de zanahoria',
    'Ajos para plantar en otoño'
  ]},
  { g: 'Herramientas mínimas', items: [
    'Pala de mano',
    'Tijeras de poda decentes',
    'Guantes',
    'Regadera',
    'Carretilla, si no tienes',
    'Cuerda y ataduras suaves reutilizables'
  ]}
];

const NO_COMPRAR = [
  'invernadero', 'sensores Wi-Fi', 'estación meteorológica',
  'compostador grande si no tienes restos suficientes', 'medidor profesional de suelo',
  'diez tipos de abono', 'insecticidas "por si acaso"', 'torre hidropónica',
  'sistema NFT', 'doce frutales de golpe', 'semillas de 40 especies que no usarás'
];

/* ---------------------------------------------------------
   17. GLOSARIO
   --------------------------------------------------------- */
const GLOSARIO = {
  cepellon:   { t: 'Cepellón', d: 'El bloque de tierra con las raíces dentro que sale entero al desmoldar la planta del tiesto.' },
  autofertil: { t: 'Autofértil', d: 'Que se poliniza solo: no necesita otro árbol al lado para dar fruta.' },
  plantel:    { t: 'Plantel', d: 'Planta joven ya crecida que compras en el vivero, lista para trasplantar.' },
  corona:     { t: 'Corona', d: 'En la fresa, el nudito del que salen las hojas. Va justo a ras de tierra.' },
  clorosis:   { t: 'Clorosis', d: 'Hojas amarillas con los nervios verdes: falta de hierro, típica al regar con agua con cal.' },
  reflorescente: { t: 'Reflorescente', d: 'Variedad que da fruta varias veces al año en vez de una sola tanda.' },
  patron:     { t: 'Patrón', d: 'La planta sobre la que se injerta la variedad. Determina el vigor y el tamaño final del árbol.' },
  acolchado:  { t: 'Acolchado', d: 'Capa de 5-8 cm de paja, hojas secas o compost grueso sobre el sustrato. Reduce evaporación y hierbas.' },
  acidofila:  { t: 'Acidófila', d: 'Planta que necesita sustrato ácido, como el arándano. Con sustrato normal no prospera.' },
  ec:         { t: 'EC', d: 'Conductividad eléctrica: mide la concentración de sales del agua o de la solución nutritiva.' },
  bifera:     { t: 'Bífera', d: 'Higuera que da dos cosechas al año: brevas en junio e higos en agosto.' },
  raizdesnuda:{ t: 'Raíz desnuda', d: 'Árbol vendido sin maceta ni tierra, durante el reposo invernal. Más barato y perfectamente válido si se planta bien.' }
};

/* ---------------------------------------------------------
   18. SEMILLA VS. PLANTEL
   Complemento del plan: cómo se empieza cada cultivo.
   --------------------------------------------------------- */

/* Las cuatro vías posibles */
const VIAS = {
  vivero:   { t: 'Planta de vivero', clase: 'via--vivero' },
  plantel:  { t: 'Plantel',          clase: 'via--plantel' },
  semilla:  { t: 'Semilla directa',  clase: 'via--semilla' },
  material: { t: 'Diente o tubérculo', clase: 'via--material' }
};

/* Cómo empezar cada planta del catálogo */


/* Las tres formas de empezar una hortaliza */
const FORMAS = [
  { t: 'A · Semillero', d: 'Pones una semilla en una bandeja, alveolo o macetita. La planta pasa allí sus primeras semanas protegida y, cuando tiene tamaño suficiente, la trasplantas al bancal.', ej: 'Tomate: siembras en febrero-marzo, cuidas 6-8 semanas y trasplantas a finales de marzo-abril. Sembrar y plantar no son la misma fecha.' },
  { t: 'B · Comprar plantel', d: 'El vivero ha hecho por ti la fase anterior. Compras una planta joven ya formada, la llevas a casa y la trasplantas al bancal.', ej: 'Es la opción recomendada para tomate, pimiento, berenjena, pepino, calabacín, melón y sandía. Cuesta algo más que un sobre de semillas, pero te ahorra semanas de trabajo y fallos de germinación.' },
  { t: 'C · Siembra directa', d: 'Hay cultivos en los que no merece la pena hacer plantel: pones la semilla directamente en su lugar definitivo del bancal.', ej: 'Zanahoria, rábano, judía, guisante, haba y maíz. En la zanahoria el trasplante deformaría justo la parte que quieres comer.' }
];

/* Vocabulario: las palabras que no hay que confundir */
const VOCABULARIO = [
  { t: 'Sembrar', d: 'Poner una semilla. Siempre se especifica si es en semillero o siembra directa en el bancal.' },
  { t: 'Trasplantar', d: 'Coger una planta que ya existe y ponerla en su sitio definitivo. Puede ser plantel que has criado tú o plantel comprado.' },
  { t: 'Plantar diente, tubérculo o bulbo', d: 'Casos como el ajo, la patata o determinadas cebollas. No es «sembrar», aunque se le parezca.' }
];

/* Tabla maestra: cultivo → semilla / bancal / plantel / recomendación */


/* Qué comprar el primer año, sin complicaciones */
const PRIMER_ANO = [
  { t: 'Compra como plantel', via: 'plantel', items: ['3 tomates', '4 pimientos', '1 berenjena', '1 calabacín', '2 pepinos', 'melón y sandía solo si de verdad los vas a cultivar', '1-2 albahacas', 'fresas', 'aromáticas perennes'] },
  { t: 'Compra como semilla y siembra directa', via: 'semilla', items: ['zanahoria', 'rábano', 'judía', 'maíz, si lo cultivas', 'guisante', 'haba', 'cilantro'] },
  { t: 'Compra como material de plantación', via: 'material', items: ['ajo → dientes', 'cebolla → plantel o cebollitas', 'patata → patata de siembra'] },
  { t: 'Compra en vivero como planta o árbol', via: 'vivero', items: ['todos los frutales', 'mora', 'frambuesa', 'arándano, si finalmente lo incorporas'] }
];

/* Qué haces realmente cada mes: siembra directa y plantel a comprar */

/* ---------------------------------------------------------
   TRUCOS Y AVISOS ESCRITOS A MANO
   Consejo práctico que enriquece la ficha del catálogo. Las FECHAS
   no salen de aquí: salen siempre del dataset V3 (js/catalogo.js).
   --------------------------------------------------------- */
const TRUCOS = {
  higuera: {
    trucos: [
      'Cómprala de 2-3 años con el tronco gordo como un dedo y comes brevas el primer junio.',
      'Aguanta el calor de Tortosa mejor que tú: no la mimes de más.',
      'Corta los brotes que salen en la base del tronco, roban fuerza a los higos.',
    ]
  },
  granado: {
    trucos: [
      'Es el árbol que más perdona: si te olvidas un riego, sobrevive.',
      'Le encanta el sol directo, ponlo en el punto más soleado del patio.',
      'No riegues a lo loco cuando la fruta madura: las granadas se abren.',
    ]
  },
  limonero: {
    aviso: 'Hojas amarillas con los nervios verdes = le falta hierro (clorosis), muy típico si riegas con agua con cal. Se corrige con un corrector de hierro autorizado en agricultura ecológica.',
    trucos: [
      'Plántalo en la ventana buena (primavera o principio de otoño) y protégelo el primer invierno: una helada sobre un cítrico recién plantado hace mucho daño.',
      'Abono específico de cítricos de marzo a octubre, sin fallar.',
      'Hojas amarillentas con nervios verdes es hierro, no sed. No riegues más.',
    ]
  },
  mandarino: {
    trucos: [
      'Como todos los cítricos: evita plantarlo en pleno verano o con helada anunciada; primavera y principio de otoño son sus mejores momentos.',
      'Protégelo del viento fuerte: tira la flor y sin flor no hay mandarinas.',
      'Abono de cítricos cada 15 días en primavera y verano.',
    ]
  },
  kumquat: {
    trucos: [
      'Es enano natural: nunca te comerá el patio.',
      'La fruta se come entera con piel: la piel es lo dulce, la pulpa lo ácido.',
      'Perfecto si dudas del espacio disponible: empieza por él.',
    ]
  },
  ciruelo_japones: {
    aviso: 'Aquí la variedad exacta es crítica. Antes de pagar confirma: necesidades de frío, autofertilidad, compatibilidad de polinización y vigor del patrón.',
    trucos: [
      'Comprueba en la etiqueta que sea autofértil o tendrás flores y cero ciruelas.',
      'Pierde la hoja en invierno y parece muerto. Es normal.',
      'Poda ligera en invierno, cuando está sin hojas.',
    ]
  },
  caqui: {
    trucos: [
      'No le escatimes litros: es el que más volumen de raíz necesita.',
      'Tarda unos dos años en dar cosecha de verdad.',
      'En otoño se queda sin hojas y lleno de bolas naranjas: precioso.',
    ]
  },
  fresa: {
    trucos: [
      'La corona (el nudito del que salen las hojas) va a ras de tierra: ni enterrada ni al aire.',
      'Enterrada se pudre, al aire se seca. Es su único punto delicado.',
      'En pleno verano de Tortosa agradece protección del sol de tarde.',
    ]
  },
  frambuesa: {
    trucos: [
      'Agradece sombra a mediodía en verano: no es planta de 40 °C al sol.',
      'Corta a ras las cañas que ya han dado fruta.',
      'No dejes que la tierra se seque del todo.',
    ]
  },
  mora: {
    trucos: [
      'Compra la variedad sin espinas o acabarás odiando cosecharla.',
      'Ata las ramas: crecen largas y se tumban solas.',
      'Poda las cañas viejas cada invierno.',
    ]
  },
  arandano: {
    aviso: 'Solo con sustrato para plantas acidófilas. Con agua alcalina o calcárea da bastante más trabajo que el resto: no es la compra de un principiante en Tortosa.',
    trucos: [
      'Busca el saco que ponga "acidófilas" o "para arándanos y hortensias". Es su comida.',
      'Si tu agua tiene mucha cal, riégalo con agua de lluvia siempre que puedas.',
      'Elige variedades de clima cálido: Biloxi u O’Neal. Otras no aguantan aquí.',
    ]
  },
  parra: {
    trucos: [
      'Decide dónde va la pérgola antes de plantarla.',
      'Te da uvas y sombra justo donde hace falta en verano.',
      'Poda fuerte cada invierno: sin podar da mucha hoja y poca uva.',
    ]
  },
  tomate: {
    aviso: 'El culo negro (podredumbre apical) casi siempre es riego irregular, no falta de calcio en la tierra. Primera medida: estabilizar el riego.',
    trucos: [
      'Necesita tutor desde el primer día: una caña alta bien clavada.',
      'Riega la tierra, nunca las hojas: mojarlas trae hongos.',
      'Compra plantel; no siembres semilla el primer año.',
    ]
  },
  pimiento: {
    trucos: [
      'Cuanto más recoges, más flores echa. No dejes fruta pasada en la planta.',
      'Un tutor pequeño le ayuda cuando carga de pimientos.',
      'Aguanta produciendo hasta bien entrado octubre.',
    ]
  },
  berenjena: {
    trucos: [
      'Le encanta el calor: es de las más adaptadas al verano de Tortosa.',
      'Recógelas cuando brillan; si pierden brillo están pasadas.',
      'Con dos plantas tienes berenjenas todo el verano.',
    ]
  },
  calabacin: {
    aviso: 'Una sola planta sana produce más de lo que consume una familia. No pongas cinco calabacines en 4 m².',
    trucos: [
      'En seis semanas ya cosechas: perfecto para no perder la ilusión.',
      'Recógelos de un palmo. Los gigantes saben a agua.',
      'Planta una segunda tanda en agosto para comer en otoño.',
    ]
  },
  pepino: {
    trucos: [
      'Sin guía se pudre en el suelo y ocupa el triple.',
      'Es de las que más agua pide del bancal.',
      'La malla en el lado norte del bancal: no da sombra al resto.',
    ]
  },
  judia_verde: {
    trucos: [
      'La de mata baja no necesita guía: siembras y te olvidas.',
      'Se siembra directa con semilla.',
      'Si te gusta la trepadora, ponla en la misma malla que el pepino.',
    ]
  },
  melon: {
    trucos: [
      'Plántalo al borde y deja que las guías salgan fuera del bancal.',
      'Pon una teja o tabla bajo la fruta para que no toque la tierra húmeda.',
      'Deja 2-3 frutas por planta: salen más grandes y dulces.',
    ]
  },
  ajo: {
    trucos: [
      'Separa la cabeza en dientes y entierra cada uno con la punta hacia arriba.',
      'Plantar y esperar: no pide nada más.',
      'Cuando las hojas se secan a la mitad, ya puedes arrancarlos.',
    ]
  },
  zanahoria: {
    trucos: [
      'Siempre semilla directa, nunca plantel.',
      'La tierra tiene que ser suelta y honda o la zanahoria sale torcida.',
      'Aclara a 3-5 cm cuando nazcan: sin aclarar no engordan.',
    ]
  },
  romero: {
    trucos: [
      'Va con tomillo, lavanda, salvia, orégano y laurel: todas beben poquísimo.',
      'Al romero se le mata de agua, no de sed.',
      'Corta ramitas a menudo: se mantiene compacto.',
    ]
  },
  tomillo: {
    trucos: [
      'Necesita sol directo y buen drenaje: nada de plato con agua debajo.',
      'Junta romero, tomillo y lavanda: mismo riego, mismo sol.',
      'Se seca bien y dura todo el invierno en el bote.',
    ]
  },
  lavanda: {
    trucos: [
      'Ponla cerca de los frutales: los polinizadores que atrae te dan más fruta.',
      'No necesita compartir el goteo diario de los tomates.',
      'Poda las flores secas al final del verano.',
    ]
  },
  salvia: {
    trucos: [
      'Sus hojas grises reflejan el sol: por eso aguanta tanto calor.',
      'No la riegues por encima, solo la tierra.',
      'Mismo grupo que romero, tomillo y lavanda.',
    ]
  },
  oregano: {
    trucos: [
      'Córtalo en flor, átalo en manojo y sécalo boca abajo.',
      'Cuanto más sol, más aroma.',
      'Poda después de floración si quieres mantenerlo compacto.',
    ]
  },
  laurel: {
    trucos: [
      'Con un laurel tienes hojas para guisos de por vida.',
      'Crece despacio, perfecto para maceta.',
      'Recorta la punta para que ensanche en vez de subir.',
    ]
  },
  albahaca: {
    aviso: 'Nunca en la misma maceta que romero o lavanda: ellas quieren sequía y la albahaca agua cada día. Este es el error clásico de las aromáticas.',
    trucos: [
      'Al lado de los tomates: se llevan bien y ocupan poco.',
      'Corta las flores en cuanto salgan o la hoja amarga.',
      'Es anual: en invierno se muere y se replanta cada primavera.',
    ]
  },
  perejil: {
    trucos: [
      'Agradece sombra a mediodía en verano.',
      'Corta las ramas de fuera desde la base y deja el centro.',
      'En verano se sube a flor: replanta cada año.',
    ]
  },
  cilantro: {
    trucos: [
      'Con calor se sube a flor: mejor sembrarlo en otoño.',
      'Siembra un poco cada mes para tener siempre hoja tierna.',
      'No le gusta el trasplante: siembra directa.',
    ]
  },
  menta: {
    aviso: 'SIEMPRE en maceta sola: la menta es la okupa del huerto. Mete raíces por todas partes y ahoga a las vecinas en una sola temporada.',
    trucos: [
      'Si la plantas con otras, en tres meses solo tendrás menta.',
      'Nunca la plantes libre en el terreno.',
      'Es la aromática que más agua pide.',
    ]
  },
};
