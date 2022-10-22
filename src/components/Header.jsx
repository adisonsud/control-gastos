import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'


/* importamos presupuesto y setPresupuesto */
const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto
          /* exportamos a NuevoPresupuesto  */
          presupuesto = {presupuesto} 
          setPresupuesto = {setPresupuesto} 
        />
    </header>
  )
}

export default Header