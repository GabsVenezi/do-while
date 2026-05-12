let opcao;
let total = 0;

do {
    opcao = Number(prompt("Selecione o item desejado (1 = Café Expresso 2 = Capuccino 3 = Pão de Queijo 0 = Finalizar Pedido"))

    if (opcao === 1) {
        total = total + 5;
        alert("Café Expresso adicionado!");
    } else if (opcao === 2) {
        total = total + 7;
        alert("Cappuccino adicionado!");
    } else if (opcao === 3) {
        total = total + 4;
        alert("Pão de Queijo adicionado!");
    } else if (opcao !== 0) {
        alert("Opção inválida");
    }

} while (opcao !== 0);

alert(" O total da sua compra é R$ " + total);