/* arriba todo lo relacionado a React y librerias */

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


/* inicio function App */
function App() {
  
  const [gastos, setGastos] = useState(
    /* si existen elementos en el localstoge lo convertimos de string a array con JSON.parse
    caso contrario inicia con [] */ /* 2 */
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
    )
    
  const [presupuesto, setPresupuesto] = useState(
    /* lo almacenamos en 'presupuesto' y si no existe ese elemento el localstoge 
    le va a agregar un 0 como valor inicial */ /* 2 */
    Number(localStorage.getItem('presupuesto')) ?? 0
    )
    
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    
    /* nesecitamos pasarle el obj gastoEditar al Modal */
    /* pasamos el obj setGastoEditar al Modal */
    const [gastoEditar, setGastoEditar] = useState({}) 
    
    const [filtro, setFiltro] = useState('')
    const [gastosFiltrados, setGastosFiltrados] = useState([])

    
    /* ---------------------------------------------------------------------------- */
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
  
/* ---------------------------------------------------------------------------- */
/* guardando presupuesto en el local storage  */
useEffect(() => {/* 1 */
  /* lo guardamos en 'presupuesto', y en caso no este presente la variable presupuesto le pondremos 0*/
  localStorage.setItem('presupuesto', presupuesto ?? 0)
}, [presupuesto])


/* no podemos almacenar arreglos en el local storage para ello convertimos el arreglo
con JSON.stringify a un string  */
useEffect(() => { /* 1 */
localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
}, [gastos])

useEffect(() => {
  if(filtro) {
    /* Filtrar gasto por categoria */
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
    setGastosFiltrados(gastosFiltrados);
  }
}, [filtro])



useEffect(() => { /* 3 */
  const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
  if(presupuestoLS){
    setIsValidPresupuesto(true)
    }
  }, [])
/* ---------------------------------------------------------------------------- */

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
  /* ---------------------------------------------------------------------------- */
  const guardarGasto = gasto => {
    if(gasto.id){
      /* actualizar o modificacion de los gastos */
      const gastosActualizados = gastos.map( gastoState => gastoState.id === 
        gasto.id ? gasto : gastoState)
        /* ejemplo : Si tengo 3 registros e identifica el num 2 entonces el gasto pasa a ser el num 2 
        y se va a colocar como actualizado y los que no cumplen la condicion los sigo retornando porque 
        no queremos que se nos pierda informacion   */
        setGastos(gastosActualizados)
        setGastoEditar({})    
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
  /* ---------------------------------------------------------------------------- */
  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados);
  }
  /* ---------------------------------------------------------------------------- */
  return (
    <div className={modal ? 'fijar' : ''}>
      
      <Header 
        /* lo exportamos al Header */
        gastos = {gastos}
        setGastos = {setGastos}
        presupuesto = {presupuesto} 
        setPresupuesto = {setPresupuesto} 
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {/* Al poner '&&' le decimos q si es un presupuesto valido se ejecutara el codigo */}
      {isValidPresupuesto && (
        <> {/* retornamos un fragment */}
          <main>
            <Filtros
              filtro = {filtro}
              setFiltro = {setFiltro}

            />

            <ListadoGastos
              gastos = {gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto = {eliminarGasto} /* lo pasamos por listadoGastos luego a Gasto */
              filtro = {filtro}
              gastosFiltrados = {gastosFiltrados}

            />
          </main>  

          {/* boton para agregar nuevo */}
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
                  gastoEditar = {gastoEditar} /* De esta forma sabra q gasto tiene q editar y q info actual tiene este gasto */
                  setGastoEditar = {setGastoEditar}
                  />}

    </div> 
  )
} /* fin function App */

export default App
