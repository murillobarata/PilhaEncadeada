pilha = {
    topo: null,
    tamanho_max: 5,
    tamanho_atual: 0
}

function criarNo(valor) {
    no = {
        valor: Math.floor(Math.random() * 20),
        anterior: null
    }
    return no;
}

function inserir () {
    no = criarNo();
    // console.log(pilha);
    if (pilha.topo == null) { //verificar se a pilha está vazia
        pilha.topo = no;
        pilha.tamanho_atual++;
        addPilhaHTML();
    } else if (pilha.tamanho_atual == pilha.tamanho_max) { 
        // verificar se a pilha está cheia
        // alert("pilha cheia");
        M.toast({html: 'Pilha cheia!'});
    } else {
        no.anterior = pilha.topo;
        pilha.topo = no;
        pilha.tamanho_atual++;
        addPilhaHTML();
    }
}

function remover() {
    if (pilha.topo == null) {
        M.toast({html: 'Pilha vazia!'});        
    } else {
        pilha.topo = pilha.topo.anterior;
        pilha.tamanho_atual--;
        rmPilhaHTML();
    }
}

function addPilhaHTML() {
    if (pilha.tamanho_atual > 1) {
        topo_antigo_id = pilha.tamanho_atual-1 + "";
        document.getElementById(topo_antigo_id).classList.remove("pilha-topo");
    }

    div = "<div class=\"pilha-no pilha-topo\" id=\""+pilha.tamanho_atual+"\">"+pilha.topo.valor+"</div>";
    document.getElementById("pilha").innerHTML += div;    
}

function rmPilhaHTML() {
    document.getElementById(pilha.tamanho_atual+1).remove();
    if (pilha.tamanho_atual > 0) {
        document.getElementById(pilha.tamanho_atual).classList.add("pilha-topo");    
    }
}