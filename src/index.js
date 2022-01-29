// THIS PAGE LOADS UP AFTER INDEX.HTML
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=REDUXrelated
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IMPORTSend

// HOOK UP DEVTOOLS ACCESS FOR BROWSER or JUST SET TO COMPOSE()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// DECLARE & CREATE THE GLOBAL STORE OBJECT | HAND IT THE REDUCER | CALL FUNCTION TO CREATE THE THUNK ASYNC BRIDGE, ENHANCED WITH COMPOSE
let store = createStore( reducer, composeEnhancers(applyMiddleware(thunk)) )

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=