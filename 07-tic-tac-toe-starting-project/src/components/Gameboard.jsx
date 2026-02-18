



export default function GameBoard({onSelectSquare, board}) {
   
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
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex )=> (
                    <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                        {playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>;
}