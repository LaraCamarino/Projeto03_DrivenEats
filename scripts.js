let pratoSelecionado = null;
let precoPrato = 0;
let bebidaSelecionada = null;
let precoBebida = 0;
let sobremesaSelecionada = null;
let precoSobremesa = 0;
let precoTotal = 0;

function selecionarPrato(prato) {
    console.log(prato);
    
    
    const botaoSelecionado = document.querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
        botaoSelecionado.querySelector("ion-icon").classList.add("esconder");
    }

    prato.classList.add("borda-verde");
    prato.querySelector("ion-icon").classList.remove("esconder");

    pratoSelecionado = prato.querySelector("div .nome-item").innerHTML;
    precoPrato = prato.querySelector("div .preço strong").innerHTML;
    precoPrato = parseFloat(precoPrato.replace("," , "."));

    fecharPedido();
}

function selecionarBebida(bebida) {
    console.log(bebida);
    
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
        botaoSelecionado.querySelector("ion-icon").classList.add("esconder");
    }

    bebida.classList.add("borda-verde");
    bebida.querySelector("ion-icon").classList.remove("esconder");

    bebidaSelecionada = bebida.querySelector("div .nome-item").innerHTML;
    precoBebida = bebida.querySelector("div .preço strong").innerHTML;
    precoBebida = parseFloat(precoBebida.replace("," , "."));

    fecharPedido();
}

function selecionarSobremesa(sobremesa) {
    console.log(sobremesa);
    
    
    const botaoSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("borda-verde");
        botaoSelecionado.querySelector("ion-icon").classList.add("esconder");
    }

    sobremesa.classList.add("borda-verde");
    sobremesa.querySelector("ion-icon").classList.remove("esconder");

    sobremesaSelecionada = sobremesa.querySelector("div .nome-item").innerHTML;
    precoSobremesa = sobremesa.querySelector("div .preço strong").innerHTML;
    precoSobremesa = parseFloat(precoSobremesa.replace("," , "."));
    

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

    precoTotal = precoPrato + precoBebida + precoSobremesa;
   
    let mensagem =   `Olá, gostaria de fazer o pedido:\
         \r\t- Prato: ${pratoSelecionado}\
        \r\t- Bebida: ${bebidaSelecionada}\
        \r\t- Sobremesa: ${sobremesaSelecionada}\
        \rTotal: R$ ${precoTotal.toFixed(2)}\
        \n\rNome: ${nomeCliente}\
        \rEndereço: ${enderecoCliente}`;
    
    const mensagemCodificada = window.encodeURIComponent(mensagem);
    window.open(`https://wa.me/5531973434846/?text=` + mensagemCodificada, "_blank")
}