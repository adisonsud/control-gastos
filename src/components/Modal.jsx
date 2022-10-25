/* Modal es e toda la pantalla que aperece al precionar el agregar "+" */
import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg' 
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  

  const ocultarModal = () => {
    /* esto permite ocultar el modal */
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)  
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault(); /* se usa para prevenir la accion por default que es enviar el formulario */
    
    /* le decimos si alguno de los tres esta vacio entoncess */
    if ([nombre, cantidad, categoria].includes('')) {
      
    } else {
      
    }
  }

  return (
    <div className="modal">
        {/* --------------------------------------------------- */}
        {/* Boton cerrar */}
        <div className="cerrar-modal">
            <img 
              src={CerrarBtn} 
              alt="cerrar modal" 
              onClick={ocultarModal}
              />
        </div> {/* fin del boton cerrar */}

        {/* --------------------------------------------------- */}
        {/* formulario */}
        {/* le agrego la clase ""formulario */}
        {/* si animarModal es true entonces le agrego la clase de animar el cual tiene opacity: 1*/}
        {/* sino entonces le agrego la clase cerrar el cual tiene opacity: 0*/}
        <form 
          onSubmit={handleSubmit} /* configuracion para enviar form */
          className={`formulario ${animarModal ? "animar" : 'false' }`}
        >
          
          <legend>Nuevo Gasto</legend>
          
          {/* Nombre */}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label> {/* label */}
            <input 
                id='nombre' 
                type="text" 
                placeholder='Añade el nombre del gasto'
                /* es importante llamar el state con value de lo contrario no sincronizara bien */
                value= {nombre} /* si lo dejamos vacio no nos permitira escribir */
                
                /* seguido le vamos a asociar el evento que va ir actualizando el state  */
                onChange = { e => setNombre(e.target.value)}
                />
          </div> {/* fin de nombre */}
          
          {/* Cantidad */}
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label> {/* label */}
            <input 
                id='cantidad' 
                type="number" 
                placeholder='Añade la cantidad del gasto: ej. 300'
                value={cantidad}
                onChange = { e => setCantidad(Number(e.target.value))}
                />

          </div> {/* fin de Cantidad */}

          {/* Categoria */}
          <div className="campo">
            <label htmlFor="Categoria">Categoría</label> {/* label */}
            <select 
              id='Categoria'
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione--</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select> 
          </div> {/* fin de Categoria */}

          <input type="submit" value="Añadir Gasto"/> {/* Boton Añadir Gasto */}

        </form>{/* fin del formulario */}
    </div>
  )
}

export default Modal