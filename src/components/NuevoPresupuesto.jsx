import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  //------------------------------------------------------------------------------- 
  /* asi se le nombra en react a alguna funcion que sirva para administrar algo */
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('no es un presupuesto valido');
    } else{
      setMensaje('si es un presupuesto valido');
    }

  } /* Fin de handlePresupuesto */
  //------------------------------------------------------------------------------- 

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>

                <label> Defenir Presupuesto</label>
              
                <input /* imput */
                  className='nuevo-presupuesto' 
                  type="text" 
                  placeholder='Añade tu Presupuesto'
                  value={presupuesto} /* se ingresa el valor inicial (0) que ingrese en app.jsx del useState */
                  onChange = { e => setPresupuesto(e.target.value)}/* lo que el usuario esta agregando en este input 
                                                                      se vaya agregando en la variable de setPresupuesto*/
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