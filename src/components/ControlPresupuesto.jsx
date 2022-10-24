import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad) => {
    /* formatea el monto ingresado en dolares y con 2 decimakes => $300.00 */
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        
        <div>
            <p>Grafica aqui</p>
        </div>

        <div className='contenido-presupuesto'>
            <p> {/* Presupuesto Total */}
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>

            <p> {/* Monto Disponible */}
                <span>Disponible:</span> {formatearCantidad(0)}
            </p>

            <p> {/* Monto Gastado */}
                <span>Gastado:</span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto