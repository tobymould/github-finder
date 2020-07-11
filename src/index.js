import React from 'react'; //main library
import ReactDOM from 'react-dom'; //rendering in browser
import App from './App'; //the main app component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // what you wanna render (<App />), and where wanna render it ('root')
);
