import React from 'react';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate= useNavigate();
    const  unregistered = () => {
        navigate.push('/register')
        }
    return(
        <form >
                <div>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                </div>
                
                
                <input type="submit" value="Sign In"  />

                <button onClick={unregistered}> Create Profile</button>
                
                 
            </form>
    )
}

export default Login;