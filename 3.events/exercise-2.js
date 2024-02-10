const miInput = document.getElementById("miInput");

miInput.addEventListener("focus", function (event) {
  console.log("Valor del input:", event.target.value);
});
