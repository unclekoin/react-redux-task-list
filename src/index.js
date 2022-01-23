import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './components/app';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
