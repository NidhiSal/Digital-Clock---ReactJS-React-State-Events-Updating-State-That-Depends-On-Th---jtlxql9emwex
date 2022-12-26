import React, { useState} from "react";
import "../styles/App.css";
const App = () => {
  const [clockState, setClockState] = useState();

  setInterval(() => {
    let date = new Date()
    setClockState(date.toLocaleString());
  }, 1000);


  return (
    <div id="main">
      <div className="date-time">{clockState}</div>
    </div>
  );
};

export default App;
