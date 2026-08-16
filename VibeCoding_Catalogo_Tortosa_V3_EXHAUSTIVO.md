# VIBE CODING — CATÁLOGO TORTOSA V3 EXHAUSTIVO

## INSTRUCCIÓN PRINCIPAL

**Sustituye por completo el dataset/calendario anterior por `Catalogo_maestro_cultivos_Tortosa_V3_exhaustivo.json`. No mezcles las fechas antiguas con las nuevas.**

Este V3 revisa **las 114 fichas**, no solo el tomate. Cada cultivo tiene una o varias formas reales de empezar y cada forma tiene por separado:

- ventana **POSIBLE**;
- ventana **ÓPTIMA / RECOMENDADA**;
- meses posibles pero de **PRECAUCIÓN**;
- método: semillero, siembra directa, plantel, material vegetativo, planta/árbol de vivero o raíz desnuda;
- nota específica de interpretación;
- fuentes técnicas asociadas.

---

## 1. EL CATÁLOGO DEBE RESPONDER A «¿QUÉ PUEDO PLANTAR AHORA?»

El filtro mensual principal **NO debe usar `semillero`** para decidir qué tarjeta aparece. Debe usar `catalog_plantable_months`, que corresponde al método recomendado para poner ese cultivo en marcha de la forma práctica para el usuario.

Ejemplos:

- Tomate: el catálogo principal lo muestra **marzo-agosto** porque ese es el margen de `COMPRAR / TRASPLANTAR PLANTEL`.
- Zanahoria: usa `SIEMBRA DIRECTA`, porque no tiene sentido trasplantarla.
- Ajo: usa `DIENTE`.
- Patata: usa `TUBÉRCULO`.
- Fresa: usa `PLANTA DE VIVERO`.
- Frutal: usa `ÁRBOL/PLANTA DE VIVERO`; si admite raíz desnuda, esa opción aparece además dentro de la ficha.

Añadir opcionalmente un segundo modo/toggle: **«Todo lo que puedo empezar este mes»**, basado en `catalog_any_start_months`. Ese sí incluye semilleros.

---

## 2. LA FICHA DE CADA CULTIVO DEBE MOSTRAR TODOS LOS MÉTODOS

Al abrir una ficha, recorrer `establishment_methods` y mostrar una tarjeta/bloque por método. Formato visual recomendado:

> **COMPRAR / TRASPLANTAR PLANTEL**  ← recomendado
>
> Posible: marzo–agosto
> **Mejor:** abril–junio
> ⚠️ Con precaución: marzo, julio, agosto
> Nota específica...

> **DESDE SEMILLA · SEMILLERO**
>
> Posible: febrero–marzo
> **Mejor:** febrero–marzo

No convertir nunca ambas cosas en una frase genérica del tipo «Plantar: febrero-agosto».

---

## 3. FECHAS «DEL DÍA X AL DÍA Y»

Cada método lleva `possible_date_ranges` y `optimal_date_ranges` con `MM-DD`, `from_text` y `to_text`. La interfaz puede renderizar por ejemplo **«1 de marzo – 31 de agosto»**. Estas fechas son ventanas orientativas; no deben presentarse como una garantía meteorológica diaria.

Mostrar siempre cerca del calendario: **«La temperatura real, la variedad y tu microclima mandan; las fechas son ventanas orientativas para Tortosa.»**

---

## 4. EJEMPLO CANÓNICO — TOMATE

### DESDE SEMILLA · SEMILLERO

- Posible: **febrero–marzo**
- Mejor: **febrero–marzo**
- Precaución: **—**
- Nota: Semillero protegido. No confundir con plantación definitiva.

### COMPRAR / TRASPLANTAR PLANTEL

- Posible: **marzo–agosto**
- Mejor: **abril–junio**
- Precaución: **marzo y julio–agosto**
- Nota: Marzo: solo con noches suaves/protección. Abril-junio: principal. Julio-agosto: tardío en exterior de Tortosa; usar plantel sano y variedad precoz/cherry y asumir menos margen antes del otoño.

En el catálogo principal, Tomate aparece en: **marzo–agosto**.

---

## 5. REGLAS DE COLOR / ESTADO

- Verde: el mes está en `optimal_months`.
- Ámbar: el mes está en `possible_months` pero no en `optimal_months`.
- Gris: fuera de la ventana.
- Nunca eliminar un cultivo por ser `condicional` o `poco_recomendado`; mostrar la advertencia de `tortosa_fit` y `notes`.

---

## 6. FRUTALES: DOS MÉTODOS CUANDO CORRESPONDA

Los frutales caducifolios pueden mostrar **planta/árbol en contenedor** y **raíz desnuda** como opciones distintas. Los cítricos y aguacate se mantienen como árbol en contenedor, con su propia ventana. No mostrar «semilla» como método recomendado de un frutal de producción.

---

## 7. VALIDACIÓN AUTOMÁTICA

- Deben existir exactamente **114 fichas**.
- Todas deben tener `establishment_methods` no vacío.
- Todas deben tener `catalog_plantable_months` no vacío.
- Cada método debe tener `possible_date_ranges` y `optimal_date_ranges`.
- El filtro principal usa `catalog_plantable_months`; el secundario usa `catalog_any_start_months`.

### Contadores esperados del catálogo principal

| Mes | Fichas |
|---|---:|
| Enero | 77 |
| Febrero | 85 |
| Marzo | 90 |
| Abril | 95 |
| Mayo | 79 |
| Junio | 57 |
| Julio | 50 |
| Agosto | 49 |
| Septiembre | 84 |
| Octubre | 85 |
| Noviembre | 86 |
| Diciembre | 77 |

### Contadores esperados incluyendo cualquier método (semilleros incluidos)

| Mes | Fichas |
|---|---:|
| Enero | 80 |
| Febrero | 93 |
| Marzo | 103 |
| Abril | 95 |
| Mayo | 79 |
| Junio | 58 |
| Julio | 58 |
| Agosto | 55 |
| Septiembre | 84 |
| Octubre | 85 |
| Noviembre | 86 |
| Diciembre | 77 |

---

## 8. FUENTES UTILIZADAS Y CRITERIO

La base principal para hortalizas es el calendario de la Generalitat de Catalunya, que separa explícitamente **siembra, trasplante y recolección** y dice que sus periodos están adaptados aproximadamente al **litoral mediterráneo** y deben desplazarse según microclima. Se ha contrastado con extensión universitaria de climas mediterráneos/cálidos para ampliar ventanas posibles sin convertirlas automáticamente en ventanas óptimas.

### `CAT_HORT` — Generalitat de Catalunya — Guia pràctica d’horticultura ecològica (calendari de sembra, trasplantament i recol·lecció)

Base principal para hortalizas y varias aromáticas. El propio calendario indica que está adaptado aproximadamente al litoral mediterráneo y que debe ajustarse al microclima.

https://agricultura.gencat.cat/web/.content/03-agricultura/pae/publicacions-material-referencia/material-educatiu/guia_hort_escolar.pdf

### `CAT_SEEDLING` — RuralCat / Generalitat — Manual de producció ecològica de llavors i planter d’hortícoles

Diferenciación técnica entre semilla, semillero y plantel.

https://ruralcat.gencat.cat/documents/20181/6698135/2012_Manual-de-llavors-i-planter-de-cultius-horticoles_LEra.pdf/8816c8ec-7bf6-40c7-af47-73bb127fdb4e

### `JUNTA_MACETOHUERTO` — Junta de Andalucía — Calendario para macetohuertos

Contraste independiente que separa siembra directa, semillero, trasplante y cosecha para numerosas hortalizas en clima mediterráneo cálido.

https://www.juntadeandalucia.es/export/drupaljda/Calendario%20para%20macetohuertos.pdf

### `UC_TIME_PLANTING` — University of California ANR — Time of planting

Criterio térmico para cultivos de estación fresca/cálida y advertencia de que plantar demasiado pronto o tarde reduce la productividad.

https://ucanr.edu/program/uc-master-gardener-program/time-planting

### `UC_INTERIOR_VEG` — University of California ANR — Vegetable Planting Guide for Interior Regions

Contraste de clima interior cálido para patata, boniato, cultivos de verano y métodos de establecimiento.

https://ucanr.edu/?legacy-file=131284.pdf&legacy-file-path=sites%2Fccmg%2Ffiles%2F

### `UC_SANTA_CLARA_VEG` — University of California ANR — Santa Clara County Vegetables

Contraste para clima mediterráneo cálido: cultivos de estación cálida abril-septiembre y fresca septiembre-abril.

https://ucanr.edu/site/uc-master-gardeners-santa-clara-county/vegetables

### `UC_LA_VEG` — University of California ANR — Spring & Summer Gardening Basics for Los Angeles County

Contraste de ventanas de siembra/trasplante en clima mediterráneo cálido y límites por calor.

https://ucanr.edu/media/237587

### `AZ_TUCSON_HERBS` — University of Arizona Cooperative Extension — Growing Herbs in Tucson

Calendario de aromáticas en clima cálido: anuales de estación fresca/cálida y perennes.

https://extension.arizona.edu/publication/growing-herbs-tucson

### `UC_HERBS` — University of California ANR — Herbs / Herb Gardening

Métodos de establecimiento y estacionalidad de aromáticas.

https://ucanr.edu/site/uc-master-gardeners-santa-clara-county/herbs

### `UC_HERB_KITCHEN` — University of California ANR — Herbs for a Kitchen Garden

Época de plantación y método (semilla/plantel) para aromáticas culinarias.

https://ucanr.edu/site/uc-master-gardeners-san-luis-obispo-county/herbs-kitchen-garden

### `ANDALUSIA_WARM_PROTECTED` — Junta de Andalucía — Bimestral de cultivos hortícolas protegidos

Solo como contraste de viabilidad de ciclos/trasplantes tardíos en climas cálidos protegidos. NO se copia como ventana óptima de exterior en Tortosa.

https://www.juntadeandalucia.es/export/drupaljda/bimestral_212.pdf

### `UC_BACKYARD_ORCHARD` — University of California Cooperative Extension — The Backyard Orchard, Fruit Cultivation Guide

Frutales: bajo frío, raíz desnuda, contenedor y época de plantación; cítricos en primavera.

https://ucanr.edu/media/234923

### `UC_TREE_TIMING` — University of California ANR — Fruit Tree Time

Caducifolios a raíz desnuda en dormancia; cítricos y aguacate preferentemente en primavera.

https://ucanr.edu/blog/ucce-master-gardeners-san-bernardino-county-blogs/article/coordinators-corner-fruit-tree-time

### `UC_CITRUS_ANYTIME` — UC IPM — Cultural Tips for Growing Citrus

Los cítricos en contenedor pueden plantarse casi en cualquier época; la mejor ventana es después de la última helada de primavera.

https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-citrus/

### `UC_PASSIONFRUIT` — University of California Cooperative Extension Ventura — Passion Fruit

Maracuyá: sensibilidad a heladas y calor seco; rango térmico favorable y necesidad de ubicación protegida.

https://ucanr.edu/county/cooperative-extension-ventura-county/passion-fruit

### `UC_KIWI` — University of California ANR — Growing Temperate Tree Fruit and Nut Crops: Kiwi

Kiwi: existen variedades de bajo frío (50–250 h) y normalmente necesita macho y hembra para fructificar.

https://ucanr.edu/sites/default/files/2025-03/plant_Kiwi.pdf

### `UC_FRUIT_ALTERNATIVES` — University of California ANR — Fruit Trees: What to Plant

Higuera, azufaifo, níspero, caqui y granado en clima mediterráneo cálido; adaptación y cultivo en contenedor cuando procede.

https://ucanr.edu/site/alternatives-citrus-fight-against-acp/hlb/fruit-trees-what-plant

### `UC_STRAWBERRY` — UC IPM — Cultural Tips for Growing Strawberry / Time to Plant

Fresa: plantación de final de verano/otoño y febrero-marzo según tipo.

https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-strawberry/

### `UC_CANEBERRY` — UC IPM — Cultural Tips for Growing Blackberry and Raspberry

Mora y frambuesa: establecimiento invernal/final de invierno; sensibilidad al calor.

https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-blackberry-and-raspberry/

### `UC_BLUEBERRY` — University of California ANR — Blueberries / low chill Southern Highbush

Arándanos de bajo frío y adaptación a inviernos suaves.

https://ucanr.edu/site/uc-master-gardeners-san-luis-obispo-county/blueberries

### `UC_BLUEBERRY_PLANT` — University of California ANR — Backyard Superfood: Growing Blueberries

Plantación de arándanos de otoño a principio de primavera.

https://ucanr.edu/blog/uc-master-gardeners-san-mateo-san-francisco-counties/article/backyard-superfood-secrets

### `UC_AVOCADO` — UC IPM — Cultural Tips for Growing Avocado

Aguacate en contenedor: óptimo después de la última helada en primavera, antes del calor intenso.

https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-avocado/

### `UC_PISTACHIO` — University of California ANR — Pistachio Calendar of Operations

Pistacho: elevada necesidad de frío (~850 h bajo 7,2 °C en la referencia), por lo que se marca condicional en Tortosa.

https://ucanr.edu/sites/default/files/2010-06/18997.pdf

### `UC_BERRIES_GENERAL` — University of California ANR — Fruits & Nuts Tips: Planting Berries

Pequeños frutos: raíz desnuda otoño-inicio de primavera; planta en maceta posible más ampliamente evitando estrés.

https://ucanr.edu/site/uc-master-gardeners-santa-clara-county/fruits-nuts-tips

### `UC_GENERAL_TREE_FALL` — University of Arizona Cooperative Extension — Fall planting of trees and shrubs

Principio general: otoño y primavera son preferibles a verano para trasplantar leñosas en clima cálido.

https://extension.arizona.edu/sites/extension.arizona.edu/files/attachment/september-2018.pdf

### `UC_AVOCADO_MONTHS` — University of California ANR — How To Plant an Avocado Tree

Referencia específica: marzo-junio como ventana ideal en clima cálido; verano aumenta riesgo de daño.

https://ucanr.edu/site/uc-master-gardeners-orange-county/article/how-plant-avocado-tree

### `UC_LOW_CHILL` — University of California ANR — Fruit & Nut varieties / low chill guidance

Necesidades de frío y elección varietal para frutales de hueso/pepita y almendro.

https://ucanr.edu/media/249583

---

## 9. IMPORTANTE PARA LAS FECHAS TARDÍAS

Que una fecha figure como **POSIBLE** no significa que sea igual de recomendable que la ventana verde. Por ejemplo, un tomate trasplantado en agosto puede establecerse en Tortosa, pero tiene menos margen de cosecha y mayor estrés térmico que uno de abril-mayo. La app debe comunicar esta diferencia visualmente.

Las referencias andaluzas de cultivos protegidos solo se han usado para confirmar que determinados ciclos tardíos existen en climas cálidos. **No se copian como calendario óptimo de exterior de Tortosa.**

---

## 10. DATASET

El JSON separado `Catalogo_maestro_cultivos_Tortosa_V3_exhaustivo.json` es la **fuente de verdad**. No intentes reconstruirlo desde este texto; impórtalo directamente.

### Resumen de las 114 fichas

| Cultivo | Método principal | Puede aparecer en catálogo | Mejor | Adaptación |
|---|---|---|---|---|
| Tomate | COMPRAR / TRASPLANTAR PLANTEL | marzo–agosto | abril–junio | excelente |
| Pimiento dulce | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Guindilla / chile | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Berenjena | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Calabacín | COMPRAR / TRASPLANTAR PLANTEL | abril–septiembre | abril–junio y agosto | excelente |
| Pepino | COMPRAR / TRASPLANTAR PLANTEL | abril–agosto | abril–junio | excelente |
| Calabaza | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Melón | COMPRAR / TRASPLANTAR PLANTEL | abril–junio | abril–mayo | excelente |
| Sandía | COMPRAR / TRASPLANTAR PLANTEL | abril–junio | abril–mayo | excelente |
| Maíz dulce | DESDE SEMILLA · SIEMBRA DIRECTA | abril–julio | abril–junio | excelente |
| Okra / quimbombó | DESDE SEMILLA · SIEMBRA DIRECTA | abril–julio | mayo–junio | bueno |
| Girasol para pipas | DESDE SEMILLA · SIEMBRA DIRECTA | marzo–julio | abril–junio | excelente |
| Judía verde | DESDE SEMILLA · SIEMBRA DIRECTA | abril–septiembre | abril–junio y agosto | excelente |
| Judía para grano seco | DESDE SEMILLA · SIEMBRA DIRECTA | abril–julio | abril–junio | excelente |
| Guisante | DESDE SEMILLA · SIEMBRA DIRECTA | octubre–marzo | octubre–febrero | excelente |
| Haba | DESDE SEMILLA · SIEMBRA DIRECTA | octubre–febrero | octubre–enero | excelente |
| Garbanzo | DESDE SEMILLA · SIEMBRA DIRECTA | febrero–abril | febrero–abril | bueno |
| Lenteja | DESDE SEMILLA · SIEMBRA DIRECTA | noviembre–febrero | noviembre–febrero | bueno |
| Edamame / soja verde | DESDE SEMILLA · SIEMBRA DIRECTA | abril–julio | mayo–junio | bueno |
| Lechuga | COMPRAR / TRASPLANTAR PLANTEL | septiembre–junio | octubre–abril | excelente |
| Escarola | COMPRAR / TRASPLANTAR PLANTEL | febrero–marzo y agosto–noviembre | febrero–marzo y septiembre–octubre | excelente |
| Acelga | COMPRAR / TRASPLANTAR PLANTEL | febrero–junio y agosto–noviembre | marzo–mayo y septiembre–octubre | excelente |
| Espinaca | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | octubre–marzo | excelente |
| Rúcula | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–mayo | octubre–abril | excelente |
| Canónigos | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–marzo | octubre–febrero | excelente |
| Col rizada / kale | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | excelente |
| Brócoli | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | excelente |
| Coliflor | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | bueno |
| Col / repollo | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | excelente |
| Col lombarda | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | excelente |
| Coles de Bruselas | COMPRAR / TRASPLANTAR PLANTEL | julio–octubre | agosto–septiembre | condicional |
| Pak choi / bok choy | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | febrero–marzo y octubre–noviembre | excelente |
| Colinabo | COMPRAR / TRASPLANTAR PLANTEL | agosto–marzo | febrero–marzo y septiembre–noviembre | bueno |
| Zanahoria | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–mayo | febrero–abril y septiembre–noviembre | excelente |
| Rábano | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–mayo | octubre–abril | excelente |
| Remolacha | DESDE SEMILLA · SIEMBRA DIRECTA | agosto–mayo | febrero–abril y septiembre–noviembre | excelente |
| Nabo | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | octubre–marzo | excelente |
| Chirivía | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–marzo | octubre–febrero | bueno |
| Ajo | BULBO / TUBÉRCULO / DIENTE / GARRA | octubre–febrero | noviembre–enero | excelente |
| Cebolla | COMPRAR / TRASPLANTAR PLANTEL | septiembre–mayo | octubre–abril | excelente |
| Cebolleta | COMPRAR / TRASPLANTAR PLANTEL | septiembre–mayo | octubre–abril | excelente |
| Chalota | BULBO / TUBÉRCULO / DIENTE / GARRA | octubre–marzo | febrero–marzo y octubre–noviembre | excelente |
| Puerro | COMPRAR / TRASPLANTAR PLANTEL | marzo–noviembre | abril–junio y septiembre–octubre | excelente |
| Apio | COMPRAR / TRASPLANTAR PLANTEL | marzo–mayo y septiembre–noviembre | abril–mayo y septiembre–octubre | bueno |
| Hinojo de bulbo | COMPRAR / TRASPLANTAR PLANTEL | septiembre–abril | febrero–marzo y septiembre–noviembre | excelente |
| Patata | BULBO / TUBÉRCULO / DIENTE / GARRA | febrero–abril y agosto–septiembre | febrero–marzo y agosto–septiembre | excelente |
| Boniato / batata | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | mayo–junio | excelente |
| Espárrago | BULBO / TUBÉRCULO / DIENTE / GARRA | diciembre–marzo | enero–marzo | bueno |
| Alcachofa | COMPRAR / TRASPLANTAR PLANTEL | febrero–abril y agosto–noviembre | febrero–marzo y septiembre–octubre | excelente |
| Albahaca | COMPRAR / TRASPLANTAR PLANTEL | abril–agosto | mayo–junio | excelente |
| Perejil | COMPRAR / TRASPLANTAR PLANTEL | septiembre–mayo | febrero–abril y octubre–noviembre | excelente |
| Cilantro | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | octubre–marzo | excelente |
| Cebollino | COMPRAR / PLANTAR DE VIVERO | septiembre–mayo | febrero–abril y octubre–noviembre | excelente |
| Romero | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Tomillo | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Orégano | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Mejorana | COMPRAR / TRASPLANTAR PLANTEL | marzo–mayo y septiembre–noviembre | marzo–abril y octubre | excelente |
| Salvia | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Lavanda | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Menta | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Hierbabuena | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Melisa / toronjil | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Eneldo | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | febrero–marzo y octubre–noviembre | excelente |
| Estragón | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | bueno |
| Ajedrea | COMPRAR / TRASPLANTAR PLANTEL | marzo–mayo y septiembre–noviembre | marzo–abril y septiembre–octubre | excelente |
| Hierba luisa | PLANTA / ÁRBOL DE VIVERO | marzo–junio y septiembre–octubre | abril–mayo y septiembre | excelente |
| Laurel | PLANTA / ÁRBOL DE VIVERO | septiembre–mayo | marzo–abril y octubre–noviembre | excelente |
| Manzanilla | DESDE SEMILLA · SIEMBRA DIRECTA | febrero–abril y septiembre–noviembre | febrero–marzo y octubre–noviembre | excelente |
| Caléndula | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | octubre–marzo | excelente |
| Capuchina | DESDE SEMILLA · SIEMBRA DIRECTA | febrero–mayo y septiembre–noviembre | marzo–abril y octubre–noviembre | excelente |
| Tagete / clavel de moro | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Borraja | DESDE SEMILLA · SIEMBRA DIRECTA | septiembre–abril | octubre–marzo | excelente |
| Stevia | COMPRAR / TRASPLANTAR PLANTEL | abril–junio y septiembre | abril–junio | bueno |
| Hierba limón / lemongrass | COMPRAR / TRASPLANTAR PLANTEL | abril–julio y septiembre | mayo–junio | condicional |
| Fresa | PLANTA / ÁRBOL DE VIVERO | febrero–marzo y agosto–noviembre | febrero–marzo y agosto–octubre | excelente |
| Frambuesa remontante | PLANTA / ÁRBOL DE VIVERO | octubre–abril | noviembre–marzo | condicional |
| Mora sin espinas | PLANTA / ÁRBOL DE VIVERO | octubre–abril | noviembre–marzo | excelente |
| Arándano de bajo frío | PLANTA / ÁRBOL DE VIVERO | octubre–abril | noviembre–marzo | condicional |
| Grosella | PLANTA / ÁRBOL DE VIVERO | noviembre–marzo | diciembre–febrero | poco_recomendado |
| Grosella espinosa | PLANTA / ÁRBOL DE VIVERO | noviembre–marzo | diciembre–febrero | poco_recomendado |
| Physalis / uchuva | COMPRAR / TRASPLANTAR PLANTEL | abril–julio | abril–junio | excelente |
| Goji | PLANTA / ÁRBOL DE VIVERO | octubre–abril | noviembre–marzo | bueno |
| Maracuyá / pasiflora comestible | PLANTA / ÁRBOL DE VIVERO | abril–junio y septiembre | abril–mayo | condicional |
| Limonero | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | excelente |
| Mandarino | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | excelente |
| Clementino | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | excelente |
| Naranjo dulce | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | excelente |
| Kumquat | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | excelente |
| Pomelo | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | marzo–mayo y septiembre–octubre | bueno |
| Lima | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | abril–mayo y septiembre | condicional |
| Higuera | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Granado | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Olivo | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | febrero–abril y octubre–noviembre | excelente |
| Parra / uva de mesa | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Caqui | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Níspero japonés | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | febrero–abril y octubre–noviembre | excelente |
| Morera | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Azufaifo / jinjolero | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Feijoa / guayabo del Brasil | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | febrero–abril y octubre–noviembre | bueno |
| Ciruelo japonés de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Ciruelo europeo | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Albaricoquero de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | bueno |
| Melocotonero de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | bueno |
| Nectarina de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | bueno |
| Paraguayo de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | bueno |
| Almendro | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | excelente |
| Manzano de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Peral de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Membrillero | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | bueno |
| Cerezo de bajo frío | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Aguacate | PLANTA / ÁRBOL DE VIVERO | marzo–junio y septiembre | marzo–mayo | condicional |
| Kiwi | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Pistacho | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | noviembre–marzo | condicional |
| Algarrobo | PLANTA / ÁRBOL DE VIVERO | enero–diciembre | febrero–abril y octubre–noviembre | excelente |
