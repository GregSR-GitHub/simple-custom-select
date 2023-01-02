import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [select, setSelect] = useState("Aucune sélection");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vous avez selectionné: {select}.
        </p>
      </header>
    </div>
  );
}

export default App;
