let LinguaPT = document.createElement("script");
LinguaPT.src = "idiomas/pt.js";
document.head.appendChild(LinguaPT);

let LinguaEN = document.createElement("script");
LinguaEN.src = "idiomas/en.js";
document.head.appendChild(LinguaEN);

let LinguaFR = document.createElement("script");
LinguaFR.src = "idiomas/fr.js";
document.head.appendChild(LinguaFR);

let LinguaES = document.createElement("script");
LinguaES.src = "idiomas/es.js";
document.head.appendChild(LinguaES);

let selectdLanguage = document.querySelector("#idioma");
selectdLanguage.addEventListener("change", function() {
    translate(this.value);
});
function translate(idioma) {
    let traducao = 
    (idioma == "pt") ? portugues() : (idioma == "en") ? ingles() : (idioma == "es") ? espanhol() : (idioma == "fr") ? frances() : (idioma == "it") ? italiano() : null
    Language(traducao);
}
function Language(novoIdioma) {
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.btSoma;
    let btSub = document.querySelector("#btSub");
    btSub.value = novoIdioma.btSub;
    let btMulti = document.querySelector("#btMulti");
    btMulti.value = novoIdioma.btMulti;
    let btDiv = document.querySelector("#btDiv");
    btDiv.value = novoIdioma.btDiv
}