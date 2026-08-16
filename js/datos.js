/* =========================================================
   Mi Huerto en Maceta — datos
   Contenido del "Plan definitivo de huerto, frutales y aromáticas.
   Tortosa (Tarragona) 2026-2027".
   ========================================================= */

/* ---------------------------------------------------------
   1. CATÁLOGO DE PLANTAS (31 fichas)
   --------------------------------------------------------- */
const PLANTAS = [
  { id: 'higuera', nombre: 'Higuera', grupo: 'Árboles frutales', variedad: 'Variedad bífera: Colar o San Pedro', dif: 1, corto: 'La más fácil de todas y la que antes te da fruta.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'Brevas en junio e higos en agosto, ya el primer año', maceta: 'Maceta rígida clara de 80-100 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [11, 12, 1, 2], accion: 'Comprar de 2-3 años y plantar en maceta de 80-100 L', trucos: ['Cómprala de 2-3 años con el tronco gordo como un dedo y comes brevas el primer junio.', 'Aguanta el calor de Tortosa mejor que tú: no la mimes de más.', 'Corta los brotes que salen en la base del tronco, roban fuerza a los higos.'] },
  { id: 'granado', nombre: 'Granado', grupo: 'Árboles frutales', variedad: 'Mollar de Elche', dif: 1, corto: 'Casi indestructible: el que más perdona los olvidos.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'En otoño', maceta: 'Maceta rígida clara de 70-90 L, sobre ladrillos', riego: 'Cada 3-4 días; diario en pleno verano', meses: [11, 12, 1, 2], accion: 'Plantar en maceta de 70-90 L en el sitio más soleado', trucos: ['Es el árbol que más perdona: si te olvidas un riego, sobrevive.', 'Le encanta el sol directo, ponlo en el punto más soleado del patio.', 'No riegues a lo loco cuando la fruta madura: las granadas se abren.'] },
  { id: 'limonero', nombre: 'Limonero', grupo: 'Árboles frutales', variedad: '4 estaciones', dif: 2, corto: 'Limones todo el año desde el primer año.', plantar: 'SOLO en marzo o abril, nunca antes del invierno', plantarCorto: 'mar–abr', cosecha: 'Todo el año, en varias tandas', maceta: 'Maceta rígida clara de 60-80 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [3, 4], accion: 'Plantar ahora: es su ventana, y solo esta', aviso: 'Hojas amarillas con los nervios verdes = le falta hierro (clorosis), muy típico si riegas con agua con cal. Se corrige con un corrector de hierro autorizado en agricultura ecológica.', trucos: ['Nunca lo plantes en otoño: una helada sobre un cítrico recién plantado se lo lleva por delante.', 'Abono específico de cítricos de marzo a octubre, sin fallar.', 'Hojas amarillentas con nervios verdes es hierro, no sed. No riegues más.'] },
  { id: 'mandarino', nombre: 'Mandarino', grupo: 'Árboles frutales', variedad: 'Clementino', dif: 2, corto: 'Dulce, agradecido y de cosecha en noviembre.', plantar: 'En marzo o abril', plantarCorto: 'mar–abr', cosecha: 'En noviembre', maceta: 'Maceta rígida clara de 60-80 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [3, 4], accion: 'Plantar en maceta de 60-80 L, protegido del viento', trucos: ['Como todos los cítricos: primavera sí, otoño jamás.', 'Protégelo del viento fuerte: tira la flor y sin flor no hay mandarinas.', 'Abono de cítricos cada 15 días en primavera y verano.'] },
  { id: 'kumquat', nombre: 'Kumquat', grupo: 'Árboles frutales', variedad: 'Naranjo chino', dif: 1, corto: 'Enano de nacimiento: nunca se te hará grande.', plantar: 'En marzo o abril', plantarCorto: 'mar–abr', cosecha: 'En invierno', maceta: 'Maceta rígida clara de 40-50 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [3, 4], accion: 'Plantar en maceta de 40-50 L: el cítrico de menos espacio', trucos: ['Es enano natural: nunca te comerá el patio.', 'La fruta se come entera con piel: la piel es lo dulce, la pulpa lo ácido.', 'Perfecto si dudas del espacio disponible: empieza por él.'] },
  { id: 'ciruelo', nombre: 'Ciruelo japonés', grupo: 'Árboles frutales', variedad: 'Santa Rosa o Golden Japan', dif: 2, corto: 'Fruta a partir del segundo año. Mira que sea autofértil.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'En verano, desde el segundo año', maceta: 'Maceta rígida clara de 80-100 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [11, 12, 1, 2], accion: 'Comprar a raíz desnuda y plantar en 80-100 L', aviso: 'Aquí la variedad exacta es crítica. Antes de pagar confirma: necesidades de frío, autofertilidad, compatibilidad de polinización y vigor del patrón.', trucos: ['Comprueba en la etiqueta que sea autofértil o tendrás flores y cero ciruelas.', 'Pierde la hoja en invierno y parece muerto. Es normal.', 'Poda ligera en invierno, cuando está sin hojas.'] },
  { id: 'caqui', nombre: 'Caqui', grupo: 'Árboles frutales', variedad: 'Rojo Brillante', dif: 2, corto: 'El que más maceta pide de toda la lista.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'En otoño, a partir del segundo año', maceta: 'Maceta rígida clara de 100-120 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [11, 12, 1, 2], accion: 'Plantar en maceta de 100-120 L: necesita sitio', trucos: ['No le escatimes litros: es el que más volumen de raíz necesita.', 'Tarda unos dos años en dar cosecha de verdad.', 'En otoño se queda sin hojas y lleno de bolas naranjas: precioso.'] },
  { id: 'fresa', nombre: 'Fresa', grupo: 'Frutas pequeñas', variedad: 'Reflorescente (da varias veces)', dif: 1, corto: 'La primera alegría del año y cabe en cualquier sitio.', plantar: 'Septiembre y octubre', plantarCorto: 'sep–oct', cosecha: 'De marzo a junio', maceta: 'Cualquier maceta, jardinera o tubo vertical', riego: 'Cada 2 días; diario en verano', meses: [9, 10], accion: 'Plantar planteles con la corona a ras de tierra', trucos: ['La corona (el nudito del que salen las hojas) va a ras de tierra: ni enterrada ni al aire.', 'Enterrada se pudre, al aire se seca. Es su único punto delicado.', 'En pleno verano de Tortosa agradece protección del sol de tarde.'] },
  { id: 'frambuesa', nombre: 'Frambuesa', grupo: 'Frutas pequeñas', variedad: 'Reflorescente', dif: 2, corto: 'Da fruta ya el primer otoño.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'Primer otoño y luego cada verano', maceta: 'Maceta de 40 L, sobre ladrillos', riego: 'Cada 2 días; diario en verano', meses: [11, 12, 1, 2], accion: 'Plantar en 40 L, en un sitio con sombra a mediodía', trucos: ['Agradece sombra a mediodía en verano: no es planta de 40 °C al sol.', 'Corta a ras las cañas que ya han dado fruta.', 'No dejes que la tierra se seque del todo.'] },
  { id: 'mora', nombre: 'Mora sin espinas', grupo: 'Frutas pequeñas', variedad: 'Variedad sin espinas', dif: 2, corto: 'Necesita una valla o alambre donde apoyarse.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'En verano', maceta: 'Maceta de 30-50 L, sobre ladrillos', riego: 'Cada 2-3 días; diario en verano', meses: [11, 12, 1, 2], accion: 'Plantar en 30-50 L junto a una valla o guía', trucos: ['Compra la variedad sin espinas o acabarás odiando cosecharla.', 'Ata las ramas: crecen largas y se tumban solas.', 'Poda las cañas viejas cada invierno.'] },
  { id: 'arandano', nombre: 'Arándano', grupo: 'Frutas pequeñas', variedad: 'Biloxi u O’Neal (clima cálido)', dif: 3, corto: 'Exige sustrato especial. Sin eso, no hay nada que hacer.', plantar: 'Octubre y noviembre', plantarCorto: 'oct–nov', cosecha: 'Primavera y verano', maceta: 'Maceta de 40 L, sobre ladrillos', riego: 'Frecuente: no soporta secarse', meses: [10, 11], accion: 'Comprar sustrato de acidófilas ANTES que la planta', aviso: 'Solo con sustrato para plantas acidófilas. Con agua alcalina o calcárea da bastante más trabajo que el resto: no es la compra de un principiante en Tortosa.', trucos: ['Busca el saco que ponga "acidófilas" o "para arándanos y hortensias". Es su comida.', 'Si tu agua tiene mucha cal, riégalo con agua de lluvia siempre que puedas.', 'Elige variedades de clima cálido: Biloxi u O’Neal. Otras no aguantan aquí.'] },
  { id: 'parra', nombre: 'Parra de uva', grupo: 'Frutas pequeñas', variedad: 'Uva de mesa', dif: 3, corto: 'Uvas en 2-3 años y sombra gratis en verano.', plantar: 'De noviembre a febrero', plantarCorto: 'nov–feb', cosecha: 'En septiembre, desde el segundo o tercer año', maceta: 'Maceta de 50-80 L, sobre ladrillos', riego: 'Cada 3-4 días; más en verano', meses: [11, 12, 1, 2], accion: 'Plantar en 50-80 L al pie de una pérgola', trucos: ['Decide dónde va la pérgola antes de plantarla.', 'Te da uvas y sombra justo donde hace falta en verano.', 'Poda fuerte cada invierno: sin podar da mucha hoja y poca uva.'] },
  { id: 'tomate', nombre: 'Tomate', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 3, corto: 'El clásico. Pide tutor, constancia y riego en la tierra.', plantar: 'Plantel en marzo y abril', plantarCorto: 'mar–abr', cosecha: 'De julio a septiembre', maceta: 'Bancal (50-70 cm entre plantas) o maceta de 30 L mínimo', riego: 'Cada 2 días; diario en verano', meses: [3, 4], accion: 'Comprar plantel y clavar el tutor el mismo día', aviso: 'El culo negro (podredumbre apical) casi siempre es riego irregular, no falta de calcio en la tierra. Primera medida: estabilizar el riego.', trucos: ['Necesita tutor desde el primer día: una caña alta bien clavada.', 'Riega la tierra, nunca las hojas: mojarlas trae hongos.', 'Compra plantel; no siembres semilla el primer año.'] },
  { id: 'pimiento', nombre: 'Pimiento', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 2, corto: 'Produce hasta octubre: de los más rentables.', plantar: 'Plantel en abril', plantarCorto: 'abril', cosecha: 'De julio a octubre', maceta: 'Bancal (35-45 cm entre plantas) o maceta de 20-30 L', riego: 'Cada 2 días; diario en verano', meses: [4], accion: 'Plantar plantel en el bancal, con espacio entre plantas', trucos: ['Cuanto más recoges, más flores echa. No dejes fruta pasada en la planta.', 'Un tutor pequeño le ayuda cuando carga de pimientos.', 'Aguanta produciendo hasta bien entrado octubre.'] },
  { id: 'berenjena', nombre: 'Berenjena', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 2, corto: 'De las que mejor llevan el verano de aquí.', plantar: 'Plantel en abril', plantarCorto: 'abril', cosecha: 'De julio a octubre', maceta: 'Bancal (50-60 cm entre plantas) o maceta de 30 L', riego: 'Cada 2 días; diario en verano', meses: [4], accion: 'Plantar 2 planteles: dan para toda la temporada', trucos: ['Le encanta el calor: es de las más adaptadas al verano de Tortosa.', 'Recógelas cuando brillan; si pierden brillo están pasadas.', 'Con dos plantas tienes berenjenas todo el verano.'] },
  { id: 'calabacin', nombre: 'Calabacín', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 1, corto: 'De plantar a comer, 6-7 semanas. El subidón de moral.', plantar: 'Plantel en marzo-abril y otra tanda en agosto', plantarCorto: 'mar–abr y ago', cosecha: 'A las 6-7 semanas', maceta: 'Bancal: 80-100 cm por planta, ocupa mucho', riego: 'Cada 2 días; diario en verano', meses: [3, 4, 8], accion: 'Plantar plantel: en 6 semanas estás comiendo', aviso: 'Una sola planta sana produce más de lo que consume una familia. No pongas cinco calabacines en 4 m².', trucos: ['En seis semanas ya cosechas: perfecto para no perder la ilusión.', 'Recógelos de un palmo. Los gigantes saben a agua.', 'Planta una segunda tanda en agosto para comer en otoño.'] },
  { id: 'pepino', nombre: 'Pepino', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 2, corto: 'Necesita malla o cañas para trepar.', plantar: 'Plantel en abril y mayo', plantarCorto: 'abr–may', cosecha: 'En verano', maceta: 'Bancal con malla vertical (40-50 cm entre plantas)', riego: 'Muy frecuente: no le gusta secarse', meses: [4, 5], accion: 'Montar la guía primero y luego plantar', trucos: ['Sin guía se pudre en el suelo y ocupa el triple.', 'Es de las que más agua pide del bancal.', 'La malla en el lado norte del bancal: no da sombra al resto.'] },
  { id: 'judia', nombre: 'Judía de mata baja', grupo: 'Verduras', variedad: 'Mata baja, sin guía', dif: 1, corto: '60 días de la semilla al plato, sin guía ni tutor.', plantar: 'Abril y agosto', plantarCorto: 'abr y ago', cosecha: 'A los 60 días', maceta: 'Bancal o jardinera honda (15-25 cm entre plantas)', riego: 'Cada 2-3 días', meses: [4, 8], accion: 'Sembrar semilla directa: no hace falta plantel', trucos: ['La de mata baja no necesita guía: siembras y te olvidas.', 'Se siembra directa con semilla.', 'Si te gusta la trepadora, ponla en la misma malla que el pepino.'] },
  { id: 'melon', nombre: 'Melón y sandía', grupo: 'Verduras', variedad: 'Plantel de vivero', dif: 3, corto: 'Una sola planta puede ocupar dos metros de bancal.', plantar: 'En mayo', plantarCorto: 'mayo', cosecha: 'Final del verano', maceta: 'Al borde del bancal, guiando las ramas hacia fuera', riego: 'Abundante hasta que la fruta engorda', meses: [5], accion: 'Plantar solo si tienes 2 m libres de bancal', trucos: ['Plántalo al borde y deja que las guías salgan fuera del bancal.', 'Pon una teja o tabla bajo la fruta para que no toque la tierra húmeda.', 'Deja 2-3 frutas por planta: salen más grandes y dulces.'] },
  { id: 'ajo', nombre: 'Ajo', grupo: 'Verduras', variedad: 'Diente de ajo común', dif: 1, corto: 'La planta con menos trabajo de toda la guía.', plantar: 'De octubre a enero', plantarCorto: 'oct–ene', cosecha: 'En junio', maceta: 'Bancal o jardinera de 20 cm de hondo (10-15 cm entre dientes)', riego: 'Poco: cada 7-10 días', meses: [10, 11, 12, 1], accion: 'Enterrar dientes con la punta hacia arriba y olvidarse', trucos: ['Separa la cabeza en dientes y entierra cada uno con la punta hacia arriba.', 'Plantar y esperar: no pide nada más.', 'Cuando las hojas se secan a la mitad, ya puedes arrancarlos.'] },
  { id: 'zanahoria', nombre: 'Zanahoria y rábano', grupo: 'Verduras', variedad: 'Siembra directa', dif: 1, corto: 'El rábano está en tu plato en 30 días.', plantar: 'Septiembre-noviembre y febrero-abril', plantarCorto: 'sep–nov y feb–abr', cosecha: 'Rábano en 30 días; zanahoria en 3-4 meses', maceta: 'Jardinera honda (mínimo 30 cm) o bancal', riego: 'Cada 2-3 días: tierra siempre algo húmeda', meses: [9, 10, 11, 2, 3, 4], accion: 'Sembrar semilla directa en jardinera honda', trucos: ['Siempre semilla directa, nunca plantel.', 'La tierra tiene que ser suelta y honda o la zanahoria sale torcida.', 'Aclara a 3-5 cm cuando nazcan: sin aclarar no engordan.'] },
  { id: 'romero', nombre: 'Romero', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Grupo seco: casi sin agua y a pleno sol.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'Todo el año', maceta: 'Maceta de 10-15 L, junto a las de poco riego', riego: 'Muy poco: cada 10-15 días', meses: [3, 4, 9, 10], accion: 'Plantar con tomillo, lavanda, salvia, orégano y laurel', trucos: ['Va con tomillo, lavanda, salvia, orégano y laurel: todas beben poquísimo.', 'Al romero se le mata de agua, no de sed.', 'Corta ramitas a menudo: se mantiene compacto.'] },
  { id: 'tomillo', nombre: 'Tomillo', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Grupo seco: cuanto peor lo tratas, mejor huele.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'Todo el año', maceta: 'Maceta pequeña, junto a las de poco riego', riego: 'Muy poco: cada 10-15 días', meses: [3, 4, 9, 10], accion: 'Plantar en la jardinera seca, a pleno sol', trucos: ['Necesita sol directo y buen drenaje: nada de plato con agua debajo.', 'Junta romero, tomillo y lavanda: mismo riego, mismo sol.', 'Se seca bien y dura todo el invierno en el bote.'] },
  { id: 'lavanda', nombre: 'Lavanda', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Atrae polinizadores y con ellos sube tu cosecha de fruta.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'Flores en primavera y verano', maceta: 'Maceta de 15 L, junto a las de poco riego', riego: 'Muy poco: cada 10-15 días', meses: [3, 4, 9, 10], accion: 'Plantar cerca de los frutales, no lejos', trucos: ['Ponla cerca de los frutales: los polinizadores que atrae te dan más fruta.', 'No necesita compartir el goteo diario de los tomates.', 'Poda las flores secas al final del verano.'] },
  { id: 'salvia', nombre: 'Salvia', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Grupo seco: hoja gris que refleja el sol.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'Todo el año', maceta: 'Maceta de 10-15 L, junto a las de poco riego', riego: 'Muy poco: cada 10-15 días', meses: [3, 4, 9, 10], accion: 'Plantar en la jardinera seca con romero y tomillo', trucos: ['Sus hojas grises reflejan el sol: por eso aguanta tanto calor.', 'No la riegues por encima, solo la tierra.', 'Mismo grupo que romero, tomillo y lavanda.'] },
  { id: 'oregano', nombre: 'Orégano', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Se seca en manojo y te dura todo el invierno.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'En verano', maceta: 'Maceta pequeña, junto a las de poco riego', riego: 'Muy poco: cada 10-15 días', meses: [3, 4, 9, 10], accion: 'Plantar en la jardinera seca, a pleno sol', trucos: ['Córtalo en flor, átalo en manojo y sécalo boca abajo.', 'Cuanto más sol, más aroma.', 'Poda después de floración si quieres mantenerlo compacto.'] },
  { id: 'laurel', nombre: 'Laurel', grupo: 'Aromáticas', variedad: 'Grupo de poco riego', dif: 1, corto: 'Un arbusto que no se muere nunca.', plantar: 'Marzo-abril o septiembre-octubre', plantarCorto: 'mar–abr y sep–oct', cosecha: 'Todo el año', maceta: 'Maceta de 30-40 L, sobre ladrillos', riego: 'Poco: cada 8-12 días', meses: [3, 4, 9, 10], accion: 'Plantar en maceta de 30-40 L: crece despacio', trucos: ['Con un laurel tienes hojas para guisos de por vida.', 'Crece despacio, perfecto para maceta.', 'Recorta la punta para que ensanche en vez de subir.'] },
  { id: 'albahaca', nombre: 'Albahaca', grupo: 'Aromáticas', variedad: 'Grupo de riego frecuente', dif: 2, corto: 'Grupo húmedo: agua casi a diario, nunca con el romero.', plantar: 'En abril, junto a los tomates', plantarCorto: 'abr–may', cosecha: 'De junio a septiembre', maceta: 'Maceta propia o junto al tomate en el bancal', riego: 'Frecuente: cada 1-2 días en verano', meses: [4, 5], accion: 'Plantar al lado de los tomates, no con las secas', aviso: 'Nunca en la misma maceta que romero o lavanda: ellas quieren sequía y la albahaca agua cada día. Este es el error clásico de las aromáticas.', trucos: ['Al lado de los tomates: se llevan bien y ocupan poco.', 'Corta las flores en cuanto salgan o la hoja amarga.', 'Es anual: en invierno se muere y se replanta cada primavera.'] },
  { id: 'perejil', nombre: 'Perejil', grupo: 'Aromáticas', variedad: 'Grupo de riego frecuente', dif: 1, corto: 'Grupo húmedo: maceta propia y sombra a mediodía.', plantar: 'Marzo-abril o septiembre', plantarCorto: 'mar–abr y sep', cosecha: 'Casi todo el año', maceta: 'Maceta honda propia', riego: 'Frecuente: cada 2 días', meses: [3, 4, 9], accion: 'Plantar en maceta honda, en semisombra', trucos: ['Agradece sombra a mediodía en verano.', 'Corta las ramas de fuera desde la base y deja el centro.', 'En verano se sube a flor: replanta cada año.'] },
  { id: 'cilantro', nombre: 'Cilantro', grupo: 'Aromáticas', variedad: 'Grupo de riego frecuente', dif: 2, corto: 'Grupo húmedo: con calor florece enseguida.', plantar: 'Marzo o septiembre-octubre', plantarCorto: 'mar y sep–oct', cosecha: 'A las 6-8 semanas', maceta: 'Maceta honda propia', riego: 'Frecuente: cada 2 días', meses: [3, 9, 10], accion: 'Sembrar directo en su maceta, mejor en otoño', trucos: ['Con calor se sube a flor: mejor sembrarlo en otoño.', 'Siembra un poco cada mes para tener siempre hoja tierna.', 'No le gusta el trasplante: siembra directa.'] },
  { id: 'menta', nombre: 'Menta y hierbabuena', grupo: 'Aromáticas', variedad: 'Grupo de riego frecuente', dif: 1, corto: 'Siempre sola. Siempre. Sin excepciones.', plantar: 'Marzo-abril o septiembre', plantarCorto: 'mar–abr y sep', cosecha: 'De primavera a otoño', maceta: 'Maceta propia y exclusiva de 10-20 L', riego: 'Frecuente: cada 2 días, más en verano', meses: [3, 4, 9], accion: 'Plantar en una maceta para ella sola', aviso: 'SIEMPRE en maceta sola: la menta es la okupa del huerto. Mete raíces por todas partes y ahoga a las vecinas en una sola temporada.', trucos: ['Si la plantas con otras, en tres meses solo tendrás menta.', 'Nunca la plantes libre en el terreno.', 'Es la aromática que más agua pide.'] }
];

/* ---------------------------------------------------------
   2. CALENDARIO MES A MES
   --------------------------------------------------------- */
const MESES = [
  { n: 1, corto: 'Ene', nombre: 'Enero', lema: 'Mes de plantar árboles y podar.', planta: 'Árboles de hoja caduca: higuera, granado, ciruelo, caqui, frambuesa, mora y parra. Es cuando más baratos están. Continúa el ajo, la cebolla y el guisante.', cosecha: 'Limones, kumquats y mandarinas.', tarea: 'Podar los caducos mientras están sin hojas, revisar tutores y comprobar que el goteo no tenga fugas.', temp: 'frio' },
  { n: 2, corto: 'Feb', nombre: 'Febrero', lema: 'Última llamada para los árboles.', planta: 'Últimos árboles de hoja caduca. Siembra directa de zanahoria y rábano. Patata de siembra si la quieres.', cosecha: 'Cítricos.', tarea: 'Comprar compost, abono granulado, tutores y sustrato. Preparar los bancales para el huerto de verano.', temp: 'frio' },
  { n: 3, corto: 'Mar', nombre: 'Marzo', lema: 'Arranca el año de verdad.', planta: 'Cítricos (limonero, mandarino, kumquat), plantel de tomate y calabacín, aromáticas, zanahoria y cilantro.', cosecha: 'Primeras fresas.', tarea: 'Renovar la capa superficial de sustrato de los frutales y empezar la fertilización de primavera. Se acabó el descanso invernal.', temp: 'suave' },
  { n: 4, corto: 'Abr', nombre: 'Abril', lema: 'El mes más ocupado del año.', planta: 'Plantel de tomate, pimiento, berenjena, pepino, judía, calabacín y albahaca. Todavía cítricos.', cosecha: 'Fresas a tope.', tarea: 'Poner los tutores el mismo día de plantar y subir el riego a cada 2-3 días. Acolchar cuando el suelo ya esté caliente.', temp: 'suave' },
  { n: 5, corto: 'May', nombre: 'Mayo', lema: 'Entran melón y sandía.', planta: 'Melón, sandía y pepino.', cosecha: 'Fresas y primeras judías.', tarea: 'Ajustar el programador, revisar pulgón, guiar el pepino y atar el tomate. Empieza el calor de verdad.', temp: 'suave' },
  { n: 6, corto: 'Jun', nombre: 'Junio', lema: 'Llegan las brevas.', planta: 'Nada nuevo: ya hace demasiado calor para trasplantar.', cosecha: 'Brevas de la higuera, fresas, ajos, judías y primeros calabacines.', tarea: 'Riego diario, acolchado completo y revisión semanal del goteo. Cosechar los calabacines jóvenes con frecuencia.', temp: 'calor' },
  { n: 7, corto: 'Jul', nombre: 'Julio', lema: 'Mes crítico de agua.', planta: 'Nada. Julio no es mes de plantar.', cosecha: 'Tomate, pimiento, berenjena, calabacín y pepino.', tarea: 'Riega temprano. Si una maceta se seca cada tarde, aumenta agua o divide el riego en dos. Comprueba las pilas del programador.', temp: 'calor' },
  { n: 8, corto: 'Ago', nombre: 'Agosto', lema: 'Mes de preparar, no de plantar.', planta: 'Solo una segunda tanda de judía y calabacín, y con cuidado.', cosecha: 'Higos, tomate, pimiento, berenjena y calabacín.', tarea: 'Comprar material y montar el riego por goteo. Es normal que el calor extremo reduzca el cuajado: no lo compenses con más abono.', temp: 'calor' },
  { n: 9, corto: 'Sep', nombre: 'Septiembre', lema: 'Empieza el huerto de otoño.', planta: 'Fresas, aromáticas, zanahoria, rábano, perejil y cilantro.', cosecha: 'Higos, uvas y últimos tomates.', tarea: 'Bajar el riego a cada 3-4 días y hacer balance del año: kilos, variedades que funcionaron, qué sobró y qué faltó.', temp: 'suave' },
  { n: 10, corto: 'Oct', nombre: 'Octubre', lema: 'Fresas y ajos a la tierra.', planta: 'Fresas, aromáticas, ajos, cebolla, guisante y arándanos.', cosecha: 'Granadas, caquis y uvas.', tarea: 'Último abonado del año y compost superficial en los bancales. A partir de aquí las plantas descansan.', temp: 'suave' },
  { n: 11, corto: 'Nov', nombre: 'Noviembre', lema: 'Los árboles, más baratos que nunca.', planta: 'Árboles de hoja caduca, ajos, frambuesa, mora, parra y arándano.', cosecha: 'Mandarinas, caquis y granadas.', tarea: 'Comprar árboles a raíz desnuda: mejor momento y mejor precio del año. Con 2-3 frutales ya empiezas bien.', temp: 'frio' },
  { n: 12, corto: 'Dic', nombre: 'Diciembre', lema: 'Frío suave, todo tranquilo.', planta: 'Árboles de hoja caduca y ajos.', cosecha: 'Limones y mandarinas.', tarea: 'Comprobar que los drenajes no estén bloqueados, proteger los cítricos si anuncian helada excepcional y no regar casi nada.', temp: 'frio' }
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
   10. TABLA MAESTRA DE HORTALIZAS
   --------------------------------------------------------- */
const HORTALIZAS_VERANO = [
  ['Tomate', 'Plantel, mar-abr', '50-70 cm', 'bancal / maceta grande', 'media'],
  ['Pimiento', 'Plantel, abr-may', '35-45 cm', 'bancal / 20-30 L', 'fácil-media'],
  ['Berenjena', 'Plantel, abr-may', '50-60 cm', 'bancal / 30 L', 'media'],
  ['Calabacín', 'Plantel, mar-may', '80-100 cm', 'bancal', 'fácil'],
  ['Pepino', 'Plantel, abr-may', '40-50 cm', 'bancal con malla', 'fácil'],
  ['Judía trepadora', 'Semilla, abr-jul', '15-25 cm', 'malla', 'fácil'],
  ['Judía baja', 'Semilla, abr-jul', '15-25 cm', 'bancal', 'fácil'],
  ['Melón', 'Plantel, abr-may', '80-120 cm', 'borde del bancal', 'media'],
  ['Sandía', 'Plantel, abr-may', '100-150 cm', 'borde; guías fuera', 'media'],
  ['Calabaza', 'Plantel, abr-may', '100+ cm', 'fuera del bancal pequeño', 'fácil'],
  ['Maíz dulce', 'Semilla, abr-jun', '20-30 cm', 'en grupo/bloque', 'media']
];

const HORTALIZAS_INVIERNO = [
  ['Zanahoria', 'Semilla, sep-nov / feb-abr', '3-5 cm tras aclarar', 'bancal profundo', 'media'],
  ['Rábano', 'Semilla, sep-abr', '3-5 cm', 'bancal / jardinera', 'muy fácil'],
  ['Ajo', 'Diente, oct-ene', '10-15 cm', 'bancal', 'muy fácil'],
  ['Cebolla', 'Plantel, otoño/invierno', '10-15 cm', 'bancal', 'fácil'],
  ['Patata', 'Tubérculo, feb-mar', '30-40 cm', 'bancal / saco grande', 'fácil-media'],
  ['Guisante', 'Semilla, otoño-invierno', '5-10 cm', 'malla', 'fácil'],
  ['Haba', 'Semilla, otoño-invierno', '20-30 cm', 'bancal', 'fácil'],
  ['Lechuga', 'Plantel, otoño-primavera', '25-30 cm', 'bancal', 'fácil'],
  ['Espinaca', 'Semilla, otoño-invierno', '10-15 cm', 'bancal', 'fácil'],
  ['Acelga', 'Plantel, otoño-primavera', '30-40 cm', 'bancal', 'fácil']
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
const VIA_PLANTA = {
  higuera:   { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: una semilla no reproduce la variedad', nota: 'En contenedor todo el año, o a raíz desnuda durante el reposo invernal.' },
  granado:   { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: una semilla no reproduce la variedad', nota: 'En contenedor todo el año, o a raíz desnuda durante el reposo invernal.' },
  limonero:  { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: sembrar una pepita de limón no da este árbol', nota: 'Cítricos, siempre en contenedor y con la variedad identificada.' },
  mandarino: { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: sembrar una pepita no da este árbol', nota: 'Cítricos, siempre en contenedor y con la variedad identificada.' },
  kumquat:   { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: sembrar una pepita no da este árbol', nota: 'Cítricos, siempre en contenedor y con la variedad identificada.' },
  ciruelo:   { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: una semilla de ciruela no da esta variedad', nota: 'Contenedor, o raíz desnuda en invierno. Confirma variedad y patrón antes de pagar.' },
  caqui:     { via: 'vivero', reco: 'Árbol de vivero', semilla: 'No: una semilla no reproduce la variedad', nota: 'Contenedor, o raíz desnuda en invierno.' },

  fresa:     { via: 'vivero', reco: 'Planta comprada', semilla: 'Existe, pero es lenta y no compensa', nota: 'Planta en macetita o alveolo de vivero. Ventanas: finales de septiembre-otoño y final de invierno.' },
  frambuesa: { via: 'vivero', reco: 'Planta o caña de vivero', semilla: 'No merece la pena', nota: 'Si quieres cosecha repetida, pide variedad remontante o reflorescente.' },
  mora:      { via: 'vivero', reco: 'Planta de vivero', semilla: 'No merece la pena', nota: 'Compra planta identificada y sin espinas.' },
  arandano:  { via: 'vivero', reco: 'Planta de vivero', semilla: 'No merece la pena', nota: 'Variedad de bajo requerimiento de frío, y sustrato de acidófilas comprado antes que la planta.' },
  parra:     { via: 'vivero', reco: 'Planta de vivero', semilla: 'No: no reproduce la variedad', nota: 'Decide dónde va la pérgola antes de comprarla.' },

  tomate:    { via: 'plantel', reco: 'Plantel', semilla: 'Semillero protegido en feb–mar', trasplante: 'Al bancal a finales de mar–abr', nota: '«Tomate en marzo-abril» significa comprar plantel y trasplantarlo, no poner una semilla en el bancal.' },
  pimiento:  { via: 'plantel', reco: 'Plantel', semilla: 'Semillero protegido en feb–mar', trasplante: 'Al bancal en abr–may', nota: 'Más lento que el tomate y muy agradecido al calor: mejor retrasarlo que adelantarlo.' },
  berenjena: { via: 'plantel', reco: 'Plantel', semilla: 'Semillero protegido en feb–mar', trasplante: 'Al bancal en abr–may', nota: 'Planta de calor. Sin prisa por sacarla al bancal.' },
  calabacin: { via: 'plantel', reco: 'Plantel el primer año', semilla: 'Semillero mar–abr, o siembra directa abr–jun', trasplante: 'Al bancal en abr–may', nota: 'Si lo siembras directo, pon 2 semillas en el punto definitivo y deja luego la más fuerte.' },
  pepino:    { via: 'plantel', reco: 'Plantel el primer año', semilla: 'Semillero mar–abr, o siembra directa abr–may', trasplante: 'Al bancal en abr–may', nota: 'No hagas el semillero muy pronto: crece deprisa y no conviene tenerlo atrapado en un alveolo.' },
  melon:     { via: 'plantel', reco: 'Plantel', semilla: 'Semillero mar–abr, o siembra directa abr–may', trasplante: 'Al bancal a finales de abr–may', nota: 'Pondrás muy pocas plantas: no necesitas una bolsa entera de semillas.' },
  judia:     { via: 'semilla', reco: 'Semilla en su sitio definitivo', semilla: 'Abr–jul, en tandas escalonadas', nota: 'Germina rápido y la semilla es grande. El plantel existe, pero no lo necesitas.' },
  ajo:       { via: 'material', reco: 'Diente directo al bancal', semilla: 'Diente de ajo, de oct a ene', nota: 'Separa la cabeza, elige dientes sanos y entierra cada uno con la punta hacia arriba.' },
  zanahoria: { via: 'semilla', reco: 'Semilla en su sitio definitivo', semilla: 'Zanahoria sep–nov y feb–abr; rábano sep–abr', nota: 'Nunca en semillero: la raíz es justo lo que quieres cosechar y el trasplante la deforma.' },

  romero:  { via: 'vivero', reco: 'Planta de vivero', semilla: 'Posible, pero lenta', nota: 'Trasplanta en sep–oct o mar–abr. Más adelante la multiplicas gratis por esquejes.' },
  tomillo: { via: 'vivero', reco: 'Planta de vivero', semilla: 'Posible, pero la semilla es diminuta y lenta', nota: 'Trasplanta en sep–oct o mar–abr.' },
  lavanda: { via: 'vivero', reco: 'Planta de vivero', semilla: 'Posible, pero lenta', nota: 'Trasplanta en sep–oct o mar–abr.' },
  salvia:  { via: 'vivero', reco: 'Planta de vivero', semilla: 'Posible en semillero de primavera', nota: 'Trasplanta en mar–abr o sep–oct, evitando extremos.' },
  oregano: { via: 'vivero', reco: 'Planta pequeña de vivero', semilla: 'Posible en primavera', nota: 'También se multiplica por división de mata.' },
  laurel:  { via: 'vivero', reco: 'Planta de vivero', semilla: 'Muy lenta', nota: 'Crece despacio: con una planta tienes hojas para años.' },
  albahaca:{ via: 'plantel', reco: 'Plantel el primer año', semilla: 'Semillero mar–abr, o directa en época cálida', trasplante: 'Junto a los tomates en abr–may', nota: 'Es barata como plantel y te ahorra cuidados.' },
  perejil: { via: 'plantel', reco: 'Plantel para empezar', semilla: 'Siembra directa feb–primavera y sep–otoño', nota: 'Germina bastante más despacio que un rábano: si lo haces desde semilla, ten paciencia.' },
  cilantro:{ via: 'semilla', reco: 'Semilla en su sitio definitivo', semilla: 'Sep–nov y feb–mar', nota: 'Se resiente del trasplante. Haz tandas pequeñas en vez de sembrar el sobre entero.' },
  menta:   { via: 'vivero', reco: 'Planta de vivero, en maceta propia', semilla: 'No tiene sentido', nota: 'Después la multiplicas con enorme facilidad. Nunca en el mismo recipiente que las mediterráneas.' }
};

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
const TABLA_SEMILLA = [
  ['Tomate', 'semillero feb-mar', 'fin mar-abr', 'comprar fin mar-abr', 'Plantel'],
  ['Pimiento', 'semillero feb-mar', 'abr-may', 'comprar abr-may', 'Plantel'],
  ['Berenjena', 'semillero feb-mar', 'abr-may', 'comprar abr-may', 'Plantel'],
  ['Calabacín', 'semillero mar-abr o directa abr-jun', 'abr-may', 'comprar abr-may', 'Plantel 1.er año'],
  ['Pepino', 'semillero mar-abr o directa abr-may', 'abr-may', 'comprar abr-may', 'Plantel 1.er año'],
  ['Melón', 'semillero mar-abr o directa abr-may', 'fin abr-may', 'comprar fin abr-may', 'Plantel'],
  ['Sandía', 'semillero mar-abr o directa fin abr-may', 'fin abr-may', 'comprar fin abr-may', 'Plantel'],
  ['Calabaza', 'semillero mar-abr o directa abr-may', 'abr-may', 'comprar abr-may', 'Plantel 1.er año'],
  ['Judía', 'directa abr-jul', '—', 'innecesario', 'Semilla directa'],
  ['Maíz', 'directa abr-jun', '—', 'innecesario', 'Semilla directa'],
  ['Zanahoria', 'directa sep-nov / feb-abr', '—', 'no', 'Semilla directa'],
  ['Rábano', 'directa sep-abr', '—', 'no', 'Semilla directa'],
  ['Ajo', 'diente oct-ene', '—', 'no', 'Diente directo'],
  ['Cebolla', 'semillero según variedad y ciclo', 'según ciclo', 'otoño-invierno', 'Plantel'],
  ['Patata', 'tubérculo feb-mar', '—', 'no', 'Patata de siembra'],
  ['Guisante', 'directa oct-feb aprox.', '—', 'innecesario', 'Semilla directa'],
  ['Haba', 'directa oct-ene', '—', 'innecesario', 'Semilla directa'],
  ['Fresa', 'semilla no recomendada', '—', 'sep-otoño / final invierno', 'Planta comprada'],
  ['Albahaca', 'semillero mar-abr', 'abr-may', 'abr-may', 'Plantel 1.er año'],
  ['Perejil', 'directa feb-primavera / sep-otoño', '—', 'épocas suaves', 'Plantel para empezar'],
  ['Cilantro', 'directa sep-nov / feb-mar', '—', 'posible', 'Semilla directa'],
  ['Cebollino', 'primavera u otoño', 'primavera u otoño', 'primavera u otoño', 'Planta'],
  ['Romero', 'posible, lento', '—', 'sep-oct / mar-abr', 'Planta'],
  ['Tomillo', 'posible, lento', '—', 'sep-oct / mar-abr', 'Planta'],
  ['Orégano', 'primavera', 'primavera', 'primavera u otoño', 'Planta'],
  ['Salvia', 'primavera', 'primavera', 'mar-abr / sep-oct', 'Planta'],
  ['Lavanda', 'posible, lenta', '—', 'sep-oct / mar-abr', 'Planta'],
  ['Menta', 'no merece la pena', '—', 'épocas suaves', 'Planta'],
  ['Frutales', 'no para este plan', '—', 'vivero', 'Árbol identificado']
];

/* Qué comprar el primer año, sin complicaciones */
const PRIMER_ANO = [
  { t: 'Compra como plantel', via: 'plantel', items: ['3 tomates', '4 pimientos', '1 berenjena', '1 calabacín', '2 pepinos', 'melón y sandía solo si de verdad los vas a cultivar', '1-2 albahacas', 'fresas', 'aromáticas perennes'] },
  { t: 'Compra como semilla y siembra directa', via: 'semilla', items: ['zanahoria', 'rábano', 'judía', 'maíz, si lo cultivas', 'guisante', 'haba', 'cilantro'] },
  { t: 'Compra como material de plantación', via: 'material', items: ['ajo → dientes', 'cebolla → plantel o cebollitas', 'patata → patata de siembra'] },
  { t: 'Compra en vivero como planta o árbol', via: 'vivero', items: ['todos los frutales', 'mora', 'frambuesa', 'arándano, si finalmente lo incorporas'] }
];

/* Qué haces realmente cada mes: siembra directa y plantel a comprar */
const MES_ACCIONES = {
  1:  { directa: 'Guisante y haba según variedad y temperatura. Últimos dientes de ajo.', plantel: 'Cebolla o cebolleta si aún te falta. Últimos árboles caducos del vivero.' },
  2:  { directa: 'Zanahoria, rábano, guisante según temperatura y patata de siembra a final de mes.', plantel: 'Nada de verano todavía. Si quieres hacer tus propios semilleros: tomate, pimiento y berenjena bajo protección.' },
  3:  { directa: 'Zanahoria, rábano, perejil y cilantro mientras no apriete el calor.', plantel: 'Aromáticas perennes y cítricos. Solo si el tiempo acompaña a final de mes, las primeras tomateras. Semilleros opcionales de calabacín, pepino, melón, sandía, calabaza y albahaca.' },
  4:  { directa: 'Judía y maíz. Y, si quieres probar la vía de la semilla, calabacín y pepino.', plantel: 'El mes clave: tomate, pimiento, berenjena, calabacín, pepino y albahaca.' },
  5:  { directa: 'Judía, maíz y las cucurbitáceas que quieras probar desde semilla.', plantel: 'Pimiento, berenjena, pepino, calabacín si aún no lo pusiste, melón, sandía, calabaza y albahaca.' },
  6:  { directa: 'Segundas tandas de judía; maíz hasta mediados de mes.', plantel: 'Nada nuevo: ya hace demasiado calor para trasplantar.' },
  7:  { directa: 'Judía, en tandas pequeñas y escalonadas, si te apetece.', plantel: 'Nada. Tu trabajo es regar, entutorar, vigilar plagas y cosechar.' },
  8:  { directa: 'Segunda tanda de judía y, con cuidado, calabacín.', plantel: 'Nada. Es mes de montar riego y comprar material.' },
  9:  { directa: 'Rábano, zanahoria cuando afloje el calor, cilantro cuando refresque y perejil si lo haces desde semilla.', plantel: 'Fresas hacia finales de mes, romero, tomillo, lavanda y perejil si quieres la vía fácil.' },
  10: { directa: 'Dientes de ajo, guisante, haba si las quieres, rábano y zanahoria.', plantel: 'Cebolla o cebolleta, fresas y aromáticas perennes.' },
  11: { directa: 'Ajo, guisante, haba y zanahoria.', plantel: 'Cebolla adecuada a la temporada. Empieza la compra de frutales caducos en el vivero.' },
  12: { directa: 'Ajo, guisante y haba.', plantel: 'Cebolla de temporada y frutales caducos a raíz desnuda.' }
};

/* ---------------------------------------------------------
   19. FUENTES
   --------------------------------------------------------- */
const FUENTES = [
  { t: 'AEMET — Valores climatológicos normales, estación Tortosa (Roquetes), 9981A', u: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=cat&l=9981A' },
  { t: 'UC Agriculture and Natural Resources — Preparing: Beds, Containers, Soil, Irrigation', u: 'https://ucanr.edu/site/uc-marin-master-gardeners/preparing-beds-containers-soil-irrigation' },
  { t: 'Utah State University Extension — Raised Bed Gardening', u: 'https://extension.usu.edu/yardandgarden/research/raised-bed-gardening' },
  { t: 'University of Minnesota Extension — Raised bed gardens', u: 'https://extension.umn.edu/gardening-minnesota/raised-bed-gardens' },
  { t: 'Utah State University Extension — DIY Guide to Backyard Drip Irrigation', u: 'https://extension.usu.edu/yardandgarden/research/the-do-it-yourself-guide-to-backyard-drip-irrigation' },
  { t: 'UC ANR — Tips for growing fruit trees that thrive in containers', u: 'https://ucanr.edu/media/288793' },
  { t: 'UC ANR — Container Gardening Basics', u: 'https://ucanr.edu/site/uc-master-gardeners-santa-clara-county/container-gardening-basics' },
  { t: 'UC ANR — Drainage in Containers', u: 'https://ucanr.edu/site/uc-master-gardeners-santa-clara-county/drainage-containers' },
  { t: 'University of Minnesota Extension — Planting and transplanting trees and shrubs', u: 'https://extension.umn.edu/how/planting-and-transplanting-trees-and-shrubs' },
  { t: 'Generalitat de Catalunya — El compostatge en agricultura ecològica', u: 'https://agricultura.gencat.cat/web/.content/03-agricultura/pae/publicacions-material-referencia/produccions-agricoles/adobat/FT20_CompostatgeAE.pdf' },
  { t: 'Ministerio de Agricultura, Pesca y Alimentación — Registro de Productos Fitosanitarios', u: 'https://www.mapa.gob.es/es/agricultura/temas/sanidad-vegetal/productos-fitosanitarios/registro-productos' },
  { t: 'University of Minnesota Extension — Small-scale hydroponics', u: 'https://extension.umn.edu/gardening-minnesota/small-scale-hydroponics' },
  { t: 'Reglamento (UE) 2018/848 sobre producción ecológica', u: 'https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018R0848' },
  { t: 'Generalitat de Catalunya — Guia pràctica d’horticultura ecològica. Diferencia expresamente época de siembra, de trasplante y de recolección, y advierte de que sus períodos están adaptados al litoral mediterráneo y deben desplazarse según el microclima real de cada lugar.' }
];
