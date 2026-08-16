#!/usr/bin/env python3
"""
Genera js/catalogo.js a partir del dataset maestro.

El JSON de datos/ es la fuente de verdad. Este script solo lo empaqueta como
fichero .js para que la web funcione también abriendo index.html directamente
(con file:// un fetch() de un .json local lo bloquea el navegador).

Uso:  python3 herramientas/construir-catalogo.py
"""
import json
import pathlib
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ORIGEN = RAIZ / 'datos' / 'Catalogo_maestro_cultivos_Tortosa_V3_exhaustivo.json'
DESTINO = RAIZ / 'js' / 'catalogo.js'


def validar(d):
    """Las comprobaciones que exige la propia especificación V3."""
    fallos = []
    crops = d['crops']

    if len(crops) != 114:
        fallos.append(f'esperaba 114 fichas, hay {len(crops)}')

    ids = [c['id'] for c in crops]
    if len(set(ids)) != len(ids):
        fallos.append('hay ids repetidos')

    for c in crops:
        if not c.get('establishment_methods'):
            fallos.append(f'{c["id"]}: sin establishment_methods')
        if not c.get('catalog_plantable_months'):
            fallos.append(f'{c["id"]}: sin catalog_plantable_months')
        for m in c.get('establishment_methods', []):
            if 'possible_date_ranges' not in m or 'optimal_date_ranges' not in m:
                fallos.append(f'{c["id"]}/{m.get("key")}: sin rangos de fecha')

    esperado = d['meta'].get('validation_counts_default_catalog', {})
    for mes, n in esperado.items():
        real = sum(1 for c in crops if int(mes) in c['catalog_plantable_months'])
        if real != n:
            fallos.append(f'mes {mes}: catálogo principal {real}, esperaba {n}')

    esperado2 = d['meta'].get('validation_counts_any_start', {})
    for mes, n in esperado2.items():
        real = sum(1 for c in crops if int(mes) in c['catalog_any_start_months'])
        if real != n:
            fallos.append(f'mes {mes}: cualquier método {real}, esperaba {n}')

    return fallos


def main():
    d = json.loads(ORIGEN.read_text(encoding='utf-8'))

    fallos = validar(d)
    if fallos:
        print('VALIDACIÓN FALLIDA:')
        for f in fallos:
            print('  ·', f)
        sys.exit(1)

    compacto = json.dumps(d, ensure_ascii=False, separators=(',', ':'))
    DESTINO.write_text(
        '/* GENERADO por herramientas/construir-catalogo.py — no editar a mano.\n'
        '   Fuente de verdad: datos/Catalogo_maestro_cultivos_Tortosa_V3_exhaustivo.json\n'
        f'   Versión del dataset: {d["meta"]["version"]} · {len(d["crops"])} fichas */\n'
        'window.CATALOGO = ' + compacto + ';\n',
        encoding='utf-8')

    print(f'OK · {len(d["crops"])} fichas · {DESTINO.stat().st_size / 1024:.0f} KB → {DESTINO.relative_to(RAIZ)}')


if __name__ == '__main__':
    main()
