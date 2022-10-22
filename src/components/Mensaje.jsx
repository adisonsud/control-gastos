import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    /* De esta forma creo un componente que le puedo pasar diferentes tipos sea error o correcto 
    y con diferentes estilos --- le pasamos children con todo el mensaje  */
    /* nota la sintaxis de mezclar una clase fija con una clase dinamica */
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje