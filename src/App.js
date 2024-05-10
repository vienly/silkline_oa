import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [greenOn, setGreenOn] = useState(true);
  const [yellowOn, setYellowOn] = useState(false);
  const [redOn, setRedOn] = useState(false);

  const changeColorYellow = () => {
    setGreenOn(false);
    setYellowOn(true);
    setRedOn(false);
    setTimeout(() => {
      changeColorRed();
    }, 1000);
  }

  const changeColorRed = () => {
    setGreenOn(false);
    setYellowOn(false);
    setRedOn(true);
    setTimeout(() => {
      changeColorGreen();
    }, 2000);
  }

  const changeColorGreen = () => {
    setGreenOn(true);
    setYellowOn(false);
    setRedOn(false);
    setTimeout(() => {
      changeColorYellow();
    }, 5000);
  }

  useEffect(() => {
    changeColorGreen();
  }, []);

  return (
    <div className="stoplight-container">
      <div className="stoplight-box">
        <div className={`light green ${greenOn ? 'on' : 'off'}`} />
        <div className={`light yellow ${yellowOn ? 'on' : 'off'}`} />
        <div className={`light red ${redOn ? 'on' : 'off'}`} />
      </div>
    </div>
  );
}

export default App;
