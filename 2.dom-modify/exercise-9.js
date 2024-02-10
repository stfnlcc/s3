const divsInsertHere = document.querySelectorAll(".fn-insert-here");

divsInsertHere.forEach((div) => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Voy dentro!";

  div.appendChild(nuevoParrafo);
});
 