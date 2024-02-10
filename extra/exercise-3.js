const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corolla"];

const divPrintHere = document.querySelector('[data-function="printHere"]');

const listaUl = document.createElement("ul");

cars.forEach((car) => {
  const listItem = document.createElement("li");

  listItem.textContent = car;

  listaUl.appendChild(listItem);
});

divPrintHere.appendChild(listaUl);
