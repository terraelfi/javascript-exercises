const convertToCelsius = function(f) {
  const convertfahrenheit = (f - 32) * 5 / 9;
  const fahrenheitRounded = Math.round(convertfahrenheit * 10) / 10;

  console.log(fahrenheitRounded);
  return fahrenheitRounded;
};

const convertToFahrenheit = function(c) {
  const convertCelcius = c * 9/5 + 32;
  const celciusRounded = Math.round(convertCelcius * 10) / 10;

  console.log(celciusRounded);
  return celciusRounded;
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
