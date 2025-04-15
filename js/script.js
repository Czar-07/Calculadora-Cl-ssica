// Espera o site carregar pra começar rodar o código
document.addEventListener("DOMContentLoaded", () => {
    // Pega o título que está dentro da home (<h1>)
    const title = document.querySelector(".home h1");
    // Texto que vai aparecer com aquele efeito de digitação
    const text = "Bem-Vindo à Calculadora Clássica";
    // Começa com o primeiro caracter
    let index = 0;

    // Função que faz o texto aparecer letra por letra
    function typeEffect() {
        // Se ainda tem letra para mostrar
        if (index < text.length) {
            // Cola a próxima letra no título
            title.innerHTML += text.charAt(index);
            // Vai pro próximo caractere
            index++;
            // Espera 100 milissegundos e repete
            setTimeout(typeEffect, 100);
        }
    }
    // Começa com o título vazio
    title.innerHTML = "";
    // Chamar a função para começar a digitar o texto
    typeEffect();

    // Pega todos os botões da home
    const buttons = document.querySelectorAll(".home-button");

    // Para cada botão...
    buttons.forEach(button => {
        // Quando passar o mouse em cima, adiciona a classe "hovered"
        button.addEventListener("mouseover", () => {
            button.classList.add("hovered");
        });
        // Quando tira o mouse, remove a classe "hovered"
        button.addEventListener("mouseleave", () => {
            button.classList.remove("hovered");
        });
    });
});

// Função para comparar dois números (maior, menor ou igual)
function calcularRelacional() {
    // Pega os valores que o usuário digitou e transforma em número
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    // Onde vai mostrar o resultado na tela
    const resultadoElemento = document.getElementById("resultado-relacional");
    
    // Se o usuário não digitou número, avisa
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoElemento.textContent = "Por favor, insira dois valores válidos.";
        return;
    }
    
    let resultadoTexto;
    // Compara os valores e monta o texto com o resultado
    if (valor1 > valor2) {
        resultadoTexto = `${valor1} é maior(>) que ${valor2}`;
    } else if (valor1 < valor2) {
        resultadoTexto = `${valor1} é menor(<) que ${valor2}`;
    } else {
        resultadoTexto = `${valor1} é igual(=) a ${valor2}`;
    } 
    
    // Mostra o resultado na tela
    resultadoElemento.textContent = resultadoTexto;
}

// Quando o site carregar, faz a lógica booleana funcionar
document.addEventListener("DOMContentLoaded", function () {
    // Pega os campos do formulário
    const valor1 = document.getElementById("valor1");
    const operador = document.getElementById("operador");
    const valor2 = document.getElementById("valor2");
    const labelValor2 = document.getElementById("label-valor2");
    const calcularBtn = document.getElementById("calcular");
    const resultadoDisplay = document.getElementById("resultado-logico");

    // Essa função mostra ou esconde o segundo valor dependendo do operador
    function atualizarInterface() {
        if (operador.value === "not") { 
            // Se for "not", esconde o segundo campo
            valor2.style.display = "none";
            labelValor2.style.display = "none";
        } else {
            // Se for "and" ou "or", mostra o segundo campo
            valor2.style.display = "inline";
            labelValor2.style.display = "inline";
        }
    }

    // Aqui calcula o resultado do operador lógico (tipo AND, OR, NOT)
    function calcularLogico() {
        // Transforma o valor1 em booleano (true ou false)
        const v1 = valor1.value === "true";
        // Pega o operador (and, or, not)
        const op = operador.value;
        let resultado;

        // Se for "not", só inverte o valor1
        if (op === "not") {
            resultado = !v1;
        } else {
            // Pega o segundo valor e transforma em booleano também
            const v2 = valor2.value === "true";
            // Faz o cálculo dependendo do operador seja "and" ou "or"
            resultado = op === "and" ? v1 && v2 : v1 || v2;
        }

        // Mostra o resultado na tela
        resultadoDisplay.textContent = `Resultado: ${resultado}`;
    }

    // Quando trocar o operador, atualiza a interface
    operador.addEventListener("change", atualizarInterface);
    // Quando clicar no botão, faz o cálculo
    calcularBtn.addEventListener("click", calcularLogico);
    // Atualiza a interface
    atualizarInterface();
});