import { useState } from "react";
import classes from "./CheckoutForm.module.css";
import Swal from 'sweetalert2'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false); 
  const [emailConfirmation, setEmailConfirmation] = useState(""); 

  const handleConfirm = (event) => {
    event.preventDefault();

    // Validaciones 
    if (name.trim() === "") {
      Swal.fire('Por favor, ingrese su nombre')
      
      return;
    }

    if (phone.trim() === "") {
      Swal.fire('Por favor, ingrese su telefono')
      return;
    }

    if (email.trim() === "") {
      Swal.fire('Por favor, ingrese su email')
      return;
    }

    // Valid. de coincidencia para email
    if (email !== emailConfirmation) {
      
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los email no coinciden',
      
      })

      setEmailError(true)

      setTimeout(() => {
        setEmailError(false); 
      }, 5000);
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div >
      <form className={classes.containerForm} onSubmit={handleConfirm}>
        <label>
          Nombre
          <input
            type="text"
            className={classes.input}
            value={name}
            onChange={({ target }) => setName(target.value)}/>
        </label>
        <label>
          Telefono
          <input
            type="text"
            className={classes.input}
            value={phone}
            onChange={({ target }) => setPhone(target.value)}/>
        </label>
        <label>
          email
          <input
            type="email"
            className={classes.input}
            value={email}
            onChange={({ target }) => setEmail(target.value)}/>
        </label>
        <label>
          Confirmar email
          <input
            type="email"
            className={`${classes.input} ${emailError ? classes.inputError : ""}`}
            value={emailConfirmation}
            onChange={({ target }) => setEmailConfirmation(target.value)}/>
        </label>
        <div>
          <button type="submit" className={classes.buttonSubmit}>
            Crear orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
