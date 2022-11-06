# Suggestions from TOP

1. DONE Store gameboard as array in Gameboard object
- DONE Gameboard will be made using a module
- DONE Just going to store it as an array with 9 spaces; initially, going to have it contain empty values
2. DONE Players stored in objects
- DONE Players will be made using factory functions
- DONE Will have to store a player's marker as a property
3. DONE Object to control game flow may be useful

- Main goal: have as little global code as possible.
- Use modules when you only ever need one of something (e.g. gameBoard, displayController)
- Use factories if you need multiple of something (e.g. players)

4. DONE Set up your HTML [and CSS]
- DONE Probably going to simply have 9 divs
- DONE Give each div a class equal to its zero-index position (for later filling in the gameboardArray upon click if unoccupied)
- DONE Going to position the 9 divs in a 3 x 3 grid in css
- DONE Going to put the 9 divs in an outer div whose display will be made grid in style.css

5. DONE Write a JavaScript function that'll render the contents of the gameboard array to the webpage (can maunally fill in the array with Xs and Os for now)
6. DONE Write JS functions to let players mark specific spot on board, then tie it to DOM, letting players click the gameboard to place their marker, disallowing players from playing in taken spots
- DONE I guess a click will mean placement, so I guess I'll add a click-event listener to the divs
- DONE As well as the click, will have to know which player did the click--I guess we could have a note of that in the JS file, and when a click is done, that player will have been registered as doing the clicking, then when play is made successfully, the current player will switch over
- DONE In order to know which index of gameboard array to fill, could use the class of each div (which may be a number indicating its zero-indexed position)

- Should be able to fit each piece of functionality in the game, player or gameBoard objects
- Brainstorm this aspect

7. DONE Write logic to check when a game is over (i.e. 3-in-a-row or a tie)
- DONE To check for a win:
-- Use the marker of the person who just played as the marker whose sequences are checked for
-- To check for a horizontal 3 in a row, it would be if, in the gameboard array, 3 consecutive index positions all had one player's marker in it. The combination of indices would be: 0, 1, 2; 3, 4, 5; or 6, 7, 8. Increments of 1.
-- To check for a diagonal 3 in a row, the combinations would simply be 0, 4, 8; or 2, 4, 6. Increments of 4 and 2 respectively.
- To check for a vertical 3 in a row, the combinations would be 0, 3, 6; 1, 4, 7; or 2, 5, 8. Increments of 3.
- To check for a tie, a simple way would be one that works in the event a game becomes a tie, but doesn't work right away. Simplest thing to do would be to, if the gameboard array is full of non-empty values and no one has won, then register a tie--if players notice a tie is the case earlier before filling up the gameboard array, they can restart if they really want to. It's only 9 goes in total at the most anyway.

# Interface

1. Allow players to put in their names
2. Include a button to start/restart the game
3. Add a display element that congratulates the winning player