// battleship-dom.js 


// IIFE (Immediately Invoked Function Expression)
// les paranthèses transforment la fonction en expression et non en déclaration
(function () {
    function init() {
        console.log("Init DOM");

        // Initialize the game
        function GameController(
            playerOneName = "Player One",
            playerTwoName = "Player Two"
        ) {
            const player1 = new Player();
            const player2 = new Player();

            const board1 = player1.ownBoard;
            const board2 = player2.ownBoard;

            let activePlayer = player1; 

            const switchPlayerTurn = () => {
                activePlayer = activePlayer === player1 ? player2 : player1; 
            }

            const getActivePlayer = () => activePlayer; 

            const printBoard = () => {
                const boardWithCellValues = board1.map((row) => row.map((cell) => cell.getValue()));
                console.log(boardWithCellValues)
            }
         }

        function ScreenController() {

            const boardDiv = document.querySelector(".board")
            const playerTurnDiv = document.querySelector(".player-turn");

            // const board1 = player1.ownBoard; 
            board1.grid.forEach((row, rowIndex) => {
                row.forEach((cell, columnIndex) => {
                    const cellButton = document.createElement("button");
                    cellButton.classList.add("cell");
                    cellButton.dataset.row = rowIndex;
                    cellButton.dataset.column = columnIndex;
                    cellButton.textContent = cell.value;
                    boardDiv.appendChild(cellButton);
                })
            })
        }

        ScreenController();
    }


    window.addEventListener("DOMContentLoaded", init);
})();