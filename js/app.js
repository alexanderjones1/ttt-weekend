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

// // Step 2 - Store cached element references.

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')
console.log(message);

/*----------------------------- Event Listeners -----------------------------*/


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



