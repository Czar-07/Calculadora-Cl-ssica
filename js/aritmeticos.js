
        function operar() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var operacao = document.querySelector('input[name="operacao"]:checked');
            var mensagem = "";

            if (isNaN(num1) || isNaN(num2)) {
                mensagem = "Por favor, insira números válidos!";
            } else if (!operacao) {
                mensagem = "Por favor, selecione uma operação!";
            } else {
                switch (operacao.value) {
                    case "soma":
                        mensagem = "Resultado da soma: " + (num1 + num2);
                        break;
                    case "subtracao":
                        mensagem = "Resultado da subtração: " + (num1 - num2);
                        break;
                    case "multiplicacao":
                        mensagem = "Resultado da multiplicação: " + (num1 * num2);
                        break;
                    case "divisao":
                        if (num2 !== 0) {
                            mensagem = "Resultado da divisão: " + (num1 / num2);
                        } else {
                            mensagem = "Não é possível dividir por zero!";
                        }
                        break;
                }
            }

            document.getElementById("resultado").innerHTML = mensagem;
        }
    