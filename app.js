const Celcius = document.querySelector("#celcius");
const Fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load", () => {
  Celcius.focus();
});

Celcius.addEventListener("input", () => {
  Fahrenheit.value = ((Celcius.value * 9) / 5 + 32).toFixed(2);
  if (!Celcius.value) {
    Fahrenheit.value = "";
  }
});
Fahrenheit.addEventListener("input", () => {
  Celcius.value = (((Fahrenheit.value - 32) / 9) * 5).toFixed(2);
  if (!Fahrenheit.value) {
    Celcius.value = "";
  }
});
