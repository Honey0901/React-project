import { useState } from "react";

export default function Player({ editablename, symbol,isActive }) {
    const [playerName, setPlayerName] = useState(editablename);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing((prev) => !prev);
    }
    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }

    let editablername =<span className="player-name">{playerName}</span>
    // let btnCaption = "Edit";
    if (isEditing) {
        editablername = 
            <input type="text" required value={playerName} onChange={handleNameChange} />;
        // btnCaption = "Save";
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablername}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
            <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
        </li>
    );
}
