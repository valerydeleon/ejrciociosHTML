function aFahrenheit(){
  var inputCelsius = parseInt(document.getElementById("inputCelsius").value);
  var resultadoCaF = ((9/5) * inputCelsius + 32);
  document.getElementById("resultadoEnFahrenheit").value = resultadoCaF;
};

function aCelsius(){
  var inputFahrenheit = parseInt(document.getElementById("inputFahrenheit").value);
  var resultadoFaC = ((inputFahrenheit - 32) * (5/9));
  document.getElementById("resultadoEnCelsius").value = resultadoFaC;
}
