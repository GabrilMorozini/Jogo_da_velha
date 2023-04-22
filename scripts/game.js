// Controle das jogadas 
let board = ['', '', '', '', '', '', '', '', ''];
let player = 0;
let playerX = 0;
let playerO = 0;
let isTie = false;
let gameStart = false;
let gameOver = false;

let symbols = ['X', 'O'];


let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Inserção dos simbolos no array 
function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        gameStart = true;
        board[position] = symbols[player];

        gameOver = isWin();

        if (gameOver == false) {
            player = (player == 0) ? 1 : 0;
        }
    }

    return gameOver;
}

//Verificação de Fim de Jogo 
function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        pos1 = seq[0];
        pos2 = seq[1];
        pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            if (player == 0) {
                playerX++
            } else {
                playerO++
            }
            posWin = [pos1, pos2, pos3]
            return true;
        }
    }

    isTie = board.every((element) => element != '');
    if (isTie == true) {
        posWin = [0,1,2,3,4,5,6,7,8]
        return true;
    }

    return false;
}

//Reset das configurações padrão 
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    player = 0;
    gameOver = false;
    isTie == false;
}