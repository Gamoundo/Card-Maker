import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CardForm(props) {
    
    const navigate = useNavigate();
const uname = props.uname

    const [formData, setformData] = useState(
        {
            pic: "",
            recipient: "",
            sender: uname,
            message: "",
            occasion: "",
            tempChoice: 0
        }

    )
    const handleChange = (e) => {
        setformData((prevState) => {
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        }

        )
    }

    const styleChange = (e) => {
        setformData((prevState) => {
            return{
                ...prevState,
                [e.target.name]: parseInt(e.target.value)
            }
        }

        )
        console.log(formData.pic)
        props.setDisplay(formData)
    }

const handleSubmit = (e) => {
    e.preventDefault();
    props.update(formData);
    setformData({
        pic: "",
        recipient: "",
        sender: uname,
        message: "",
        occasion: "",
        tempChoice: 0
    })
    navigate('/')
}


    const   handleFileChange = (e) => {
        setformData((prevState) => {            
             return{
                ...prevState,            
                [e.target.name]: e.target.files[0]            
             }                      
        }            
     
        )            
    } 
    return(
        <div className="cardform">
            <h1> Make Someone's Day</h1>
            <form onSubmit ={handleSubmit}>
                <div>
                    <input onChange={handleFileChange} type='file' name='pic'/>
                </div>
                
                <div>
                    <input onChange={handleChange} placeholder="occasion" value={formData.occasion} type="text" name="occasion"/>
                </div>
                <div>
                    <input onChange={handleChange} placeholder="recipient" value={formData.recipient} type="text" name="recipient"/>
                </div>
                <div>
                    <input onChange={handleChange} placeholder="message" value={formData.message} type="text" name="message"/>
                </div>
                <div>
                    <select onChange={styleChange} placeholder="style" value={formData.tempChoice} name="tempChoice">
                        <option value="1"> 1</option>
                        <option value='2'> 2</option>
                    </select>
                </div>
                <input type="submit" value="New Card"  />
            </form>
        </div>
    )
}

export default CardForm;