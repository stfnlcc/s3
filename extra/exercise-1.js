const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const countriesList = document.getElementById("countries-list");

countries.forEach((country) => {
  const listItem = document.createElement("li");

  listItem.textContent = country;

  countriesList.appendChild(listItem);
});
