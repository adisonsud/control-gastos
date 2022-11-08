/* arriba todo lo relacionado a React y librerias */

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

/* inicio function App */
function App() {
  
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  
  const [gastoEditar, setGastoEditar] = useState({})
  
  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      /* despues de darle click se abrirá el modal */
    setModal(true)
    
    /* le da 3 segundos para que aparezca el modal */
    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  } 
  
}, [gastoEditar])


/* configuracion al clickear la img "+" */
  const handleNuevoGasto = () => {
    /* despues de darle click se abrirá el modal */
    setModal(true)
    
    /* limpiara los datos guardados despues de editar loss gastosg   */
    setGastoEditar({})
    /* le da 3 segundos para que aparezca el modal */
    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }
  
  const guardarGasto = gasto => {
    if(gasto.id){
      /* actualizar o modificacion de los gastos */
      const gastosActualizados = gastos.map( gastoState => gastoState.id === 
        gasto.id ? gasto : gastoState)
        /* ejemplo : Si tengo 3 registros e identifica el num 2 entonces el gasto pasa a ser el num 2 
        y se va a colocar como actualizado y los que no cumplen la condicion los sigo retornando porque 
        no queremos que se nos pierda informacion   */
        setGastos(gastosActualizados)    


      }else{
        /* Nuevo Gasto */
        gasto.id = generarId() /* le agregamos y generamos un nuevo Id */
        gasto.fecha = Date.now()
        setGastos([...gastos, gasto])
      }
      
      /* Permite ocultar el Id al darle click en añadir gasto */
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)  
    }, 500);
  }
  
  return (
    <div className={modal ? 'fijar' : ''}>
      
      <Header 
      /* lo exportamos al Header */
      gastos = {gastos}
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
              setGastoEditar = {setGastoEditar}
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
                  gastoEditar = {gastoEditar}
                  />}

    </div> 
  )
} /* fin function App */

export default App
