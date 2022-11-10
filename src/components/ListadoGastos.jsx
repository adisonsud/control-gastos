import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'> 
        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>

        {
          filtro ? (
            /* el map se va a ejecutar una vez por cada elemento que haya */ 
            gastosFiltrados.map( gasto => (
              <Gasto
                key = {gasto.id}
                gasto = {gasto}
                setGastoEditar = {setGastoEditar}
                eliminarGasto = {eliminarGasto}
              />
            ))
          ) : (
            gastos.map( gasto => (
              <Gasto
                key = {gasto.id}
                gasto = {gasto}
                setGastoEditar = {setGastoEditar}
                eliminarGasto = {eliminarGasto}
              />
            ))
          ) 
        }

      
    </div>
  )
}

export default ListadoGastos