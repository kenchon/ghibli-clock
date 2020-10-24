import React, { createContext, useState, useEffect } from 'react';
import Photo from './Photo';
import './App.css';

export const ClockContext = createContext(new Date())

function App() {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    let timerId = setInterval(()=>tick(),1000);
    return function cleanup(){
        clearInterval(timerId);
    };
  })

  function tick() {
      setCurrentTime(new Date())
  }

  return (
    <div className="App">
      <ClockContext.Provider value={currentTime}>
        <Photo />
      </ClockContext.Provider>
    </div>
  );
}

export default App;
