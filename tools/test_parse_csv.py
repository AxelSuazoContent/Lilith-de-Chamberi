import csv
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
CSV_PATH = BASE / 'sheets-template' / 'productoslilit.csv'
JS_PATH = BASE / 'products.js'

def parse_csv(path):
    rows = []
    with open(path, encoding='utf-8') as f:
        r = csv.reader(f)
        for row in r:
            rows.append(row)
    return rows


def csv_rows_to_products(rows):
    if not rows:
        return []
    headers = [h.strip().lower() for h in rows[0]]
    def idx(name):
        try:
            return headers.index(name)
        except ValueError:
            return -1
    def get(row, name):
        i = idx(name)
        return '' if i==-1 else (row[i] or '').strip()
    out = []
    for r in rows[1:]:
        nombre = get(r, 'nombre')
        precio = get(r, 'precio')
        if not nombre or not precio:
            continue
        producto = {
            'id': int(get(r,'id')) if get(r,'id').isdigit() else None,
            'name': nombre,
            'cat': get(r,'categoria'),
            'price': float(precio) if precio else None,
            'photo': get(r,'imagen') or None,
            'colors_raw': get(r,'colores') or None
        }
        # parse colors
        cols = producto['colors_raw']
        if cols:
            colors = []
            for chunk in cols.split(';'):
                chunk = chunk.strip()
                if not chunk: continue
                parts = chunk.split(':')
                name = parts[0].strip() if parts else ''
                hexc = parts[1].strip() if len(parts)>1 else None
                photos_raw = ':'.join(parts[2:]) if len(parts)>2 else ''
                photos = [p.strip() for p in photos_raw.split('|') if p.strip()]
                colors.append({'name':name,'hex':hexc,'photos':photos})
            producto['colors'] = colors
        out.append(producto)
    return out


def inspect_products_js(path):
    text = path.read_text(encoding='utf-8')
    entries = []
    # very simple heuristic: find "photo:" occurrences
    for i,line in enumerate(text.splitlines()):
        if 'photo:' in line:
            entries.append((i+1,line.strip()))
    return entries


def main():
    print('CSV path:', CSV_PATH)
    rows = parse_csv(CSV_PATH)
    print('Rows read:', len(rows))
    prods = csv_rows_to_products(rows)
    print('Products parsed from CSV:', len(prods))
    for p in prods:
        print('- id:',p['id'],'name:',p['name'])
        print('  photo:', p['photo'])
        if p.get('colors'):
            for c in p['colors']:
                print('   color:',c['name'],'photos:',c['photos'])
    print('\nInspecting products.js for `photo:` fields...')
    js_ph = inspect_products_js(JS_PATH)
    print('Found',len(js_ph),'lines with "photo:" in products.js')
    for ln,txt in js_ph[:10]:
        print(' L'+str(ln)+':',txt)

if __name__=='__main__':
    main()
