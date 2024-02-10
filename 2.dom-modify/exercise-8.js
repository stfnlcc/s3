const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Voy en medio!";

const primerDiv = document.querySelector("div");

primerDiv.insertAdjacentHTML("afterend", nuevoParrafo.outerHTML);

const segundoDiv = document.createElement("div");

nuevoParrafo.insertAdjacentElement("afterend", segundoDiv);
