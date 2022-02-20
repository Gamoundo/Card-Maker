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
            occasion: ""
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

const handleSubmit = (e) => {
    e.preventDefault();
    props.update(formData);
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
                <input type="submit" value="New Card"  />
            </form>
        </div>
    )
}

export default CardForm;