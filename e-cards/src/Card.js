import React from 'react';

function Card(props) {
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
    return (
        <div>
            <h1> user created card</h1>
            {stylecard(props.card)}            
        </div>
    )
}

export default Card;