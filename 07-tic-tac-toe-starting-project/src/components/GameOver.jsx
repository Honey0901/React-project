export default function GameOver({Winner}){
    return <div id="game-over">
        <h2>Game Over</h2>
    {Winner &&<p> {Winner} Won!</p>}
    {!Winner &&<p>It's a Draw</p>}
    <p>
        <button>Rematch!!</button>
    </p>
    </div>
}