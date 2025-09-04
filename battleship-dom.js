// battleship-dom.js 


// IIFE (Immediately Invoked Function Expression)
// les paranthèses transforment la fonction en expression et non en déclaration
(function () {
    function init() {
        console.log("Init DOM");
        
        // Initialize the game
        const player1 = new Player(); 
        const player2 = new Player();

        



        function ScreenController() {

        const boardDiv = document.querySelector(".board")
        const playerTurnDiv = document.querySelector(".player-turn");

        const board1 = player1.ownBoard; 
        board1.grid.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.column = columnIndex;
                cellButton.text = cell.getValue();
                boardDiv.appendChild(cellButton);
            })
        })
    }
}

    window.addEventListener("DOMContentLoaded", init);
})();