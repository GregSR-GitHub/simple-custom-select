import logo from './logo.svg';
import { useState } from 'react'
import SimpleCustomSelect from './lib';
import './App.css';

function App() {
  const [select, setSelect] = useState("Aucune sélection");
  const options = ["Option 1", "Option 2", {value: "Gateau", name: "Option 3"}, "Option 4" ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <SimpleCustomSelect options={options} name="test-select" setState={setSelect}/>
          Vous avez selectionné: {JSON.stringify(select)}.
        </div>
      </header>
    </div>
  );
}

export default App;
