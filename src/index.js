// THIS PAGE LOADS UP AFTER INDEX.HTML
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=REDUXrelated
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTSend


// DECLARE & CREATE THE GLOBAL STORE OBJECT | HAND IT THE REDUCER | CALL FUNCTION TO CREATE THE THUNK ASYNC BRIDGE
let store = createStore(reducer, applyMiddleware(thunk))


// DETERMINE WHAT TO RENDER ON THE USER'S PAGE, USING REACT
ReactDOM.render(
  <React.StrictMode>

            {/* WRAP PARENT COMPONENT TO ALLOW CHILDREN STORE ACCESS */}
            <Provider>

                      {/* LOAD UP THE APP COMPONENT IMPORTED UP TOP */}
                      <App />

            </Provider>

  </React.StrictMode>,

  // FIND THE ELEMENT WITH THE ID OF ROOT, DELCARED IN INDEX.HTML
  // LATCH ONTO ELEMENT AND RENDER THERE
  document.getElementById('root')
);
