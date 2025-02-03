function mostrarProjetos() {
    var conteudo = document.getElementById("projetos")
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        //exibe se estiver oculto
        conteudo.style.display = "block"
    } else {
        conteudo.style.display = "none"
    }
}



function fecharConteudo() {
    var conteudo = document.getElementById("projetos")
    conteudo.style.display = "none" //esconder
}

var fecharBtn = document.getElementById("fechar")
fecharBtn.onclick = fecharConteudo

function alternarTexto() {
    var texto = document.getElementById("textoAdicional")
    //mostra e esconde um texto
    if (texto.style.display === "none") {
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
}

document.getElementById("mostrarTexto").addEventListener("click", alternarTexto)


function mudarTextoAutomaticamente() {
    var elemento = document.getElementById("mostrarTexto")
    
    if (elemento.textContent === "CLIQUE") {
        elemento.textContent = "AQUI!"
    } else {
        elemento.textContent = "CLIQUE"
    }
}

// executa infinitamente
setInterval(mudarTextoAutomaticamente, 1000)



