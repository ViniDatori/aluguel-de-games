let jogosAlugados = [];

// Função para alugar/devolver Monopoly:

function alterarStatus(id) {
    if(jogosAlugados.includes("Monopoly")) {
        alterarClasses("Monopoly", "img1", "dashboard__item__img--rented", "a", "dashboard__item__button--return");
        alterarMenBotao("a", "Alugar");
        jogosAlugados.pop("Monopoly");
        console.log(jogosAlugados);
    } else {
        alterarClasses("Monopoly", "img1", "dashboard__item__img--rented", "a", "dashboard__item__button--return");
        alterarMenBotao("a", "Devolver");
        jogosAlugados.push("Monopoly");
        console.log(jogosAlugados);
    }
}

// Função para alterar a mensagem do botão:

function alterarMenBotao(tag, texto) {
    let mensagemBotao = document.querySelector(tag);
    mensagemBotao.innerHTML = texto;
}

// Função para alterar a classe do botão e a classe da capa do jogo:

function alterarClasses(jogo, id, add1, tag, add2) {
    if(jogosAlugados.includes(jogo)) {
        let classeCapa = document.getElementById(id);
        classeCapa.classList.remove(add1)

        let classeBotao = document.querySelector(tag);
        classeBotao.classList.remove(add2);

    } else {
        let classeCapa = document.getElementById(id);
        classeCapa.classList.add(add1);

        let classeBotao = document.querySelector(tag);
        classeBotao.classList.add(add2);
    }
}