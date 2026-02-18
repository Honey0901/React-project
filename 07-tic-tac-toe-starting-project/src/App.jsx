import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winningcombo";
import GameOver from "./components/GameOver";


const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePLayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].Player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activeplayer,setActivePlayer] = useState('X');

  

  const activeplayer = deriveActivePLayer(gameTurns);


  let gameBoard = initialGame;

  for (const turn of gameTurns) {
    const { square, Player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = Player;
  }

  let Winner;



  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if (firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare) {
      Winner = firstSquare;
    }
  }

  let hasDraw = gameTurns.length ===9 && !Winner;

  function handleSelect(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X' ));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePLayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, Player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }



  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player editablename="Player 1" symbol="X" isActive={activeplayer === 'X'} />
          <Player editablename="Player 2" symbol="O" isActive={activeplayer === 'O'} />
        </ol>
        {(Winner || hasDraw) && <GameOver Winner={Winner}/>}
        <GameBoard
          onSelectSquare={handleSelect}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
