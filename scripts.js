
function selecionarPrato(prato) {
    console.log(prato);
    
    
    const botaoSelecionado = document.querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    prato.classList.add("borda-verde");
    fecharPedido();
}

function selecionarBebida(bebida) {
    console.log(bebida);
    
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    bebida.classList.add("borda-verde");
    fecharPedido();
}

function selecionarSobremesa(sobremesa) {
    console.log(sobremesa);
    
    
    const botaoSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
    }

    sobremesa.classList.add("borda-verde");

    fecharPedido();
}

function fecharPedido() {
    const pratoSelecionado = document.querySelector('.borda-verde');
    const bebidaSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");
    const sobremesaSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");
    const botaoPedidoBloqueado = document.querySelector('.botao-cinza');
    const botaoPedidoLiberado = document.querySelector('.botao-verde');


    if ((pratoSelecionado !== null) && (bebidaSelecionado !== null) && (sobremesaSelecionado !== null)) {
            
        botaoPedidoBloqueado.classList.add('esconder');
        botaoPedidoLiberado.classList.add("aparecer");
               
    }    
}

function finalizarPedido() {
    const nomeCliente = prompt("Qual o seu nome?");
    const enderecoCliente = prompt("Qual o seu endereço?");
    const mensagem = "Olá, gostaria de fazer o pedido:
    - Prato: ${pedido.prato}
    - Bebida: ${pedido.bebida}
    - Sobremesa: ${pedido.sobremesa}
    Total: R$ ${pedido.total}
    
    Nome: ${nomeCliente}
    Endereço: ${enderecoCliente}"";

}

function convesaWhatsApp() {


    
    const enderecoSite = encodeURIComponent(mensagem);

    const whatsapp = `https://wa.me/5553111111111?text=${pedidoZap}`;
    window.open(whatsapp, "_blank")
    window.location.reload();
}

window.location.href = "https://wa.me/5531973434846";