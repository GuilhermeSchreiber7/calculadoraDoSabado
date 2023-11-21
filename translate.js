let LinguaPT = document.createElement("script");
LinguaPT.src = "./idiomas/pt.js";
document.head.appendChild(LinguaPT);

let LinguaEN = document.createElement("script");
LinguaEN.src = "./idiomas/en.js";
document.head.appendChild(LinguaEN);

let LinguaFR = document.createElement("script");
LinguaFR.src = "./idiomas/fr.js";
document.head.appendChild(LinguaFR);

let selectdLanguage = document.querySelector("#idioma");
selectdLanguage.addEventListener("change", function() {
    translate(this.value);
});
function translate(idioma) {
    let traducao = 
    (idioma == "pt") ? portugues() : (idioma == "en") ? ingles() : (idioma == "es") ? espanhol() : (idioma == "fr") ? frances() : (idioma == "it") ? italiano() : null
    selectdLanguage(traducao);
}
function selectdLanguage(novoIdioma) {
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.soma;
    let btSub = document.querySelector("#btSub");
    btSub.value = novoIdioma.sub;
}