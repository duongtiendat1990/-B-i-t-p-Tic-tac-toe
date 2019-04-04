
function checkColumn(board) {
    for (let j = 0; j < board.length; j++) {
            if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[1][j] !== '') {
                document.getElementById('turn').innerHTML = 'Congrats Winner is' + board[1][j];
            }
        }
}

function checkRow(board) {
    for (let i = 0; i < board.length; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][1] !== '') {
                document.getElementById('turn').innerHTML = 'Congrats Winner is' + board[i][1];
            }
    }
}

function checkFirstDiagonal(board) {
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '') {
                document.getElementById('turn').innerHTML = 'Congrats Winner is' + board[1][1];
            }
}
function checkSecondDiagonal(board) {
        if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== '') {
            document.getElementById('turn').innerHTML = 'Congrats Winner is' + board[1][1];
        }
}
function getWinner() {
    let box1 = document.getElementById('box1').innerHTML;
    let box2 = document.getElementById('box2').innerHTML;
    let box3 = document.getElementById('box3').innerHTML;
    let box4 = document.getElementById('box4').innerHTML;
    let box5 = document.getElementById('box5').innerHTML;
    let box6 = document.getElementById('box6').innerHTML;
    let box7 = document.getElementById('box7').innerHTML;
    let box8 = document.getElementById('box8').innerHTML;
    let box9 = document.getElementById('box9').innerHTML;
    let board = [[box1,box2,box3],[box4,box5,box6],[box7,box8,box9]];
    checkRow(board);
    checkColumn(board);
    checkFirstDiagonal(board);
    checkSecondDiagonal(board);
}
let player = 'X';
function play(e) {
    switch (player) {
        case 'X':
            player = 'O';
            nextPlayer = 'X';
        break;
        case 'O':
            player = 'X';
            nextPlayer = 'O';
        break;
    }
        e.innerHTML = player;
        document.getElementById('turn').innerHTML = nextPlayer + " Turn Now";
}
function resetBoard() {
    document.getElementById('box1').innerHTML = '';
    document.getElementById('box2').innerHTML = '';
    document.getElementById('box3').innerHTML = '';
    document.getElementById('box4').innerHTML = '';
    document.getElementById('box5').innerHTML = '';
    document.getElementById('box6').innerHTML = '';
    document.getElementById('box7').innerHTML = '';
    document.getElementById('box8').innerHTML = '';
    document.getElementById('box9').innerHTML = '';
}