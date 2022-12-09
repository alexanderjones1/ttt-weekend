/*-------------------------------- Constants --------------------------------*/



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
    element = -1
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

// function updateMessage() {
//     if (winner === false && tie === false) {
//         messageEl.textContent =
//     } else if (winner === false && tie === true) {
//         messageEl.textContent = "You Tied!"
//     } else {
//         messageEl.textContent = " Congratulations! You Win!"
//     }
// }