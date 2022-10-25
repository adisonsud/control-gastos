/* arriba todo lo relacionado a React y librerias */



import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  /* configuracion al clickear la img "+" */
  const handleNuevoGasto = () => {
    /* despues de darle click se abrirá el modal */
    setModal(true)

    /* le da 3 segundos para que aparezca el modal */
    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  return (
    <div>
      
      <Header
      /* lo exportamos al Header */
        presupuesto = {presupuesto} 
        setPresupuesto = {setPresupuesto} 
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {/* Al poner '&&' le decimos q si es un presupuesto valido se ejecutara el codigo */}
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto} 
            alt="icono nuevo gasto" 
            onClick = {handleNuevoGasto} /* click a esta imagen */
          />
        </div>
      )}

      {modal && <Modal
                  setModal = {setModal}
                  animarModal = {animarModal}
                  setAnimarModal = {setAnimarModal}
                />}

    </div> 
  )
}

export default App
