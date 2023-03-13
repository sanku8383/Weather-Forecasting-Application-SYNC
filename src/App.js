import React from "react";
import './App.css';
import CurrentLocation from './currentlocation';
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation/>
      </div>
      <div className="footer-info">
         Developed by{" "}
        <a target="_blank" href=" ">
          Sanket Bhosale
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
