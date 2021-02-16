import './App.css';
import React, { createContext, useState } from 'react'; 
import DisplayUsername from './components/DisplayUsername';
import ChangeUsername from './components/ChangeUsername';

//Skapar upp vårt context, kan liknas med createStore i redux
const UserContext = createContext(undefined);
const UpdateContext = createContext(undefined);

function App() {
  const [username, setUsername] = useState('Christoffer');

  return (
    <div className="App">
      { /* Gör vårt context tillgängligt för komponenterna som ligger i och sätter ett värde */ }
      { /* Detta värde är det värde vi vill kunna nå i andra komponenter */ }
      <UserContext.Provider value={ username }>
        <UpdateContext.Provider value={ setUsername }>
          <DisplayUsername />
          <ChangeUsername />
        </UpdateContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
