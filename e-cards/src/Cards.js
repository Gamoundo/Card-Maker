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
        sender: "Joel",
        recipient: "Em",
        pic: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg',
        message: "Still the greatest time I ever had",
        tempChoice: 1,
        occasion: "Happy Birthday"   
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
        sender: "Joel",
        recipient: "Em",
        pic: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg',
        message: "Still the greatest time I ever had",
        tempChoice: 2,
        occasion: "Happy Birthday"
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