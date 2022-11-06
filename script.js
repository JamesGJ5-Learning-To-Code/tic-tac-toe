const Player = (marker) => {
    // TODO: add name property when improving the interface
    return {marker};
}

// player1 = Player("X")
// console.log(player1.marker)

const gameboard = (() => {
    const gameboardArray = Array(9);
    let markerCount = 0;
    // console.log(gameboardArray);
    const placeMarker = (marker, index) => {
        gameboardArray[index] = marker;
        console.log(gameboardArray);
        markerCount++;
    };
    const checkForWin = (marker) => {
        // TODO: make the below more concise
        return (
            gameboardArray[0] === marker && 
            gameboardArray[1] === marker && 
            gameboardArray[2] === marker || 

            gameboardArray[3] === marker && 
            gameboardArray[4] === marker && 
            gameboardArray[5] === marker || 

            gameboardArray[6] === marker && 
            gameboardArray[7] === marker && 
            gameboardArray[8] === marker || 

            gameboardArray[0] === marker && 
            gameboardArray[4] === marker && 
            gameboardArray[8] === marker ||

            gameboardArray[2] === marker && 
            gameboardArray[4] === marker && 
            gameboardArray[6] === marker || 

            gameboardArray[0] === marker && 
            gameboardArray[3] === marker && 
            gameboardArray[6] === marker || 

            gameboardArray[1] === marker && 
            gameboardArray[4] === marker && 
            gameboardArray[7] === marker || 

            gameboardArray[2] === marker && 
            gameboardArray[5] === marker && 
            gameboardArray[8] === marker
        );
    };
    const checkForTie = () => {
        return markerCount === gameboardArray.length;
    };
    return {placeMarker, checkForWin, checkForTie};
})();

// gameboard.placeMarker("X", 6);

// Create Game
// Module
// DONE Creates two Players
// Upon receiving the class of the clicked div from displayController:
// NOTE: the below will be enabled through methods belonging to gameboard
// 1) DONE Fills the index with the relevant marker
// 2) Does a win-check (see README.md). If someone wins:
// -- a) DONE Make displayController announce a winner (just using a result div because 
//    alert() is synchronous, meaning, without extra code, it occurs before 
//    the div is filled)
// -- b) DONE Make displayController disable the event listeners
//  3) DONE Returns the marker to displayController

const game = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let currentPlayer = player1;
    let marker;
    const play = (index) => {
        // TODO: put the player-switching logic into its own method
        marker = currentPlayer.marker;
        gameboard.placeMarker(marker, index);
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        };
        return marker;
    };
    return {play};
})();

// Create a displayController object
// Module
// This should have a method that takes the container grid and adds event listeners 
// to it that, ultimately:
// 1. DONE Check for a click (in displayController)
// 2. Check if the div is filled already. If not:
//  a) DONE Supplies the class of the div to Game
//  b) DONE Gets back from the Game the marker of the player whose turn it is
//  c) DONE Sets the marker as the div's textContent

const displayController = (() => {
    const gridDiv = document.querySelector('.grid');
    const resultDiv = document.querySelector('.result')
    const cellDivList = gridDiv.childNodes;
    cellDivList.forEach((cellDiv) => {
        cellDiv.addEventListener('click', () => {
            if (!resultDiv.textContent && !cellDiv.textContent) {
                index = parseInt(cellDiv.className);
                // console.log(index);
                marker = game.play(index);
                cellDiv.textContent = marker;
                if (gameboard.checkForWin(marker)) {
                    resultDiv.textContent = `${marker} wins!`;
                } else if (gameboard.checkForTie()) {
                    resultDiv.textContent = 'Tie!';
                };
            };
        });
    });
})();