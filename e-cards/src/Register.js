import React from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate= useNavigate();
  const  setLogin = () => {
    navigate.push('/login')
    }
    
    return(
        <form >
                <div>
                    <h1>Signup</h1>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                </div>
                
                <div>
                    <input type="submit" value="Signup"  />
                    <button onClick={setLogin}> Login?</button>
                </div>
                

                
                
                 
            </form>
    )
}

export default Register;