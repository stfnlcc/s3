const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const listaUl = document.createElement("ul");

apps.forEach((app) => {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  listaUl.appendChild(listItem);
});

const body = document.body;

body.appendChild(listaUl);
