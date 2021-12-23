import React, { useState } from 'react'

function SignIn() {
    
    const unregistered = () => {
        setregister(
            <form >
                <div>
                    <h1>Signup</h1>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                </div>
                
                
                <input type="submit" value="Signup"  />

                
                
                 
            </form>
        )
    }


    const [registered, setregister] =useState(
        <form >
                <div>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                </div>
                
                
                <input type="submit" value="Sign In"  />

                <button onClick={unregistered}> Create Profile</button>
                
                 
            </form>
    )
    return(
        <div className="form">
            {registered}
        </div>
    )
}



export default SignIn;
