// App.js
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    },1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <p>Now the time is</p>
      <p>{time}</p>
    </div>
  );
}



export default App;