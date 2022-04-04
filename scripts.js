function selecionarPrato(prato) {
    console.log(prato);
    
    
    const botaoSelecionado = document.querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    prato.classList.add("borda-verde");
}
function selecionarBebida(bebida) {
    console.log(bebida);
    
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    bebida.classList.add("borda-verde");
}
function selecionarSobremesa(sobremesa) {
    console.log(sobremesa);
    
    
    const botaoSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    sobremesa.classList.add("borda-verde");
}

function fecharPedido() {


    
}


