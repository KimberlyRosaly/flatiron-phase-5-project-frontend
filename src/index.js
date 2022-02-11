// THIS PAGE LOADS UP AFTER INDEX.HTML
//! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=I M P O R T S
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { BrowserRouter as Router } from 'react-router-dom';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=R E D U X related
//                                           THE BASICS
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                                MINE
import artGalleryReducer from './reducers/artGalleryReducer'
//! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=I M P O R T S end 

//* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=H O O K U P S
//                        MAKE R E D U X FUN & EASY

// HOOK UP DEVTOOLS ACCESS FOR BROWSER or JUST SET TO COMPOSE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// DECLARE & CREATE THE GLOBAL STORE OBJECT | HAND IT THE REDUCER | CALL FUNCTION TO CREATE THE THUNK ASYNC BRIDGE, ENHANCED WITH COMPOSE
let store = createStore( artGalleryReducer, composeEnhancers(applyMiddleware(thunk)) )

//* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-H O O K U P S end

//? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=
// DETERMINE WHAT TO RENDER ON THE USER'S PAGE, USING REACT
ReactDOM.render(
  <React.StrictMode>

            {/* WRAP PARENT COMPONENT TO ALLOW CHILDREN STORE ACCESS */}
            <Provider store={ store }>


                {/* WRAP WITH 'ROUTER' ALIAS TO DECLARE URLS */}
                <Router>

                      {/* LOAD UP THE APP COMPONENT IMPORTED UP TOP */}
                      <App />

                </Router>

            </Provider>

  </React.StrictMode>,

  // FIND THE ELEMENT WITH THE ID OF ROOT, DELCARED IN INDEX.HTML
  // LATCH ONTO ELEMENT AND RENDER THERE
  document.getElementById('root')
);
//? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=