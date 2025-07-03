const celcius = document.querySelector(".cel");
const fahrenheit = document.querySelector(".fah");
const kelvin = document.querySelector(".kel");

celcius.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const celciusTemp = parseFloat(celcius.value);
    const kelvinTemp = celciusTemp + 273.15;

    kelvin.value = kelvinTemp.toString();

    const a = (9 / 5) * celciusTemp;

    const b = 32;
    const fahrenheitTemp = a + b;

    fahrenheit.value = fahrenheitTemp.toString();
  }
});
fahrenheit.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const fahrenheitTemp = parseFloat(fahrenheit.value);

    const a = ((fahrenheitTemp - 32) * 5) / 9;

    const b = 273.15;
    const kelvinTemp = a + b;

    kelvin.value = kelvinTemp.toString();
    const celciusTemp = a;

    celcius.value = celciusTemp.toString();
  }
});
kelvin.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const kelvinTemp = parseFloat(kelvin.value);
    const celciusTemp = kelvinTemp - 273.15;

    celcius.value = celciusTemp.toString();
    const a = (celciusTemp * 9) / 5;

    const b = 32;
    const fahrenheitTemp = a + b;

    fahrenheit.value = fahrenheitTemp.toString();
  }
});
