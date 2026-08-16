# Mi Huerto en Maceta — web

**→ [millonaris.github.io/huerto-en-maceta](https://millonaris.github.io/huerto-en-maceta/)**

Web estática (HTML + CSS + JavaScript, sin dependencias) sobre el diseño
*Mi Huerto en Maceta v2*.

**El calendario sale de un único sitio:**
`datos/Catalogo_maestro_cultivos_Tortosa_V3_exhaustivo.json` — 114 cultivos,
cada uno con sus métodos de establecimiento, ventana posible, ventana óptima,
meses de precaución y fuentes. Es la fuente de verdad; el resto del contenido
(reglas, terreno, riego, cuidados, plan 2026-27) viene de los `.md` del plan.

Para regenerar el catálogo tras editar el JSON:

```bash
python3 herramientas/construir-catalogo.py
```

El script valida las 114 fichas y los 24 contadores mensuales antes de escribir
`js/catalogo.js`; si algo no cuadra, falla y no genera nada.

## Cómo verla

Doble clic en `index.html` y se abre en el navegador. Funciona tal cual, sin
servidor ni instalación.

Si prefieres verla servida (recomendado si en algún momento añades imágenes o
fuentes locales):

```bash
node servidor.js
```

Y abre <http://localhost:4321>.

## Estructura

```
index.html              Estructura y textos fijos de las 13 secciones
css/estilos.css         Sistema de diseño completo (tokens, componentes, responsive)
datos/                  Dataset maestro V3 en JSON — fuente de verdad del calendario
herramientas/           Script que valida el JSON y genera js/catalogo.js
js/catalogo.js          Dataset generado (no editar a mano)
js/datos.js             Contenido no-calendario y trucos escritos a mano
js/app.js               Renderizado e interacción
servidor.js             Servidor local mínimo, opcional
diseno-original/        El diseño descargado de claude.ai, como referencia
```

Para cambiar contenido no hace falta tocar HTML. Las **fechas y los cultivos**
se editan en el JSON de `datos/` y se regeneran con el script; todo lo demás
(reglas, zonas, errores, cronograma, lista de compra, trucos) está en
`js/datos.js`.

## Secciones

| # | Sección | Qué contiene |
|---|---|---|
| 01 | Reglas | Las 8 reglas del principiante, con el porqué de cada una |
| 02 | Terreno | Clima de Tortosa, las 5 zonas, bancales, sustratos, macetas, tutores |
| 03 | Catálogo | 114 fichas filtrables por categoría, mes y texto, con buscador |
| 04 | Semilla o plantel | Las 3 formas de empezar, el vocabulario y la tabla maestra de 114 |
| 05 | Calendario | Los 12 meses: lo mejor que plantar, qué se cosecha y tu tarea |
| 06 | Riego | Frecuencias por estación, esquema de goteo, goteros y calculadoras |
| 07 | Cuidados | Abonado, plagas, poda, vivero, vacaciones, mudanza, rutinas y tablas |
| 08 | Errores | Los 20 errores que matan el huerto, con su solución |
| 09 | Diagnóstico | Síntoma → causa probable → qué hacer |
| 10 | Plan 26-27 | Cronograma de agosto 2026 a diciembre 2027, presupuesto, hidroponía |
| 11 | Compra | Lista de compra con casillas que se guardan en el navegador |
| 12 | Qué planto hoy | Elige un mes y salen las plantas y la acción concreta |
| 13 | Fuentes | AEMET, extensiones universitarias, Gencat, MAPA, Reglamento UE |

## Cosas que hace la web

- **Catálogo de 114 cultivos** filtrable por categoría, por mes y por texto (se
  combinan), y ordenable por dificultad. Cada chip de mes lleva su recuento.
- **Dos modos**: «puedo plantarlo ya» (el método práctico) e «incluir
  semilleros», que es el que amplía marzo de 90 a 103 cultivos.
- **Ficha lateral** con un bloque por método de establecimiento: ventana
  posible, ventana óptima, meses de precaución, nota y fuentes enlazadas.
- **Calculadora de riego**: nº de goteros × caudal × minutos → litros reales.
- **Calculadora de sustrato**: medidas del bancal → m³ y litros a comprar.
- **Lista de compra persistente**: las casillas marcadas se guardan en
  `localStorage`, con barra de progreso y botón de reinicio.
- **Glosario emergente**: los términos subrayados abren su definición abajo.
- Barra de progreso de lectura, navegación activa, menú móvil y animaciones de
  entrada que respetan `prefers-reduced-motion`.

## Nota sobre el móvil

Por debajo de 760 px las tablas dejan de ser tablas: cada fila se convierte en
una tarjeta y cada dato lleva encima el nombre de su columna, tomado del
atributo `data-etiqueta` que añade `pintarTabla()` en `js/app.js`. Así no hay
que arrastrar nada de lado. Si añades una tabla nueva, pásale las cabeceras a
`pintarTabla()` o pon tú el `data-etiqueta` en cada `<td>`.

Por debajo de 400 px el calendario pasa a 4 columnas, los campos de las
calculadoras a una sola y los botones ocupan todo el ancho.
