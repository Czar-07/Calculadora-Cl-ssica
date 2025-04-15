const expoente = document.querySelector(".expoente");
const raiz = document.querySelector(".raiz");
const log = document.querySelector(".log");
//pegam elementos do HTML com as classes expoente, raiz, e log

expoente.addEventListener("click", botaoe);
raiz.addEventListener("click", botaor);
log.addEventListener("click", botaol);
//define o que acontece quando o usuário clica nos botões

function botaoe() {
    var base = Number(prompt("Insira a base:"));
    var expo = Number(prompt("Insira o expoente:"));
    var resultadoe = base ** expo;
    alert("O resultado é: " + resultadoe);
    console.log(resultadoe)
}
//função para pedir dois valores no prompt, a base e o expoente, calcula usando "**" e o resultado aparece no alert e no console.

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

//função para pedir um número e verifica se ele é maior ou igual a zero, calcula usando "** 0.5" e mostra o resultado no alert e no console.

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
//função para pedir um número e a base para o logaritmo, verificar os valores corretos e mostrar o resultado no alert e no console.
