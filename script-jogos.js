// script-jogos.js
document.addEventListener('DOMContentLoaded', function() {
    carregarJogos();
    verificarNumerosSorteados();
});

function carregarJogos() {
    let jogos = [
    "02 04 30 48 52 53", "04 06 21 23 40 51", "08 10 12 33 50 52",
    "03 04 06 18 23 29", "02 07 12 15 17 32", "07 08 22 27 35 40",
    "07 17 27 37 47 57", "03 18 23 43 55 60", "05 06 13 14 21 22",
    "13 22 24 32 42 57", "03 12 21 44 52 56", "03 09 10 28 31 55",
    "03 07 13 26 33 49", "05 12 21 29 41 53", "03 12 22 37 44 50",
    "13 25 34 36 50 53", "10 15 16 22 42 48", "15 21 23 48 53 55",
    "05 12 21 39 48 54", "05 11 23 33 42 46", "06 12 21 34 37 56",
    "07 09 27 38 45 56", "03 09 22 30 46 53", "22 25 33 43 46 51",
    "01 19 20 36 58 59", "02 03 12 21 23 53", "02 17 33 34 48 56",
    "02 16 23 40 42 57", "04 06 35 41 53 58", "03 11 28 39 45 56"
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
