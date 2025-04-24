//Write a function named convertToCelsius which takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
//Write a function named describeTemperature which takes a temperature in Fahrenheit and returns a description according to the table

function describeTemperature(convertToCelsius) {
    const celsius = (fahrenheit - 32) * 5/9;
    if (celsius < 0) {
      return "VERY Cold";
    } else if (celsius < 20) {
      return "Cold";
    } else if (celsius < 30) {
      return "Warm";
    } else if (celsius < 40) {
      return "Hot";
    } else if (celsius >= 40) {
      return "Very Hot";
    }
  }

//Prompt the user to provide a temperature in Fahrenheit. Then, alert them with a message that tells them the equivalent temperature in Celsius alongside a description of what that temperature would feel like.

const userInput = prompt("Enter temperature in Fahrenheit:");
const fahrenheit=convertToCelsius(userInput)
describeTemperature(fahrenheit)
alert(describeTemperature())