import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    function handleNameChange(event) {
        setIsEditing(true);
    }
    return (
        <>
            {isEditing ? (
                <li>
                    <input className='player-name' type="text" required onChange={handleNameChange} />
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={() => setIsEditing(false)}>Save</button>
                </li>
            ) : (
                <li>
                    <span className="player-name">{name}</span>
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleNameChange}>Edit</button>
                </li>
            )}
        </>
    );
}
