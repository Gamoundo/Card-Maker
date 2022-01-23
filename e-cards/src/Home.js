import React from 'react';

function Home(props) {
const userCards = [
    {
        recipient: "L",
        occasion: "Congrats on Marriage",
        message: "Smartest decision you ever made",
        sender: "akilgg"
    },
    {
        recipient: "Manny",
        occasion: "Birthday",
        message: "one step closer to death",
        sender: "akilgg"
    },
    {
        recipient: "Lisa",
        occasion: "Promotion",
        message: "Get it girl",
        sender: "akilgg"

    }
]

const displayCards = (arr) => {
    return (arr.map((obj) => {
        return(
            <div className='usercard'>
                <p> {obj.recipient}</p>
                <p> {obj.occasion}</p>
                <p> {obj.message}</p>
            </div>
        )
    })
    )
    }

    return(
        <div>
            {props.name === "" ? <h1>The Homepage</h1>: <h1> {props.name}'s Homepage</h1>}
            <p>A place too make cards for loved ones</p>
             <div className='sidebar'>
                {props.name !== "" && displayCards(userCards)}
             </div>
        </div>
    )
    
}

export default Home;