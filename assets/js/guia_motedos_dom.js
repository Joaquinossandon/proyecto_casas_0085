document.querySelector("etiqueta .clase #id"); // obtiene un elemento HTML (el primero que coincida con el selector) de nuestro documento usa selectres CSS (b'asicamente)
document.querySelectorAll("p.class"); // obtiene todos los elementos HTML que coincidan con el selector proporcionado

const elementoHTML = document.querySelector(".main");
elementoHTML.innerHTML = "<h1> Hola mundo </h1>"; // inserta contenido HTML en un elemento HTML (en este caso un elemento con la clase main)

elementoHTML.addEventListener("click", funcionAEjecutar); // Añade un escuchador de eventos (click en este caso) y ejecuta una funcion cuando se gatille el evento
