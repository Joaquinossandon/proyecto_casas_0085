const casas = [
  {
    name: "Casa 1",
    description: "Una casa bonita en el bosque",
    img: "./assets/img/casas/casa1.jpg",
    precio: 100000,
    categoria: "offer",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "remate",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 20000,
    categoria: "remate",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
    precio: 170000,
    categoria: "barata",
  },
  {
    name: "Casa 3",
    description: "Una casa bonita en la ciudad",
    img: "./assets/img/casas/casa1.jpg",
    precio: 150000,
    categoria: "list",
  },
  {
    name: "Casa 3",
    description: "Una casa bonita en la ciudad",
    img: "./assets/img/casas/casa1.jpg",
    precio: 150000,
    categoria: "prefa",
  },
];

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
    console.log(casa)
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
                    <a href="#" class="btn btn-primary">ver detalles</a>
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
