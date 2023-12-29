// script-jogos.js
document.addEventListener('DOMContentLoaded', function() {
    carregarJogos();
    verificarNumerosSorteados();
});

function carregarJogos() {
    let jogos = [
        "03 07 13 26 33 49", "05 12 21 29 41 53", "03 12 22 37 44 50",
        "13 25 34 53 36 50", "16 22 10 15 42 48", "21 23 53 48 15 55",
        "05 12 21 48 54 39", "05 11 23 42 46 33", "12 21 56 34 06 37",
        "07 09 27 38 45 56", "03 09 22 30 46 53", "22 25 33 43 46 51",
        "01 19 20 36 58 59", "02 03 12 21 23 53", "02 17 33 34 48 56"
    ];

    let divListaJogos = document.getElementById('lista-jogos');
    jogos.forEach(jogo => {
        let div = document.createElement('div');
        div.classList.add('jogo');
        div.innerHTML = jogo.split(' ').map(num => `<span class="numero">${num}</span>`).join('');
        divListaJogos.appendChild(div);
    });
}

function verificarNumerosSorteados() {
    let numerosSorteados = Array.from(document.querySelectorAll('#sorteados-exibicao .bolinha'))
                                .map(bolinha => bolinha.textContent.trim())
                                .filter(num => num !== '');

    document.querySelectorAll('#lista-jogos .jogo .numero').forEach(numero => {
        if (numerosSorteados.includes(numero.textContent)) {
            numero.classList.add('acertou');
        }
    });
}
