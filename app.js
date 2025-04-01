alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 5000; // Número máximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto); // Exibe o número secreto no console para fins de depuração
let chute; 
let tentativas = 1; 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    //Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // alert("Você acertou o número secreto" + numeroSecreto + "!");
        break; 
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1; // Incrementa o contador de tentativas
        tentativas++;
    }
}
//Uso de operador ternário para verificar se o número de tentativas é maior que 1 ou não
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso mesmo, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}!`);
//Sem o uso de operador ternário, apenas com if e else.
// // Se o número de tentativas for maior que 1, exibe uma mensagem de sucesso com o número de tentativas, caso contrário, exibe uma mensagem de sucesso com uma tentativa.
// if (tentativas > 1) {
//     // alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//     alert(`Isso mesmo, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso mesmo, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativa!`);
// }
