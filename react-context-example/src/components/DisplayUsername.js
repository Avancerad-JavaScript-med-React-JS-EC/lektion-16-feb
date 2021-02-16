import React, { useContext } from 'react';
import { UserContext } from '../App';

function DisplayUsername() {
    //Hämta vårt context från App.js som argument skickar vi in vårt context-objekt
    //som vi importerat från App.js
    const username = useContext(UserContext);
    console.log(username);
    return (
        <h2>Hej { username }</h2>
    )
}

export default DisplayUsername;