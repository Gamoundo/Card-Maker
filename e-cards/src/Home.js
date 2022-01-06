import React from 'react';

function Home(props) {
    return(
        <div>
            {props.name === "" ? <h1>The Homepage</h1>: <h1> {props.name}'s Homepage</h1>}
            <p>A place too make cards for loved ones</p>
        </div>
    )
    
}

export default Home;