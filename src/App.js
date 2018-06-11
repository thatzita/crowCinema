import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'

import firebase from './firebase.js';


const App = () => (
  <div>
    <Navbar />
    <Main />
  </div>
)

export default App;
