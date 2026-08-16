# Mi Huerto en Maceta — web

**→ [millonaris.github.io/huerto-en-maceta](https://millonaris.github.io/huerto-en-maceta/)**

Web estática (HTML + CSS + JavaScript, sin dependencias) que reúne el diseño
*Mi Huerto en Maceta v2* y todo el contenido de
`Plan_definitivo_huerto_frutales_Tortosa_2026.md` y
`Calendario_semilla_vs_plantel_Tortosa_2026_2027.md`.

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
js/datos.js             Todo el contenido: plantas, calendario, errores, cronograma…
js/app.js               Renderizado e interacción
servidor.js             Servidor local mínimo, opcional
diseno-original/        El diseño descargado de claude.ai, como referencia
```

Para cambiar contenido no hace falta tocar HTML: casi todo sale de `js/datos.js`.
Por ejemplo, para añadir una planta basta con copiar un objeto del array
`PLANTAS` y ajustar sus campos. El array `meses` son los números de mes en los
que se planta (1 = enero) y alimenta a la vez la barra de doce casillas de la
tarjeta y el buscador «¿Qué puedo plantar hoy?».

## Secciones

| # | Sección | Qué contiene |
|---|---|---|
| 01 | Reglas | Las 8 reglas del principiante, con el porqué de cada una |
| 02 | Terreno | Clima de Tortosa, las 5 zonas, bancales, sustratos, macetas, tutores |
| 03 | Catálogo | 31 fichas de planta filtrables por grupo y por mes de plantación |
| 04 | Semilla o plantel | Las 3 formas de empezar, el vocabulario y la tabla maestra |
| 05 | Calendario | Los 12 meses: qué se planta y cosecha, tu tarea, siembra directa y plantel |
| 06 | Riego | Frecuencias por estación, esquema de goteo, goteros y calculadoras |
| 07 | Cuidados | Abonado, plagas, poda, vivero, vacaciones, mudanza, rutinas y tablas |
| 08 | Errores | Los 20 errores que matan el huerto, con su solución |
| 09 | Diagnóstico | Síntoma → causa probable → qué hacer |
| 10 | Plan 26-27 | Cronograma de agosto 2026 a diciembre 2027, presupuesto, hidroponía |
| 11 | Compra | Lista de compra con casillas que se guardan en el navegador |
| 12 | Qué planto hoy | Elige un mes y salen las plantas y la acción concreta |
| 13 | Fuentes | AEMET, extensiones universitarias, Gencat, MAPA, Reglamento UE |

## Cosas que hace la web

- **Catálogo filtrable** por grupo y por mes de plantación (se combinan), y
  ordenable por dificultad. Cada chip de mes lleva su recuento de plantas.
- **Ficha lateral** de cada planta con avisos, trucos, meses de plantación y
  cómo se empieza: planta de vivero, plantel, semilla directa o diente.
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
