//Variable in Kelvin
const kelvin = 369;

//Converting from Kelvin to Celsius
const celsius = kelvin - 273;

//Converting from Celsius to Fahrenheit
let fahrenheit = celsius * 9/5 + 32;

// Rounding Down
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit +' degrees Fahrenheit.')