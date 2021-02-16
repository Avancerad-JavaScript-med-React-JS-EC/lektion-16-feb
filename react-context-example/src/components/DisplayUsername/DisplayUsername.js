import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Styles from './displayusername.module.css';

function DisplayUsername() {
    //Hämta vårt context från App.js som argument skickar vi in vårt context-objekt
    //som vi importerat från App.js
    const username = useContext(UserContext);
    console.log(username);
    return (
        <h2 className={ Styles.title }>Hej { username }</h2>
    )
}

export default DisplayUsername;