var userInput = document.getElementById("temp");
var convertButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");
var celsiusRadio = document.getElementById("C");
var fahrenheitRadio = document.getElementById("F");

function toCelsius () {}

function toFahrenheit () {}

if (celsiusRadio.selected) {
  toCelsius(userInput);
} else {
  toFahrenheit(userInput);
}
