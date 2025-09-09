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
        
        const board1Div = document.querySelector(".board1");
        const board2Div = document.querySelector(".board2");

        // Logique additionelle à battleship.js
        function isCellAvailable(playerBoard, row, col) {
            if (playerBoard.grid[row][col] === "hit" || playerBoard.grid[row][col] === "missed") {
                return false;
            } else {
                return true;
            }
        }


        function computerAttack(playerBoard, container) {
            let row, col; // on prépare 2 variables 
            // on s'assure que l'ordi choisit une case vide
            do {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
            } while (!isCellAvailable(playerBoard, row, col));

            playerBoard.receiveAttack(row, col);
            renderBoard(playerBoard, container, false);

        }

        function desactivateBtn(container) {
            const buttons = container.querySelectorAll(".cell");
            buttons.forEach((btn) => {
                btn.disabled = true;
            })
        }

        function checkIfWinner(board1, board2, board1Div, board2Div) {
            if (board1.checkIfAllSunk()) {
                displayWinner("Player 2");
                desactivateBtn(board1Div);
                desactivateBtn(board2Div);
                return true;
            }
            if (board2.checkIfAllSunk()) {
                displayWinner("Player 1");
                desactivateBtn(board1Div);
                desactivateBtn(board2Div);
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

                            if (board.grid[rowIndex][colIndex] === "hit" || board.grid[rowIndex][colIndex] === "missed") { return };

                            board.receiveAttack(rowIndex, colIndex);
                            // appeler une fonction pour l'attaque de l'ordi avec Math.floor(Math.random) pour rowIndex / colIndex
                            renderBoard(board, container, true);
                            computerAttack(board1, board1Div);
                            checkIfWinner(board1, board2, board1Div, board2Div);
                        });
                    }
                    container.appendChild(cellButton);
                });
            })
        }

        // Generates some ships

        function placeShipOnDom(board, shipLength) {


            const direction = prompt("Chosse ship direction: h (horizontal) or v (vertical)")

            const boardContainer = document.querySelector(".board1");

            function handleClick(e) {
                // target retourne toujours une chaîne en maj 
                if (e.target.tagName !== "BUTTON") return;

                const x = parseInt(e.target.dataset.row);
                const y = parseInt(e.target.dataset.col);

                const placed = board.placeShip(x, y, shipLength, direction);

                if (placed) {
                    renderBoard(board, boardContainer, false);

                    boardContainer.removeEventListener("click", handleClick);
                }
            }
            boardContainer.addEventListener("click", handleClick);
        }

        function placeShipOnDomComputer(board, shipLength, boardContainer) {
            let placed = false;

            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);

                const direction = Math.random() < 0.5 ? "h" : "v";

                if (direction === "h" && y + shipLength > 10) continue;
                if (direction === "v" && x + shipLength > 10) continue;

                placed = board.placeShip(x, y, shipLength, direction);

                if (placed) {
                    renderBoard(board, boardContainer, true);
                    return true;
                }
            }
            return false;
        }

        function placeAllShipsComputer(board, boardContainer) {
            const shipLength = [1, 2, 3, 4, 5];
            shipLength.forEach(length => {
                placeShipOnDomComputer(board, length, boardContainer);
            })
        }

        renderBoard(board1, board1Div, false);
        renderBoard(board2, board2Div, true);
        alert("start the game by placing your 5 ships");

        placeShipOnDom(board1, 1)
        placeShipOnDom(board1, 2)
        placeShipOnDom(board1, 3)
        placeShipOnDom(board1, 4)
        placeShipOnDom(board1, 5)

        placeAllShipsComputer(board2, board2Div)
    };



    window.addEventListener("DOMContentLoaded", init);
})();