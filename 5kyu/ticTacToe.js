// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
function isSolved(board) {

    function checkHor() {
        let res;
        board.forEach(function (item) {
            if (item[0] == item[1] &&
                item[0] == item[2] &&
                item[1] == item[2] &&
                item[0] != 0)
                res = item[0];
        });
        return res;
    }

    function checkVer() {
        for (let a = 0; a < 3; a++) {
            if (board[0][a] == board[1][a] &&
                board[1][a] == board[2][a] &&
                board[2][a] == board[0][a] &&
                board[0][a] != 0)
                return board[0][a];
        }
    }

    function checkA1() {
        if ((board[0][0] == board[1][1] &&
            board[1][1] == board[2][2] &&
            board[2][2] == board[0][0]) ||
            (board[0][2] == board[1][1] &&
                board[1][1] == board[2][0] &&
                board[2][0] == board[0][2]))
            return board[1][1];
    }


    function gameOver() {
        for (let x = 0; x < 3; x++)
            for (let y = 0; y < 3; y++)
                if (board[x][y] == 0)
                    return -1;
        return 0;
    }

    return checkHor() || checkVer() || checkA1() || gameOver();
}