# Mi Huerto en Maceta — web

Web estática (HTML + CSS + JavaScript, sin dependencias) que reúne el diseño
*Mi Huerto en Maceta v2* y todo el contenido de
`Plan_definitivo_huerto_frutales_Tortosa_2026.md`.

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
| 03 | Catálogo | 31 fichas de planta filtrables, con ficha lateral completa |
| 04 | Calendario | Los 12 meses: qué se planta, qué se cosecha y cuál es tu tarea |
| 05 | Riego | Frecuencias por estación, esquema de goteo, goteros y calculadoras |
| 06 | Cuidados | Abonado, plagas, poda, vivero, vacaciones, mudanza, rutinas y tablas |
| 07 | Errores | Los 20 errores que matan el huerto, con su solución |
| 08 | Diagnóstico | Síntoma → causa probable → qué hacer |
| 09 | Plan 26-27 | Cronograma de agosto 2026 a diciembre 2027, presupuesto, hidroponía |
| 10 | Compra | Lista de compra con casillas que se guardan en el navegador |
| 11 | Qué planto hoy | Elige un mes y salen las plantas y la acción concreta |
| 12 | Fuentes | AEMET, extensiones universitarias, Gencat, MAPA, Reglamento UE |

## Cosas que hace la web

- **Catálogo filtrable** por grupo y ordenable por dificultad.
- **Ficha lateral** de cada planta con avisos, trucos y meses de plantación.
- **Calculadora de riego**: nº de goteros × caudal × minutos → litros reales.
- **Calculadora de sustrato**: medidas del bancal → m³ y litros a comprar.
- **Lista de compra persistente**: las casillas marcadas se guardan en
  `localStorage`, con barra de progreso y botón de reinicio.
- **Glosario emergente**: los términos subrayados abren su definición abajo.
- Barra de progreso de lectura, navegación activa, menú móvil y animaciones de
  entrada que respetan `prefers-reduced-motion`.
