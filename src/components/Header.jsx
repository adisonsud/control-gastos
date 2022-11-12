import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


/* importamos presupuesto y setPresupuesto */
const Header = ({gastos,setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
        /* si el presupuesto es valido ----------- */
          <ControlPresupuesto
            gastos = {gastos}
            setGastos = {setGastos}
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto = {setIsValidPresupuesto}
          />
        /* fin de presupuesto valido ------------- */
        ) :
        ( 
          /* si no es valido ---------------------- */
          <NuevoPresupuesto
            /* exportamos a NuevoPresupuesto  */
            presupuesto = {presupuesto} 
            setPresupuesto = {setPresupuesto} 
            setIsValidPresupuesto = {setIsValidPresupuesto}
          />
          /* fin de presupuesto no valido---------- */
        )}

    </header>
  )
}

export default Header