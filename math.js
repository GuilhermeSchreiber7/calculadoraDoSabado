let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value));
});
let btSub = document.querySelector("#btSub");
btSub.addEventListener("click", function () {
    subr(Number(valor1.value), Number(valor2.value));
});
let btMulti = document.querySelector("#btMulti");
btMulti.addEventListener("click", function () {
    multiplicar(Number(valor1.value), Number(valor2.value));
});
let btDiv = document.querySelector("#btDiv");
btDiv.addEventListener("click", function () {
    dividir(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
function multiplicar(a, b) {
    let multi = a * b;
    resultado.innerHTML = multi;

} function subr(a, b) {
    let sub = a - b;
    resultado.innerHTML = sub;

} function dividir(a, b) {
    let dividir = a / b;
    resultado.innerHTML = dividir;
}
