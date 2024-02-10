const body = document.body;

const nuevoDiv = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  const nuevoParrafo = document.createElement("p");

  nuevoParrafo.textContent = `Párrafo ${i}`;

  nuevoDiv.appendChild(nuevoParrafo);
}

body.appendChild(nuevoDiv);
