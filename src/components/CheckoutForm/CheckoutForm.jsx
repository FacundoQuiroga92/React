import { useState } from "react";
import classes from "./CheckoutForm.module.css";


const CheckoutForm = ({onConfirm}) => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    
    const handleConfirm = (event) => {
        event.preventDefault()

        //validaciones para phone y name
        if (name.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
          }
      
          if (phone.trim() === "") {
            alert("Por favor, ingresa tu número de teléfono.");
            return;
          }

        const userData= {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className="classes.containerForm">
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input type="text" className="input" value={name}
                    onChange={({target}) => setName(target.value) } />
                </label>
                <label>
                    Telefono
                    <input type="text" className="input" value={phone}
                    onChange={({target}) => setPhone(target.value) } />
                </label>
                <label>
                    email
                    <input type="email" className="inpunt" value={email}
                    onChange={({target})=> setEmail(target.value)} />
                </label>
                <div>
                    <button type="submit" className="buttonSubmit">
                        crear orden
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CheckoutForm;