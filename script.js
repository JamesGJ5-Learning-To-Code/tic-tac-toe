// Load the container grid from index.html
// TODO: later, maybe put even the below query selection into one of the modules
// or factories, considering displayController first

const gridDiv = document.querySelector('.grid');

// Create two Players
// Factory
// Single attribute must be contained in each for now: their marker (as a string)

const Player = (marker) => {
    // TODO: add name property when improving the interface
    return {marker};
}

// player1 = Player("X")
// console.log(player1.marker)

// Create Gameboard
// Module
// Contains an array of length 9, initialised with empty elements

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
// Takes the two Players for creation, as well as the Gameboard
// Upon receiving the class of the clicked div from displayController:
// 1. Checks that the index of Gameboard equal to Number(class) is not already 
// occupied.
// 2. If not:
// -- a) Fills the index with the relevant marker
// -- b) Does a win-check (see README.md). If someone wins:
// ---- i) Make displayController announce a winner (e.g. by alert, can just alert 
//      the marker for now)
// ---- ii) Make displayController disable the event listeners
//  -- c) Returns the marker to displayController
// Else:
// -- Returns undefined to displayController (can simply use 'return;')

// Create a displayController object
// Module
// This should have a method that takes the container grid and adds event listeners 
// to it that, ultimately:
// 1. Check for a click (in displayController)
// 2. Supplies the class of the div to Game
// 3. Gets back from the Game the marker of the player whose turn it is if 
// anything should be played, else undefined