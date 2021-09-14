function convierteGrados(evento) {
    evento.preventDefault();
    var farenheit = document.querySelector("#temperatura").value;
    var celsius = (((farenheit - 32) * 5 )/ 9);
    var resultado = document.querySelector("#resultado");
    resultado.textContent = farenheit + "°F" + " equivalen a " + celsius.toFixed(2) + "°C";
}

document.querySelector("#formulario").addEventListener("submit", convierteGrados);
