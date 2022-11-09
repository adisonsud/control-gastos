import { useState ,useEffect } from "react"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar' /* imagen */
import "react-circular-progressbar/dist/styles.css" /* imagen */

const ControlPresupuesto = ({gastos, presupuesto}) => {

  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible,setDisponible] = useState(0)
  const [gastado,setGastado] = useState(0)

  /* ----------------------------------------------------------------------------- */
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0 )
    setGastado(totalGastado);
    
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    
    /* calcular el porcentaje gastado */
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2) /* .toFixed retorna la cantidad de digitos despues del coma */
    setTimeout(() => {
      
      setPorcentaje(nuevoPorcentaje);
    }, 800);

  }, [gastos])
  
  /* ----------------------------------------------------------------------------- */
  
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
            {/* Grafica aqui */}
            <CircularProgressbar
              styles={buildStyles({})}
              value={porcentaje}
            />

        </div>

        <div className='contenido-presupuesto'>
            <p> {/* Presupuesto Total */}
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>

            <p> {/* Monto Disponible */}
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>

            <p> {/* Monto Gastado */}
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto