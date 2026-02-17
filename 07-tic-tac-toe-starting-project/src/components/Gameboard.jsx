

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard=initialGame;

    for (const turn of turns){
        const {square, Player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = Player;
    }

    //     const [gameBoard, setGameBoard] = useState(initialGame);

// function handleCellClick(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard)=>{
//         const updateBoard=[...prevGameBoard.map( innerArray => [...innerArray])];
//         updateBoard[rowIndex][colIndex] = activeplayerSymbol;
//         return updateBoard;
//     });
//     onSelectSquare();
// }
    
    
    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex )=> (
                    <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>;
}