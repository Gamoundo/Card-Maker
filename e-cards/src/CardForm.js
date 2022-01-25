import { React } from "react";
import { useState } from "react/cjs/react.production.min";

function CardForm(props) {
    
    const [formData, setformData] = useState(
        {
            photo: "",
            recipient: "",
            sender: "",
            message: "",
            occas: ""
        }
    )
    return(
        <div>
            <h1> Make Someone's Day</h1>
            <form>
                <div>
                    <input type='file' name='photo'/>
                </div>
                <div>
                    <input value={formData.sender} type="text" name="sender"/>
                </div>
                <div>
                    <input value={formData.occas} type="text" name="occas"/>
                </div>
                <div>
                    <input value={formData.recipient} type="text" name="recipient"/>
                </div>
                <div>
                    <input value={formData.message} type="text" name="message"/>
                </div>
            </form>
        </div>
    )
}

export default CardForm;