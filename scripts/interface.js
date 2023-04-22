// Adiciona o evento de clique em cada quadrado
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

// Verificação do quadrado clicado
function handleClick(event) {
    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquare(position);
    move();

    if (gameOver) {
        moveTxt.innerText = `Fim de jogo`;
        score();
        winner();
    }
}

// Inserção dos simbolos nos quadrados
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol} piece'><p>${symbol}</p></div>`
}

//Jogada
moveTxt = document.getElementById('move');
scoreDiv = document.getElementsByClassName('score');
function move() {
    if (isTie == true) {
        scoreDiv[0].style.borderColor = 'white';
        scoreDiv[1].style.borderColor = 'white';
    } else if (player == 0) {
        scoreDiv[0].style.borderColor = 'rgb(48, 144, 255)';
        scoreDiv[1].style.borderColor = 'white';
    } else if (player == 1) {
        scoreDiv[1].style.borderColor = 'rgb(52, 255, 52)';
        scoreDiv[0].style.borderColor = 'white';
    }
    let symbol = symbols[player]
    moveTxt.innerHTML = `<p class="${symbol}">Vez de ${symbol}</p>`
}

//Vencedor
let game = document.getElementsByClassName('game');
let win = document.getElementsByClassName('win');
function winner() {
    let symbol = symbols[player];
    for (let i = 0; i < posWin.length; i++) {
        let square = document.getElementById(posWin[i].toString());
        square.innerHTML = `<div class='${board[posWin[i]]} piece winnerAnimation'><p>${board[posWin[i]]}</p></div>`
    }

    game[0].classList.add('gameAnimation');

    setTimeout(() => {
        game[0].style.display = 'none';
        game[0].classList.remove('gameAnimation');
        win[0].style.display = 'flex';

        if (isTie == false) {
            win[0].innerHTML = `<h2 class='${symbol}' >${symbol}</h2>
        <h3 class='${symbol}'>VENCEDOR!</h3>`
        } else {
            win[0].innerHTML = `<h2><span class='${symbols[0]}'>${symbols[0]}</span>
            <span class='${symbols[1]}'>${symbols[1]}</span></h2>
        <h3'>EMPATE!</h3>`
        }
        restart.classList.add('restartAnimation');

    }, 2500)
}

// Reiniciar jogo 
let restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);

function restartGame() {
    updateSquares();
    resetGame();
    restart.classList.remove('restartAnimation');
    scoreDiv[0].style.borderColor = 'white';
    scoreDiv[1].style.borderColor = 'white';
    moveTxt.innerText = 'Clique para iniciar o jogo';
    game[0].style.display = 'block';
    win[0].style.display = 'none';
}

function updateSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.innerHTML = '';
    })
}

//Pontuação
function score() {
    let scoreX = document.getElementById('scoreX');
    let scoreO = document.getElementById('scoreO');

    if (isTie == true) {
        return
    } else if (player == 0) {
        let parentElement = scoreX.parentNode
        parentElement.classList.add('scoreAnimation');
        setTimeout(() => {
            scoreX.innerText = playerX;
            setTimeout(() => {
                parentElement.classList.remove('scoreAnimation');
            }, 2100)
        }, 1800)
    } else {
        let parentElement = scoreO.parentNode
        parentElement.classList.add('scoreAnimation');
        setTimeout(() => {
            scoreO.innerText = playerO;
            setTimeout(() => {
                parentElement.classList.remove('scoreAnimation');
            }, 2100)
        }, 1800)
    }
}