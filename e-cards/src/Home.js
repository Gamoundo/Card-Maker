import React, { useState } from 'react';
import CardForm from './CardForm';
import { useNavigate } from "react-router-dom";

function Home(props) {

    const navigate = useNavigate();


console.log(props.name)

const [display, setDisplay] = useState(
    {
        pic: "",
        recipient: "",
        sender: "",
        message: "",
        occasion: "",
        tempChoice: 0
    }

)


const stylecard= (obj) =>{
    if(obj.tempChoice === 1){
        return(
            <div className='tempone'>
                <h1> To {obj.recipient}</h1>
                <img src={obj.pic} alt="something thoughtful probably" width="300px" height="300px"/>
                <p> {obj.message}</p>
                <p>{obj.occasion}</p>
                <p> From {obj.sender}</p>
            </div>
        )
    }else {
        return(
            <div className='temptwo'>
                <p>{obj.occasion}</p>
                
                <p> {obj.message}</p>
                <img src={obj.pic} alt="something thoughtful probably" width="300px" height="300px" />
                
                <h1> To {obj.recipient}</h1>
                <p> Love {obj.sender}</p>
            </div>
        )
    }
    }

const displayCards = (arr) => {
    return (arr.map((obj) => {
        const seeCard = () => {
            props.setCardInfo({
                sender: props.name,
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
             {display.message !== "" && stylecard(display)}
            {props.name !== "" &&  <CardForm uname={props.name} update={props.addCards}  setDisplay={setDisplay}/>} 
        </div>
    )
    
}

export default Home;