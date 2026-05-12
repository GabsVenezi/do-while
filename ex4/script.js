let Produto;

do {
    Produto = prompt("Cadastre o produto (não pode ser vazio ou curto):");
    if (Produto.length < 3){
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres");
    }

} while (Produto.length < 3)

alert("Produto cadastrado: " + Produto);
