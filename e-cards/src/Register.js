import React from 'react';
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate= useNavigate();
  const  setLogin = () => {
    navigate('/login')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let split = email.split('@')
        
        let user = {
            name: split[0]
        }
        window.localStorage.setItem("NewJoy", JSON.stringify(user));
        props.changename(user)
        
        navigate('/')

        

    }
    return(
        <form onSubmit={handleSubmit}>
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