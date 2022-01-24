// THIS PAGE LOADS UP AFTER INDEX.HTML
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTSend


// DETERMINE WHAT TO RENDER ON THE USER'S PAGE, USING REACT
ReactDOM.render(
  <React.StrictMode>

    {/* LOAD UP THE APP COMPONENT IMPORTED UP TOP */}
    <App />

  </React.StrictMode>,

  // FIND THE ELEMENT WITH THE ID OF ROOT, DELCARED IN INDEX.HTML
  // LATCH ONTO ELEMENT AND RENDER THERE
  document.getElementById('root')
);
