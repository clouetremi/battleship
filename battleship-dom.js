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

        // Logique additionelle à battleship.js
        function computerAttack(playerBoard, container) {
            let row, col; // on prépare 2 variables 
            // on s'assure que l'ordi choisit une case vide
            do {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
            } while (playerBoard.grid[row][col] === "hit" || playerBoard.grid[row][col] === "missed");

            playerBoard.receiveAttack(row, col);

            renderBoard(playerBoard, container, false);
        }

        function checkIfWinner(board1, board2) {
            if (board1.checkIfAllSunk()) {
                displayWinner("Player 2");
                return true;
            }
            if (board2.checkIfAllSunk()) {
                displayWinner("Player 1");
                return true;
            }
            return false;
        }

        // partie DOM 
        function displayWinner(winnerName) {
            const winnerDiv = document.querySelector(".winner");
            winnerDiv.textContent = `The winner of this game is ${winnerName}`
        }


        function renderBoard(board, container, isEnemy = false) {

            container.textContent = ""; // reset l'affichage

            board.grid.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    const cellButton = document.createElement("button");
                    cellButton.classList.add("cell");
                    cellButton.dataset.row = rowIndex; 
                    cellButton.dataset.col = colIndex; 

                    if (isEnemy) {
                        if (cell === "hit") cellButton.textContent = "💥";
                        else if (cell === "missed") cellButton.textContent = "🌊";
                        else cellButton.textContent = "";
                    } else {
                        if (cell === "hit") cellButton.textContent = "💥";
                        else if (cell === "x") cellButton.textContent = "🌊";
                        else if (cell === "missed") cellButton.textContent = "⚪";
                        else if (cell === "ship") {
                            const img = document.createElement("img"); 
                            img.src = "./icon/ship.png"
                            img.alt = "Ship"; 
                            img.style.width = "30px";
                            img.style.height = "30px";
                            cellButton.appendChild(img);
                        }
                    }

                    if (isEnemy) {
                        cellButton.addEventListener("click", () => {
                            board.receiveAttack(rowIndex, colIndex);
                            // appeler une fonction pour l'attaque de l'ordi avec Math.floor(Math.random) pour rowIndex / colIndex
                            renderBoard(board, container, true);
                            computerAttack(board1, board1Div);
                            checkIfWinner(board1, board2)
                        });
                    }
                    container.appendChild(cellButton);
                });
            })
        }
        const board1Div = document.querySelector(".board1");
        const board2Div = document.querySelector(".board2");

        // Generates some ships
        board1.placeShip(1, 1, 1, "h");
        board1.placeShip(3, 3, 2, "h");
        board1.placeShip(4, 5, 3, "h");
        board1.placeShip(6, 2, 4, "h");
        board1.placeShip(2, 4, 5, "h");

        board2.placeShip(1, 1, 1, "h");
        board2.placeShip(3, 3, 2, "h");
        board2.placeShip(4, 5, 3, "h");
        board2.placeShip(6, 2, 4, "h");
        board2.placeShip(2, 4, 5, "h");

        renderBoard(board1, board1Div, false);
        renderBoard(board2, board2Div, true);
    };



    window.addEventListener("DOMContentLoaded", init);
})();