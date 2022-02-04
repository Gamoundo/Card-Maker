import { React } from "react";
import { useState } from "react/cjs/react.production.min";

function CardForm() {
    
    const [formData, setformData] = useState(
        {
            photo: "",
            recipient: "",
            sender: "",
            message: "",
            occas: ""
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
        <div>
            <h1> Make Someone's Day</h1>
            <form>
                <div>
                    <input onChange={handleFileChange} type='file' name='photo'/>
                </div>
                <div>
                    <input onChange={handleChange} value={formData.sender} type="text" name="sender"/>
                </div>
                <div>
                    <input onChange={handleChange} value={formData.occas} type="text" name="occas"/>
                </div>
                <div>
                    <input onChange={handleChange} value={formData.recipient} type="text" name="recipient"/>
                </div>
                <div>
                    <input onChange={handleChange} value={formData.message} type="text" name="message"/>
                </div>
            </form>
        </div>
    )
}

export default CardForm;