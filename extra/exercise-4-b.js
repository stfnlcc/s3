const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const countriesList = document.getElementById("countries-list");

const removeLastBtn = document.getElementById("removeLastBtn");
removeLastBtn.addEventListener("click", eliminarUltimoElemento);

function eliminarUltimoElemento() {
  const divs = countriesList.querySelectorAll("div");

  if (divs.length > 0) {
    countriesList.removeChild(divs[divs.length - 1]);
  }
}

countries.forEach((country) => {
  const countryDiv = document.createElement("div");

  const titleH4 = document.createElement("h4");
  titleH4.textContent = country.title;

  const imgElement = document.createElement("img");
  imgElement.src = country.imgUrl;

  countryDiv.appendChild(titleH4);
  countryDiv.appendChild(imgElement);

  countriesList.appendChild(countryDiv);
});
