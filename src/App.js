import React, { useEffect,useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Login from './components/Login/login.js';
import SignUp from './components/SignUp/signUp.js';
import './App.css';
import { auth } from "./firebase.js";

function App() {

  const[userName,setuserName]=useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setuserName(user.displayName);
      }else setuserName("");
    }    
  )});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Home name={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
