const expoente = document.querySelector(".expoente");
const raiz = document.querySelector(".raiz");
const log = document.querySelector(".log");

expoente.addEventListener("click", botaoe);
raiz.addEventListener("click", botaor);
log.addEventListener("click", botaol);

function botaoe() {
    var base = Number(prompt("Insira a base:"));
    var expo = Number(prompt("Insira o expoente:"));
    var resultadoe = base ** expo;
    alert("O resultado é: " + resultadoe);
    console.log(resultadoe)
}

function botaor() {
    var raiz = Number(prompt("Insira o número:"))
    if (raiz >= 0){
        var resultador = raiz ** 0.5
        alert("O resultado é: " + resultador)
        console.log(resultador)
    }else{
        alert("Número inválido!")
    }
   
}

function botaol() {
    var numero = Number(prompt("Digite um número:"));
    var base = Number(prompt("Digite a base do logaritmo:"));
    if (numero > 0 && base > 0 && base !== 1) {
        let resultadol = Math.log(numero) / Math.log(base);
        alert(`O logaritmo de ${numero} na base ${base} é: ${resultadol}`);
    } else {
        alert("Número ou base inválidos! O número e a base devem ser positivos e a base não pode ser 1.");
    }
}