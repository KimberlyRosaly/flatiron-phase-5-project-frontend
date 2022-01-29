import React from 'react';
import './App.css';

// RUN APP AS CLASS COMPONENT FOR ADDED FUNCTIONALITY
// ACCESS TO STATE AND LIFECYCLE METHODS
class App extends React.Component {

// = - = - = - = - = - = - = - = - = - = - = T E S T I NG
  // PLAY WITH A LIFECYCLE METHOD
  componentDidMount() {
    // MAKE A BASIC, DEFAULT 'GET' FETCH REQUEST
    fetch('http://127.0.0.1:3001/api/v1/artists')
    // CHAIN TO HANDLE THE RECEIVED ASYNCHRONOUS RESPONSE
    // RECEIVE THE PROMISE *THEN* FORMAT INTO JAVASCRIPT OBJECT NOTATION
    .then(response => response.json())
    // *THEN* DO SOMETHING WITH THE JSON DATA
    .then(data => console.log(data))
    // .then(data => console.log(data[0].name))    <---RETURNS 1ST OBJECT'S NAME ATTRIBUTE IN RETURNED ARRAY
  }
// = - = - = - = - = - = - = - = - = - = - = TESTINGend

  render() {
    return (
      <div className="App">
        THIS IS THE 'APP' COMPONENT
        <br/>
        ♥
      </div>
    )}}

export default App;
