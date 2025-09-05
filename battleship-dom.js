// battleship-dom.js 


// IIFE (Immediately Invoked Function Expression)
// les paranthèses transforment la fonction en expression et non en déclaration
(function () {
    function init() {
        console.log("Init DOM");

        // Initialize the game
        const player1 = new Player();
        const player2 = new Player();

        const board1 = player1.ownBoard;
        const board2 = player2.ownBoard;

        let activePlayer = player1;

        const switchPlayerTurn = () => {
            activePlayer = activePlayer === player1 ? player2 : player1;
        }

        const getActivePlayer = () => activePlayer;


        function renderBoard(board, container, isEnemy = false) {

            container.textContent = ""; // reset l'affichage

            board.grid.forEach((row, rowIndex) => {
                const rowDiv = document.createElement("div");
                rowDiv.classList.add("row");

                row.forEach((cell, colIndex) => {
                    const cellButton = document.createElement("button");
                    cellButton.classList.add("cell");
                    cellButton.dataset.row = rowIndex;
                    cellButton.dataset.col = colIndex;

                    if (isEnemy) {
                        if (cell === "hit") cellButton.textContent = "hit";
                        else if (cell === "missed") cellButton.textContent = "missed"; 
                        else cellButton.textContent = ""; 
                    } else {
                        cellButton.textContent = cell; 
                    }

                    if (isEnemy) {
                        cellButton.addEventListener("click", () => {
                            board.receiveAttack(rowIndex, colIndex); 
                            renderBoard(board, container, true);
                        });
                    }

                    rowDiv.appendChild(cellButton); 
                });

                container.appendChild(rowDiv);
            })
        }
        const board1Div = document.querySelector(".board1"); 
        const board2Div = document.querySelector(".board2");
    
        renderBoard(board1, board1Div, false);
        renderBoard(board2, board2Div, true);
    };



    window.addEventListener("DOMContentLoaded", init);
})();