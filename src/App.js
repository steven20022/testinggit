import React from "react";
import CountDown from "react-countdown"

function Completionist(){
  <span style={{
    color : 'red',
    fontWeight: 'bold',
    fontSize: 52}}>You are good to go!</span>
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
    <div style={{
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'white',
      fontSize: 52,
      height: '100hv',
      overflow: 'auto'
    }}>
      <h2>Countdown</h2>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
