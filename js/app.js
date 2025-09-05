// Lista que armazena os jogos alugados:

let jogosAlugados = [];

// Função para alugar/devolver os jogos:

function alterarStatus(id) {
    // MONOPOLY
    if (id == 1) {
        if (jogosAlugados.includes("Monopoly")) {
            alterarClasses("Monopoly", "img1", "dashboard__item__img--rented", "b1", "dashboard__item__button--return");
            alterarBotao("b1", "Alugar");
            jogosAlugados.pop("Monopoly");
        } else {
            alterarClasses("Monopoly", "img1", "dashboard__item__img--rented", "b1", "dashboard__item__button--return");
            alterarBotao("b1", "Devolver");
            jogosAlugados.push("Monopoly");
        }
    // TICKET TO RIDE    
    } else { 
        if (id == 2) {
            if (jogosAlugados.includes("Ride")) {
                alterarClasses("Ride", "img2", "dashboard__item__img--rented", "b2", "dashboard__item__button--return");
                alterarBotao("b2", "Alugar");
                jogosAlugados.pop("Ride");
            } else {
                alterarClasses("Ride", "img2", "dashboard__item__img--rented", "b2", "dashboard__item__button--return");
                alterarBotao("b2", "Devolver");
                jogosAlugados.push("Ride");
            }
    // TAKENOKO    
        } else { 
            if (jogosAlugados.includes("Takenoko")) {
                alterarClasses("Takenoko", "img3", "dashboard__item__img--rented", "b3", "dashboard__item__button--return");
                alterarBotao("b3", "Alugar");
                jogosAlugados.pop("Takenoko");
            } else {
                alterarClasses("Takenoko", "img3", "dashboard__item__img--rented", "b3", "dashboard__item__button--return");
                alterarBotao("b3", "Devolver");
                jogosAlugados.push("Takenoko");
            }
        }
    }
}

// Função para alterar a mensagem do botão:

function alterarBotao(id, texto) {
    let mensagemBotao = document.getElementById(id);
    mensagemBotao.innerHTML = texto;
}

// Função para alterar a classe do botão e a classe da capa do jogo:

function alterarClasses(jogo, id, add1, id2, add2) {
    if (jogosAlugados.includes(jogo)) {
        let classeCapa = document.getElementById(id);
        classeCapa.classList.remove(add1)

        let classeBotao = document.getElementById(id2);
        classeBotao.classList.remove(add2);

    } else {
        let classeCapa = document.getElementById(id);
        classeCapa.classList.add(add1);

        let classeBotao = document.getElementById(id2);
        classeBotao.classList.add(add2);
    }
}