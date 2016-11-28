// Creating multiple variables to hold the html elements
var inputElement = document.getElementById("temp");
var convertButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");
var celsiusRadio = document.getElementById("C");
var fahrenheitRadio = document.getElementById("F");
var resultHeading = document.getElementById("converted");
var userInput;
var result;

// Add event listener to the celsius radio button.  When the event is fired, the function removes the ckecked attribute from
// the fahrenheit radio button.  The celsius radio button also have the attribute 'checked' added as true.  
celsiusRadio.addEventListener("click", function() {
  fahrenheitRadio.removeAttribute("checked");
  this.setAttribute("checked", "true");
});

// Add event listener to the fahrenheit radio button.  When the event is fired, the function removes the ckecked attribute from
// the celsius radio button.  The fahrenheit radio button also have the attribute 'checked' added as true. 
fahrenheitRadio.addEventListener("click", function() {
  celsiusRadio.removeAttribute("checked");
  this.setAttribute("checked", "true");
});

//  Function to convert the user's input from fahrenheit to celsius
function toCelsius (tempNumber) {
  result = (tempNumber - 32) * '.5556';
  // Function to change the color of the resultHeading text depending on the temperature
  changeColor(result);
  //setting the resultHeading to the converted temperature
  resultHeading.innerHTML = result;
}

//  Function to convert the user's input from celsius to fahrenheit
function toFahrenheit (tempNumber) {
  result = tempNumber * 1.8 + 32;
  // Function to change the color of the resultHeading text depending on the temperature
  changeColor(result);
  //setting the resultHeading to the converted temperature
  resultHeading.innerHTML = result;
}

// Function to change the h2 color depending on the value of result, which is the converted temperature
function changeColor(result) {
  //check to see which radio button is checked.  Celsius has different values for colors than fahrenheit and vice versa
  if (celsiusRadio.hasAttribute("checked")) {
    // If, else if, and else statements to determine what color to make resultHeading
    if (result > 32) {
      resultHeading.style.color ='red';
    } else if (result < 0) {
        resultHeading.style.color ='blue';
      } else {
          resultHeading.style.color = 'green';
        }
    // Else statement to execute if the celsius radio button does not have the checked attribute
  } else {
      // If, else if, and else statements to determine what color to make resultHeading
      if (result > 90) {
        resultHeading.style.color = 'red';
      } else if (result < 32) {
        resultHeading.style.color = 'blue';
        } else {
          resultHeading.style.color = 'green';
          }
    }
}


// Function to grab the value of the input text field, then depending on which radio button is checked, calls either
// the toCelsius or to Fahrenheit functions.
function convert() {
  userInput = document.getElementById("temp").value;
  if (celsiusRadio.hasAttribute("checked") || fahrenheitRadio.hasAttribute("checked")) {
      if (celsiusRadio.hasAttribute("checked")) {
        resultHeading.innerHTML = "";
        toCelsius(userInput);
      } else {
          resultHeading.innerHTML = "";
          toFahrenheit(userInput);
        }
  } else {
      alert("Please select Celsius or Fahrenheit");
    }
}

// adding an event listener to the convert button, when the convert button is clicked, the convert function is called
convertButton.addEventListener("click", convert);

// adding an event listener to the text input, when the text input is in focus/selected, and a key is pressed,
// the function checks to see if the key pressed was enter, if it was the convert function is called.
inputElement.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
     convert();  
  }
});

// Clear the input text field when user clicks the button labeled 'clear'
clearButton.addEventListener("click", function() {
  inputElement.value = '';
});