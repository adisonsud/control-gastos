import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  //------------------------------------------------------------------------------- 
  /* asi se le nombra en react a alguna funcion que sirva para administrar algo */
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto valido')
      return /* si cumple con esta condicion termina aqui con el return*/
    } 
    setMensaje('') /* si se corrije y se pone un presupuesto valido se borra el mensaje de error del State */
  
  //------------------------------------------------------------------------------- 
  /* si el presupuesto es válido */
  setIsValidPresupuesto(true)
  
  } /* Fin de handlePresupuesto */
  //------------------------------------------------------------------------------- 

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>

                <label> Defenir Presupuesto</label>
              
                <input /* imput */
                  className='nuevo-presupuesto' 
                  type="number" 
                  placeholder='Añade tu Presupuesto'
                  value={presupuesto} /* se ingresa el valor inicial (0) que ingrese en app.jsx del useState */
                  onChange = { e => setPresupuesto(Number(e.target.value))} /* lo que el usuario esta agregando 
                  en este input se irá agregando en la variable de setPresupuesto*/
                /> {/* fin del input */}
            
            </div>

            <input type="submit" value="Añadir"/>

            {/* tenemos el children al cual le pasamos todo el mensaje */}
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} 

        </form> {/* Fin de Formulario */}
    </div>
  )
}

export default NuevoPresupuesto