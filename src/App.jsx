import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)

  /* configuracion al clickear la img "+" */
  const handleNuevoGasto = () => {
    setModal(true)
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

      {modal && <Modal/>}

    </div> 
  )
}

export default App
