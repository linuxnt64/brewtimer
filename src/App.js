import React, { useState } from 'react';
import './App.css';
import MyTimer from './components/Timer';



function App() {
//const [] = useState(0) 
return (
    <div className="App">
      <div className="container">
        <h1>BrewUp with style, Gentlemen!</h1>
        <div>
          <MyTimer start="-6" />
        </div>
      </div>
    </div>
  );
}

export default App;
