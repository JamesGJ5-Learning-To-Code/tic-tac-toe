const Player = (marker) => {
    const playerName = prompt(`Marker ${marker} belongs to...`, `Player ${marker}`);
    return {playerName, marker};
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
        const _checkRows = (marker) => {
            return (
                gameboardArray[0] === marker && 
                gameboardArray[1] === marker && 
                gameboardArray[2] === marker || 

                gameboardArray[3] === marker && 
                gameboardArray[4] === marker && 
                gameboardArray[5] === marker || 

                gameboardArray[6] === marker && 
                gameboardArray[7] === marker && 
                gameboardArray[8] === marker
            );
        };
        const _checkColumns = (marker) => {
            return (
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
        const _checkDiagonals = (marker) => {
            return (
                gameboardArray[0] === marker && 
                gameboardArray[4] === marker && 
                gameboardArray[8] === marker ||

                gameboardArray[2] === marker && 
                gameboardArray[4] === marker && 
                gameboardArray[6] === marker
            );
        };
        return (
            _checkRows(marker) || _checkColumns(marker) || _checkDiagonals(marker)
        );
    };
    const checkForTie = () => {
        // TODO: permit ties to be noticed earlier
        return markerCount === gameboardArray.length;
    };
    return {placeMarker, checkForWin, checkForTie};
})();

const game = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let currentPlayer = player1;
    let lastPlayer = player2;
    const play = (index) => {
        gameboard.placeMarker(currentPlayer.marker, index);
        _switchPlayer();
        return lastPlayer;
    };
    const _switchPlayer = () => {
        [currentPlayer, lastPlayer] = [lastPlayer, currentPlayer];
    };
    return {play};
})();

const displayController = (() => {
    const gridDiv = document.querySelector('.grid');
    const resultDiv = document.querySelector('.result')
    const cellDivList = gridDiv.childNodes;
    cellDivList.forEach((cellDiv) => {
        cellDiv.addEventListener('click', () => {
            if (cellDiv.textContent || resultDiv.textContent) {
                return;
            };
            index = parseInt(cellDiv.className);
            lastPlayer = game.play(index);
            _displayMarker(cellDiv, lastPlayer.marker);
            _showResult(lastPlayer);
        });
    });
    const _displayMarker = (cellDiv, marker) => {
        cellDiv.textContent = marker;
    };
    const _showResult = (lastPlayer) => {
        if (gameboard.checkForWin(lastPlayer.marker)) {
            resultDiv.textContent = `${lastPlayer.playerName} wins!`;
        } else if (gameboard.checkForTie()) {
            resultDiv.textContent = 'Tie!';
        };
    };
})();