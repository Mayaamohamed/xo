let turn = 'x';
let title = document.querySelector('.tittle');
let squares = [];

function displayWinner(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';
    setTimeout(function () { location.reload() }, 1000)
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        displayWinner(1, 2, 3);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        displayWinner(4, 5, 6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        displayWinner(7, 8, 9);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '') {
        displayWinner(1, 4, 7);
    } else if (squares[2] == squares[5] && squares[8] == squares[5] && squares[8] != '') {
        displayWinner(2, 5, 8);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        displayWinner(3, 6, 9);
    } else if (squares[7] == squares[3] && squares[3] == squares[5] && squares[3] != '') {
        displayWinner(3, 5, 7);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        displayWinner(1, 5, 9);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn == 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn == 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}
