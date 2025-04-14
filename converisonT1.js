/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
---------------------------------------------------------------------------

 */
let temperatureInCelsius = 14;
function temperatureConverter(temperatureInCelsius){
    return (temperatureInCelsius*(9/5)) + 32;
}
let result = temperatureConverter(temperatureInCelsius);
console.log(result + ' '+ 'fahrenheit');