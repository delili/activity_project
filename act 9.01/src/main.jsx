import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // No curly braces, because it's a default export

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
