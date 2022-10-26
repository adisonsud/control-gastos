/* arriba todo lo relacionado a React y librerias */



import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  /* configuracion al clickear la img "+" */
  const handleNuevoGasto = () => {
    /* despues de darle click se abrirá el modal */
    setModal(true)

    /* le da 3 segundos para que aparezca el modal */
    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId() /* le agregamos y generamos un nuevo Id */
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
    
    /* Permite ocultar el Id al darle click en añadir gasto */
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)  
    }, 500);
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
        <> {/* retornamos un fragment */}
          <main>
            <ListadoGastos
              gastos = {gastos}
            />
          </main>  
          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto" 
              onClick = {handleNuevoGasto} /* click a esta imagen */
            />
          </div>
        </>
      )}

      {modal && <Modal
                  setModal = {setModal}
                  animarModal = {animarModal}
                  setAnimarModal = {setAnimarModal}
                  guardarGasto = {guardarGasto}
                />}

    </div> 
  )
}

export default App
