import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activeplayer,setActivePlayer] = useState('X');
   let currentPlayer= 'X';

      if (prevTurns.length>0 && prevTurns[0].Player === 'X') {
        currentPlayer = 'O';
      }

  function handleSelect(rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X' ));
    setGameTurns((prevTurns) => {
      

      const updatedTurns = [
       {square: {row:rowIndex,col:colIndex},Player: currentPlayer},
    ...prevTurns,
  ];
  return updatedTurns;
      });
  }


   return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
       <Player editablename="Player 1" symbol="X" isActive={activeplayer === 'X'}/>
       <Player editablename="Player 2" symbol="O" isActive={activeplayer === 'O'}/>
      </ol>
      <GameBoard 
      onSelectSquare={handleSelect} 
      turns={gameTurns}/>
    </div>
    <Log turns={gameTurns}/>
   </main>
}

export default App
