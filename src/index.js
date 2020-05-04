import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './layout/Header'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div className="container">
      <Header />
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);

