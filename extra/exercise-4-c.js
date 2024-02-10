const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const countriesList = document.getElementById("countries-list");

countries.forEach((country, index) => {
  const countryDiv = document.createElement("div");

  const titleH4 = document.createElement("h4");
  titleH4.textContent = country.title;

  const imgElement = document.createElement("img");
  imgElement.src = country.imgUrl;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", () => eliminarElemento(index));

  countryDiv.appendChild(titleH4);
  countryDiv.appendChild(imgElement);
  countryDiv.appendChild(deleteBtn);

  countriesList.appendChild(countryDiv);
});

function eliminarElemento(index) {
  const divs = countriesList.querySelectorAll("div");

  if (index >= 0 && index < divs.length) {
    countriesList.removeChild(divs[index]);
  }
}
