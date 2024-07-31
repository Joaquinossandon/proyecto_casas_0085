const casas = [
  {
    id: 1,
    name: "Casa 1",
    description: "Una casa bonita en el bosque",
    img: "./assets/img/casas/casa1.jpg",
    precio: 100000,
    categoria: "offer",
  },
  {
    id: 2,
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    id: 3,
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    id: 4,
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    id: 5,
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 20000,
    categoria: "remate",
  },
  {
    id: 6,
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "barata",
  },
  {
    id: 7,
    name: "Casa 3",
    description: "Una casa bonita en la ciudad",
    img: "./assets/img/casas/casa1.jpg",
    precio: 150000,
    categoria: "list",
  },
  {
    id: 8,
    name: "Casa 3",
    description: "Una casa bonita en la ciudad",
    img: "./assets/img/casas/casa1.jpg",
    precio: 150000,
    categoria: "prefa",
  },
];

const carrito = [];

const sections = [
  { title: "Encuentra la casa ideal para ti", id: "houses-list" },
  { title: "Casas en oferta", id: "houses-offer" },
  { title: "Casas en remate", id: "houses-remate" },
  { title: "Casas Baratas", id: "houses-barata" },
  { title: "Casas Prefabricadas", id: "houses-prefa" },
];

const renderHouses = (array, section) => {
  let housesHTML = "";

  for (const casa of array) {
    const houseHTML = `
        <div class="col">
                <div class="card">
                  <img
                    src=${casa.img}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${casa.name}</h5>
                    <p class="card-text">
                      ${casa.description}
                    </p>
                    <p>
                        ${casa.precio}
                    </p>
                    <button class="btn btn-primary" data-houseid="${casa.id}">Agregar al carrito</button>
                  </div>
                </div>
              </div>
              `;
    housesHTML += houseHTML;
  }

  const housesList = document.querySelector(section);
  housesList.innerHTML = housesHTML;
};

// separa las casas en diferentes arreglos
const separarCasas = (array) => {
  let casasPorCategoria = {};
  /*
    {
      offer: [casas],
      list: [casas],
      prefa: [casas],
      ...
    }
  */

  // filtra las casas por categoria y los añade al arreglo correspondiente
  for (const casa of array) {
    casasPorCategoria[casa.categoria] ??= [];
    casasPorCategoria[casa.categoria].push(casa);
  }

  for (const key in casasPorCategoria) {
    renderHouses(casasPorCategoria[key], `#houses-${key}`);
  }

  const buttons = document.querySelectorAll(".card button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const houseId = e.target.getAttribute("data-houseid");
      const casa = casas.find((casa) => casa.id === Number(houseId));
      carrito.push(casa);
      renderCarrito();
    });
  });
};

const eliminarDelCarrito = (e) => {
  const index = e.target.getAttribute("data-index");
  carrito.splice(index, 1);
  renderCarrito();
};

const renderCarrito = () => {
  const carritoElement = document.querySelector("#carrito");
  const carritoTotal = document.querySelector("#carrito-total");
  const totalCarrito = carrito.reduce((acc, casa) => {
    // primera iteracion acc = 0, casa.precio = 100000
    // segunda iteracion acc = 100000, casa.precio = 170000
    // tercera iteracion acc = 270000
    return acc + casa.precio;
  }, 0); // inicia el valor en 0

  console.log(totalCarrito);

  let HTML = "";

  carrito.forEach((casaEnCarrito, index) => {
    const casaCarritoHTML = `
    <h4 data-index="${index}">${casaEnCarrito.name}</h4>
    <p>${casaEnCarrito.precio}</p>
    `;
    HTML += casaCarritoHTML;
  });
  carritoTotal.innerHTML = totalCarrito;
  carritoElement.innerHTML = HTML;

  const carritoElements = document.querySelectorAll("#carrito h4");

  carritoElements.forEach((element) => {
    element.addEventListener("click", eliminarDelCarrito);
  });
};

const renderSections = () => {
  const main = document.querySelector("main");
  let html = "";
  for (const section of sections) {
    const sectionHTML = `
        <section>
        <h2 class="pb-2 border-bottom">${section.title}</h2>
        <div
          id="${section.id}"
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3"
        >
          <!-- vacio -->
        </div>
      </section>`;
    html += sectionHTML;
  }

  main.innerHTML += html;
};

// creamos nuestras secciones
renderSections();

// llamado de funcion
separarCasas(casas);
