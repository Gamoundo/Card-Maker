import React, { useState } from 'react';
import CardForm from './CardForm';
import { useNavigate } from "react-router-dom";

function Home(props) {

    const navigate = useNavigate();




const displayCards = (arr) => {
    return (arr.map((obj) => {
        const seeCard = () => {
            props.setCardInfo({
                sender: props.uname,
                recipient: obj.recipient,
                pic: obj.pic,
                occasion: obj.occasion,
                message: obj.message,
                tempChoice: obj.tempChoice
                
            })
                  navigate('/Card')
          }
        return(
            <div className='usercard' onClick={seeCard}>
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
                {props.name !== "" && displayCards(props.cards)}
             </div>
            {props.name !== "" &&  <CardForm uname={props.name} update={props.addCards} />} 
        </div>
    )
    
}

export default Home;