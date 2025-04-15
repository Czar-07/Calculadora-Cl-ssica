// Funçao Convertendo Ano
function verificar_data(){
    var numA = document.getElementById("ano").value;

    // Variaveis em que ocorre a conversão dos valores:

    // Conversão de Ano para Meses:
    var mes = numA * 12;
    // Conversão de Meses para Dias:
    var dias = mes * 30;
    // Conversão de Dias para Horas:
    var horas = dias * 24;
    // Conversão de Horas para Minutos:
    var minutos = horas * 60;
    var mensagem = "";

    // Mostra a mensagem no HTML da quantidade de Meses
    document.getElementById("resultado_Mes").innerHTML = mensagem + mes + " Meses";

    // Mostra a mensagem no HTML da quantidade de Dias
    document.getElementById("resultado_Dia").innerHTML = mensagem + dias + " Dias";

    // Mostra a mensagem no HTML da quantidade de Horas
    document.getElementById("resultado_Hora").innerHTML = mensagem + horas + " Horas";

    // Mostra a mensagem no HTML da quantidade de Minutos
    document.getElementById("resultado_Minuto").innerHTML = mensagem + minutos + " Minutos";
}

// Função para Criar um Relogio
function relogio(){
    // New Date, é utilizado para pegar o momento exato em que o comando é executado, como: Dia, mês, ano, hora, minutos r segundo.
    const agora = new Date();

    // getHours, pega a hora atual do New Date;
    // padStart, format0 o valor para ter apenas dois digitos.
    const horas = String(agora.getHours()).padStart(2, '0');

    // getHMinutes, pega os minutos atuais do New Date.
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    // getSeconds, pega os segundos atuais do New Date.
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    // textContent é usado para mudar o texto dentro do HTML;
    // ${horas}:${minutos}:${segundos}, Permitem montar uma string com variáveis.
    document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
}

// setInterval(relogio, 1000) chama a função relogio a cada 1000 milissegundos (1 segundo). 
setInterval(relogio, 1000);
relogio();