// Load the container grid from index.html

// Create two Players
// Factory
// Single attribute must be contained in each for now: their marker (as a string)

// Create Gameboard
// Module
// Contains an array of length 9, initialised with values of null

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