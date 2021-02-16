import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

function ChangeUsername() {
    const user = useContext(UserContext);
    const [username, setUsername] = useState(user);

    return (
        <section>
            <h2>Byt användarnamn</h2>
            <input type="text" value={ username } onChange={ (event) => setUsername(event.target.value)} />
            <button>Ändra</button>
        </section>
    )
}

export default ChangeUsername;