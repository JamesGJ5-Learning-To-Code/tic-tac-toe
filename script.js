const Player = (marker) => {
    // TODO: add name property when improving the interface
    return {marker};
}

// player1 = Player("X")
// console.log(player1.marker)

const gameboard = (() => {
    const gameboardArray = Array(9);
    // console.log(gameboardArray);
    const placeMarker = (marker, index) => {
        gameboardArray[index] = marker;
        // console.log(gameboardArray);
    };
    return {placeMarker};
})();

// gameboard.placeMarker("X", 6);

// Create Game
// Module
// DONE Creates two Players
// Upon receiving the class of the clicked div from displayController:
// NOTE: the below will be enabled through methods belonging to gameboard
// 1) Fills the index with the relevant marker
// 2) Does a win-check (see README.md). If someone wins:
// -- a) Make displayController announce a winner (e.g. by alert, can just alert 
//      the marker for now)
// -- b) Make displayController disable the event listeners
//  3) Returns the marker to displayController

const game = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
})();

// Create a displayController object
// Module
// This should have a method that takes the container grid and adds event listeners 
// to it that, ultimately:
// 1. Check for a click (in displayController)
// 2. Check if the div is filled already. If not:
//  a) Supplies the class of the div to Game
//  b) Gets back from the Game the marker of the player whose turn it is

const displayController = (() => {
    const gridDiv = document.querySelector('.grid');
    // const cellDivList = gridDiv.childNodes;
    // cellDivList.forEach((cellDiv) => {
    //     cellDiv.addEventListener('click', () => {
            
    //     });
    // });
})();