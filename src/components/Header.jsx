import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'


/* importamos presupuesto y setPresupuesto */
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
        /* si el presupuesto es valido ----------- */
          <p>control de presupuesto</p>
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