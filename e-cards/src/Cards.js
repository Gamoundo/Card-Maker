import React from 'react'

function Cards(){

const cardInfo = {
    sender: "Joel",
    recipient: "Em",
    pic: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg',
    message: "Still the greatest time I ever had",
    tempChoice: 1,
    occasion: "Happy Birthday"
}

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
            <h1> To {obj.recipient}</h1>
            <img src={obj.pic} alt="something thoughtful probably" />
            <p> {obj.message}</p>
            <p>{obj.occasion}</p>
            <p> Love {obj.sender}</p>
        </div>
    )
}
}


    return(
        <div>
            <h1>Card Templates</h1>
            {stylecard(cardInfo)}
        </div>
    )
}

export default Cards;