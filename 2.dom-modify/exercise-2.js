const body = document.body;

const nuevoDiv = document.createElement('div');

const nuevoParrafo = document.createElement('p');

nuevoParrafo.textContent = 'párrafo dentro de un div';

nuevoDiv.appendChild(nuevoParrafo);

body.appendChild(nuevoDiv);
