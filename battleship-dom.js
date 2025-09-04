// battleship-dom.js 


// IIFE (Immediately Invoked Function Expression)
// les paranthèses transforment la fonction en expression et non en déclaration
(function() {
    function init() {
        console.log("Init DOM"); 
    }

    window.addEventListener("DOMContentLoaded", init);  
})();