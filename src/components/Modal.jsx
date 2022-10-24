/* Modal es e toda la pantalla que aperece al precionar el agregar "+" */
import CerrarBtn from '../img/cerrar.svg' 

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = () => {
    /* esto permite ocultar el modal */
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)  
    }, 500);
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
        <form className={`formulario ${animarModal ? "animar" : 'false' }`}>
          <legend>Nuevo Gasto</legend>
          
          {/* Nombre */}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label> {/* label */}
            <input 
                id='nombre' 
                type="text" 
                placeholder='Añade el nombre del gasto'/>
          </div> {/* fin de nombre */}
          
          {/* Cantidad */}
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label> {/* label */}
            <input 
                id='cantidad' 
                type="number" 
                placeholder='Añade la cantidad del gasto: ej. 300'/>
          </div> {/* fin de Cantidad */}

          {/* Categoria */}
          <div className="campo">
            <label htmlFor="Categoria">Categoría</label> {/* label */}
            <select id='Categoria'>
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