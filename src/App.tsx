import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Cards from './features/covid/Cards/Cards';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
      </header>
    </div>
  );
}

export default App;
