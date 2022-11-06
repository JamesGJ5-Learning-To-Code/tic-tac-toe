const Player = (marker) => {
    // TODO: add name property when improving the interface
    return {marker};
}

const gameboard = (() => {
    const gameboardArray = Array(9);
    let markerCount = 0;
    const placeMarker = (marker, index) => {
        gameboardArray[index] = marker;
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

const game = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let currentPlayer = player1;
    let marker;
    const play = (index) => {
        marker = currentPlayer.marker;
        gameboard.placeMarker(marker, index);
        _switchPlayer();
        return marker;
    };
    const _switchPlayer = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1
    };
    return {play};
})();

const displayController = (() => {
    const gridDiv = document.querySelector('.grid');
    const resultDiv = document.querySelector('.result')
    const cellDivList = gridDiv.childNodes;
    cellDivList.forEach((cellDiv) => {
        cellDiv.addEventListener('click', () => {
            if (resultDiv.textContent || cellDiv.textContent) {return;};
            index = parseInt(cellDiv.className);
            marker = game.play(index);
            cellDiv.textContent = marker;
            if (gameboard.checkForWin(marker)) {
                resultDiv.textContent = `${marker} wins!`;
            } else if (gameboard.checkForTie()) {
                resultDiv.textContent = 'Tie!';
            };
        });
    });
})();