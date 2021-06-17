import React from "react";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import "./App.css";
import Portrait from './portrait.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="information">
          <h2>Welcome to the V Society</h2>
          <h1>Viktor Phan</h1>
          <p>
            10 years participating in self declared charitable activities, Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ullam error hic
            ipsam praesentium accusantium minima laudantium! Reprehenderit harum
            vel incidunt reiciendis assumenda maiores unde porro praesentium,
            doloribus dignissimos culpa maxime.
          </p>
          <div className="options">
            <p>
              Call me <CallIcon />
            </p>
            <p>
              Email me <EmailIcon />
            </p>
          </div>
        </div>
        <img src={Portrait} alt="" />
      </div>
    </div>
  );
}

export default App;
