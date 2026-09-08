# Guía para editar tu catálogo de productos

## ¿Cómo agrego o edito productos?

Abre el archivo **products.js** con Bloc de Notas, VS Code o cualquier editor de texto.
Dentro verás el array "products" — cada bloque `{ ... }` es un producto.

### Campos de cada producto:
- **id**: número único (no repetir)
- **name**: nombre visible en la tienda
- **cat**: categoría (debe coincidir con las del sitio)
- **emoji**: solo se usa mientras el producto no tiene foto real — no reemplaza la foto
- **photo**: enlace a la foto real del producto — úsalo si tu producto NO tiene variantes de color
- **badge**: 'Nuevo', 'Oferta', 'Exclusivo' — o '' para ninguno
- **price**: precio numérico sin símbolo (ej: 500)
- **oldPrice**: precio original si está en oferta — opcional (omitir si no aplica)
- **sizes**: tallas o variantes reales — opcional. Si tu negocio no maneja tallas (tecnología, equipos, servicios, comida, etc.) omite este campo o usa ['Único']: el sitio detecta esto solo y no muestra el paso de talla al cliente
- **desc**: descripción corta visible en el catálogo
- **colors**: variantes de color con fotos — opcional, solo si tu producto sí viene en distintos colores (usa esto en vez de "photo")

### Ejemplo de producto sin variantes (ej. tecnología, equipos, servicios):
```js
{
  id: 5,
  name: 'Mi Nuevo Producto',
  cat: 'accesorios',
  emoji: '🎧',
  photo: 'https://enlace-a-tu-foto.jpg',
  badge: 'Nuevo',
  price: 350,
  desc: 'Descripción corta del producto.',
}
```

### Ejemplo de producto con variantes de color (ej. ropa, calzado):
```js
{
  id: 6,
  name: 'Otro Producto',
  cat: 'ropa',
  emoji: '👗',
  badge: '',
  price: 350,
  sizes: ['S', 'M', 'L'],
  desc: 'Descripción corta del producto.',
  colors: [{ name: 'Rojo', hex: '#e94560', photos: ['https://enlace-de-tu-foto.jpg'] }]
}
```

Después de editar: **guarda el archivo** y **recarga el navegador** para ver los cambios.

## ¿Cómo subir fotos?

1. Sube tu foto a **Google Drive** o **Imgur** (ambos gratuitos)
2. Copia el enlace directo a la imagen (debe terminar en .jpg, .png, etc.)
3. Si tu producto **no tiene variantes de color**, pégalo en el campo `photo`:
   ```js
   photo: 'https://enlace-de-tu-foto.jpg'
   ```
   Si tu producto **sí tiene variantes de color**, agrégalo dentro de `colors`:
   ```js
   colors: [{ name: 'Rojo', hex: '#e94560', photos: ['https://enlace-de-tu-foto.jpg'] }]
   ```

## ¿Cómo cambiar el número de WhatsApp?

Abre **index.html**, busca `WA_NUM` y reemplaza el número:
```js
const WA_NUM = '50499990000'; // ← pon aquí tu número con código de país
```

## Opción avanzada: editar tu catálogo desde Google Sheets (sin tocar código)

Si no quieres editar **products.js** cada vez, puedes manejar tus productos desde una hoja de cálculo de Google — ideal si quien va a mantener el catálogo al día no es la persona técnica. El sitio la lee automáticamente. Si no configuras esto, tu tienda sigue funcionando normal con los productos de products.js — es 100% opcional.

### Paso 1: Importa la plantilla ya lista
Ya te dejamos un archivo listo para esto: **sheets-template/productos.csv**. Ya trae las columnas correctas y productos de ejemplo con las categorías reales de tu negocio — no tienes que crear columnas a mano.

1. Entra a [Google Sheets](https://sheets.google.com) y crea una hoja nueva
2. **Archivo → Importar → Subir** y selecciona el archivo `sheets-template/productos.csv`
3. Elige "Reemplazar hoja de cálculo" al importar
4. Reemplaza las filas de ejemplo con tus productos reales (mantén los encabezados de la primera fila)

Columnas del archivo: `id, nombre, categoria, publico, precio, precio_anterior, etiqueta, tallas, descripcion, emoji, imagen, colores`

- **categoria**: debe ser una de estas para tu negocio: `maquillaje, skincare, unas, perfumes`
- **publico** (opcional): hombre, mujer, ninos o parejas — déjalo vacío si no aplica a tu negocio
- **precio_anterior** (opcional): solo si el producto está en oferta
- **etiqueta** (opcional): Nuevo, Oferta o Exclusivo
- **tallas** (opcional): separadas por coma, ej: `S,M,L,XL` — si tu negocio no maneja tallas (tecnología, equipos, servicios, comida, etc.) déjalo como `Único` o vacío: el sitio no le mostrará ese paso al cliente
- **emoji**: solo se usa mientras el producto no tiene foto real
- **imagen** (opcional): enlace a la foto real del producto — úsalo si el producto NO tiene variantes de color
- **colores** (opcional, variantes con fotos): formato `Nombre:código de color:foto1|foto2; Nombre2:código:foto3` — úsalo en vez de "imagen" solo si el producto sí viene en distintos colores
  - Ejemplo: `Negro:#000000:https://foto1.jpg|https://foto2.jpg; Blanco:#ffffff:https://foto3.jpg`
- Si dejas **id** vacío, se numera solo por fila

### Paso 2: Publica la hoja como CSV
1. En el Sheet: **Archivo → Compartir → Publicar en la web**
2. Elige la hoja correspondiente y el formato **Valores separados por comas (.csv)**
3. Clic en **Publicar** y copia el enlace que te da

### Paso 3: Pega el enlace en tu sitio
Abre **index.html**, busca `SHEET_CSV_URL` y pega ahí el enlace:
```js
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/TU-ENLACE/pub?output=csv';
```

Guarda, recarga el navegador y tu catálogo se cargará desde el Sheet. Si en algún momento el Sheet no está disponible (sin internet, enlace roto), el sitio muestra los productos de `products.js` en su lugar — nunca se queda sin catálogo.