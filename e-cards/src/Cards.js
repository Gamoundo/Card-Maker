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

const sampleCards = [
    {
        sender: "Joanna",
        recipient: "Alex",
        pic: 'https://image.shutterstock.com/z/stock-vector-drawing-of-cute-christmas-reindeer-1570187782.jpg',
        message: "Doubt there'll be happier times than this, but I guess I'm in the holiday spirit.",
        tempChoice: 1,
        occasion: "Merry Christmas"   
    },
    {
        sender: "Joel",
        recipient: "Em",
        pic: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg',
        message: "Still the greatest time I ever had",
        tempChoice: 2,
        occasion: "Happy Birthday"
    },
    {
        sender: "Hawthorn",
        recipient: "Sarah",
        pic: 'https://cdn1.vectorstock.com/i/1000x1000/91/05/happy-valentines-day-romantic-greeting-card-vector-23729105.jpg',
        message: "Don't regret meeting you, yet",
        tempChoice: 2,
        occasion: "Valentines"
    }
]

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
    return stylecard(obj)
})
)
}




    return(
        <div>
            <h1>Most Popular Card</h1>
            {stylecard(cardInfo)}
            <div >
                <h3> Sample Cards</h3>
                <div className='row'>
                {displayCards(sampleCards)}
                </div>
                
            </div>
        </div>
    )
}

export default Cards;