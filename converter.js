var userInput = document.getElementById("temp");
var convertButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");
var celsiusRadio = document.getElementById("C");
var fahrenheitRadio = document.getElementById("F");
var result = "";

function toCelsius (userInput) {
  result = (userInput -32) * ".5556";
}
function toFahrenheit () {
  result = userInput * 1.8 + 32;
}



window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (celsiusRadio.selected) {
      toCelsius(userInput);
      console.log("Celsius function");
    } else {
      toFahrenheit(userInput);
      console.log("fahrenheit function");

    }
  }
});
