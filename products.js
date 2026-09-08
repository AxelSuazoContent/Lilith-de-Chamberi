/* ═══════════════════════════════════════════════════════
   PRODUCTOS DE MUESTRA — Lilith be Chamberi
   ═══════════════════════════════════════════════════════
   Edita, agrega o elimina productos aquí. Cada producto es un objeto así:

   {
     id: 1,                 // número único
     name: "Nombre",        // nombre visible
     cat: "gargantillas",   // debe ser: gargantillas | chokers | anillos | aretes | maquillaje | collares | pulseras | bolsos
     emoji: "🕸️",           // respaldo si no hay foto
     photo: "ruta/o/url.jpg", // opcional: foto simple (si el producto NO tiene variantes de color)
     badge: "Nuevo",        // opcional: etiqueta ("Nuevo", "Más vendido", etc.)
     price: 350,            // precio actual
     oldPrice: 450,         // opcional: precio anterior (activa el badge de oferta)
     sizes: ["Único"],      // usa ["Único"] si no aplica talla, o ["S","M","L"] si aplica
     stock: 5,              // opcional: cuántas unidades hay disponibles. Omite el campo (o deja null) si no llevas control de inventario para ese producto.
     desc: "Descripción del producto.",
     colors: [               // opcional: variantes de color, cada una con sus propias fotos
       { name:"Negro", hex:"#111111", photos:["ruta1.jpg","ruta2.jpg"] },
       { name:"Plata", hex:"#c8c8c8", photos:["ruta3.jpg"] }
     ]
   }
   Si "stock" es 0, el producto se muestra como "Agotado" y no se puede agregar al carrito.
   ═══════════════════════════════════════════════════════ */

let products = [
  {
    id: 1,
    name: "Gargantilla Luna Negra",
    cat: "gargantillas",
    emoji: "🌙",
    badge: "Nuevo",
    price: 380,
    sizes: ["Único"],
    stock: 8,
    desc: "Gargantilla de terciopelo con dije de luna en metal oscuro. Ajustable para un calce perfecto."
  },
  {
    id: 2,
    name: "Gargantilla Cruz Victoriana",
    cat: "gargantillas",
    emoji: "✝️",
    price: 420,
    sizes: ["Único"],
    stock: 3,
    desc: "Inspirada en la joyería victoriana, con detalle de cruz y cadena fina en tono envejecido."
  },
  {
    id: 3,
    name: "Choker Spike Clásico",
    cat: "chokers",
    emoji: "⛓️",
    badge: "Más vendido",
    price: 340,
    oldPrice: 420,
    sizes: ["S", "M", "L"],
    stock: 6,
    desc: "Choker de cuero sintético con picos metálicos, cierre ajustable de hebilla."
  },
  {
    id: 4,
    name: "Choker Encaje Oscuro",
    cat: "chokers",
    emoji: "🖤",
    price: 300,
    sizes: ["Único"],
    stock: 0,
    desc: "Encaje negro bordado con detalle central de gema oscura."
  },
  {
    id: 5,
    name: "Anillo Telaraña",
    cat: "anillos",
    emoji: "🕸️",
    price: 260,
    sizes: ["6", "7", "8", "9"],
    stock: 10,
    desc: "Anillo ajustable con diseño de telaraña en acabado envejecido."
  },
  {
    id: 6,
    name: "Anillo Serpiente Enroscada",
    cat: "anillos",
    price: 290,
    emoji: "🐍",
    sizes: ["6", "7", "8", "9"],
    stock: 4,
    colors: [
      { name: "Plata oscura", hex: "#5b5b63", photos: [] },
      { name: "Oro envejecido", hex: "#8a7440", photos: [] }
    ],
    desc: "Anillo statement con forma de serpiente enroscada, disponible en dos acabados."
  },
  {
    id: 7,
    name: "Aretes Murciélago",
    cat: "aretes",
    emoji: "🦇",
    price: 220,
    sizes: ["Único"],
    stock: 12,
    desc: "Aretes colgantes con siluetas de murciélago en metal negro mate."
  },
  {
    id: 8,
    name: "Aretes Gota de Obsidiana",
    cat: "aretes",
    emoji: "💧",
    price: 260,
    badge: "Nuevo",
    sizes: ["Único"],
    stock: 7,
    desc: "Aretes largos con piedra facetada tono obsidiana, broche de gancho."
  },
  {
    id: 9,
    name: "Paleta de Sombras Nocturnas",
    cat: "maquillaje",
    emoji: "🎨",
    price: 480,
    sizes: ["Único"],
    stock: 5,
    desc: "12 tonos entre mate y metálico, en gama de morados, negros y vinotintos."
  },
  {
    id: 10,
    name: "Labial Mate Sangre Real",
    cat: "maquillaje",
    emoji: "💄",
    price: 190,
    oldPrice: 240,
    sizes: ["Único"],
    stock: 15,
    desc: "Fórmula de larga duración en un rojo intenso de acabado mate."
  },
  {
    id: 11,
    name: "Collar Cruz Ankh",
    cat: "collares",
    emoji: "☥",
    price: 350,
    sizes: ["Único"],
    stock: 6,
    desc: "Collar de cadena larga con dije de cruz Ankh en metal oscuro."
  },
  {
    id: 12,
    name: "Collar Multicapa Gótico",
    cat: "collares",
    emoji: "🖤",
    price: 410,
    badge: "Más vendido",
    sizes: ["Único"],
    stock: 2,
    desc: "Tres cadenas superpuestas con dijes de luna, estrella y cruz."
  },
  {
    id: 13,
    name: "Pulsera Cadena Gruesa",
    cat: "pulseras",
    emoji: "⛓️",
    price: 240,
    sizes: ["Único"],
    stock: 9,
    desc: "Pulsera de cadena gruesa en acabado envejecido con cierre de mosquetón."
  },
  {
    id: 14,
    name: "Pulsera Charms Oscuros",
    cat: "pulseras",
    emoji: "🦋",
    price: 260,
    sizes: ["Único"],
    stock: 5,
    desc: "Pulsera ajustable con dijes de mariposa negra, luna y cuarzo."
  },
  {
    id: 15,
    name: "Bolso Cruzado Telaraña",
    cat: "bolsos",
    emoji: "🕷️",
    badge: "Nuevo",
    price: 620,
    sizes: ["Único"],
    stock: 4,
    desc: "Bolso cruzado de cuero sintético con bordado de telaraña y cadena metálica."
  },
  {
    id: 16,
    name: "Mochila Gótica Spikes",
    cat: "bolsos",
    emoji: "🎒",
    price: 780,
    oldPrice: 900,
    sizes: ["Único"],
    stock: 3,
    desc: "Mochila resistente con detalles de picos metálicos y hebillas ajustables."
  }
];