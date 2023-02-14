import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Login from './components/Login/login.js';
import SignUp from './components/SignUp/signUp.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
