// battleship-dom.js 


// IIFE (Immediately Invoked Function Expression)
// les paranthèses transforment la fonction en expression et non en déclaration
(function() {
    function init() {
        console.log("Init DOM"); 

        const boardDiv = document.querySelector(".board")

        const board = new Gameboard(); 
        board.grid.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellButton = document.createElement("button"); 
                cellButton.classList.add("cell"); 
                cellButton.dataset.row = rowIndex; 
                cellButton.dataset.column = columnIndex;
                cellButton.text = cell.value; 
                boardDiv.appendChild(cellButton);
            })
        })
    }

    window.addEventListener("DOMContentLoaded", init);  
})();