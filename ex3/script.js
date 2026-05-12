let numeroSecreto = 7;
let chute;
let tentativas = 0;
do {
    chute = Number(prompt("Adivinhe o número secreto (de 1 e 10):"));
    tentativas = tentativas + 1;
    if (chute !== numeroSecreto) {
        alert("Tente novamente.");
    }
} while (chute !== numeroSecreto);

alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
