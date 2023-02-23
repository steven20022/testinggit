import React from "react";
import CountDown from "react-countdown"

function Completionist(){
  <span>You are good to go!</span>
}

function renderer({hours, minutes, seconds, completed}){
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>
  }
}

function App() {
  return (
    <div>
      <h2>Countdown</h2>
      <div>
        <CountDown
          date={Date.now() + 10000}
          renderer={renderer}
        >
          <Completionist />
        </CountDown>
      </div>
    </div>
  );
}

export default App;
