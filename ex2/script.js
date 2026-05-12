let soma = 0;
let opcao;

do {
    let numero = Number(prompt("Digite um número:"));
    soma = soma + numero; 
    
    opcao = prompt("Deseja inserir outro número? (s/n)").toLowerCase();

} while (opcao === "s");

alert("A soma dos números é: " + soma);