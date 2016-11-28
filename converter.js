var userInput = document.getElementById("temp").innerHTML;
var inputElement = document.getElementById("temp");
var convertButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");
var celsiusRadio = document.getElementById("C");
var fahrenheitRadio = document.getElementById("F");
var resultHeading = document.getElementById("converted");
var result;

celsiusRadio.addEventListener("click", function() {
  fahrenheitRadio.removeAttribute("checked");
  this.setAttribute("checked", "true");
});

fahrenheitRadio.addEventListener("click", function() {
    celsiusRadio.removeAttribute("checked");
    this.setAttribute("checked", "true");
});

function toCelsius (userInput) {
  result = (userInput - 32) * '.5556';
  resultHeading.innerHTML = result;
}
function toFahrenheit (userInput) {
  result = userInput * 1.8 + 32;
  resultHeading.innerHTML = result;
}

inputElement.addEventListener("keydown", function(event) {

  if (event.key == 13) {
    console.log("Enter was pressed");
    if (celsiusRadio.hasAttribute("checked")) {
      toCelsius(userInput);
      console.log("Celsius function");
    } else {
      toFahrenheit(userInput);
      console.log("fahrenheit function");

    }
  }
});
