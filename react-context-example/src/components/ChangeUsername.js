import React, { useState, useContext } from 'react';
import { UserContext, UpdateContext } from '../App';

function ChangeUsername() {
    const user = useContext(UserContext);
    const update = useContext(UpdateContext);
    const [username, setUsername] = useState(user);

    return (
        <section>
            <h2>Byt användarnamn</h2>
            <input type="text" value={ username } onChange={ (event) => setUsername(event.target.value)} />
            <button onClick={ () => update(username) }>Ändra</button>
        </section>
    )
}

export default ChangeUsername;