

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, turns}) {
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
                    <li key={colIndex}><button onClick={()=>handleCellClick(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>;
}