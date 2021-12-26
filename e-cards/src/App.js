
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Register from './Register';
import Login from './Login';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const [uname,setuname] =useState(
    ""
  )

const register = () => {
  navigate.push('/register')
}

const login = () => {
  navigate.push('/login')
}

  const changename = (name) => {
    setuname(name)
  }
  return (
    
      <div className="App">
      <h1>Card Maker</h1>
        <div>
        {uname === "" && <button onClick={register}> Signup?</button>}
        {uname === "" && <button onClick={login}> Login?</button>}
        </div>
      
      </div>
      
    
    
  );
}

export default App;
