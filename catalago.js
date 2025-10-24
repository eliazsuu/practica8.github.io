const productos = [
    {
      nombre: "Nike Air Zoom G.T. Jump 2",
      descripcion: "Tenis ligeros con gran amortiguación y soporte para jugadores explosivos.",
      precio: "$3,999",
      imagen: "gt.jpeg"
    },
    {
      nombre: "Adidas Harden Vol. 8",
      descripcion: "Zapatillas con diseño moderno, tracción superior y excelente estabilidad lateral.",
      precio: "$4,299",
      imagen: "jarden.avif"
    },
    {
      nombre: "Puma All Pro Nitro",
      descripcion: "Tenis de alto rendimiento con amortiguación Nitro Foam y gran tracción.",
      precio: "$3,499",
      imagen: "allpro.avif"
    },
    {
      nombre: "Under Armour Curry 11",
      descripcion: "Zapatillas ligeras y cómodas con diseño inspirado en Stephen Curry.",
      precio: "$4,599",
      imagen: "mierdicurri.avif"
    },
    {
      nombre: "Jordan Luka 3",
      descripcion: "Tenis firmados por Luka Dončić con tecnología IsoPlate para máxima agilidad.",
      precio: "$4,999",
      imagen: "luka.png"
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  productos.forEach(prod => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h2>${prod.nombre}</h2>
      <p>${prod.descripcion}</p>
      <p class="precio">${prod.precio}</p>
      <button>Comprar</button>
    `;
    catalogo.appendChild(tarjeta);
  });
