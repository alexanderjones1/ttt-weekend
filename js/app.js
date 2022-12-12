/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, element, winner, tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')
console.log(message);

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

init()
function init() {
    board = [null, null, null, null, null, null, null, null, null, ]
    turn = 1
    winner = false
    tie = false
    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((element, idx) => {
        if (element === 1) {
            squareEls[idx].innerText = 'x'
        } else if (element === -1) {
            squareEls[idx].innerText = 'o'
        } else {
            squareEls[idx].innerText = ''
        }
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = (turn === 1 ? 'Player X turn.' : 'Player O turn')
    } else if (winner === false && tie === true) {
        messageEl.textContent = "You Tied!"
    } else {
        messageEl.textContent = " Congratulations! You Win!"
    }
}

function handleClick(evt) {
    let sqIdx = +evt.target.id.replace('sq', '')
    if (board[sqIdx] !== null) {
    } else if (winner === true) {
        return
    }

    placePiece(sqIdx)
    checkForTie()
    // checkForWinner()
    // switchPlayerTurn()
    // render()
}

function placePiece(idx) {
    board[idx] = turn
}

function checkForTie() {
    const hasNull = board.some(function(element) {
        if (element === null) {
            tie = false
        } else {
            tie = true
        }
    })
}