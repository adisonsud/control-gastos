
export const generarId = () => {
    /*  Math.random()- nos genera un numero entre 0 y 1.
    toString(36) - aplica en numeros y el radix en este caso de 36
    substring(2)- Para eliminar caracteres un poco extraños*/
    const random = Math.random().toString(36).substring(2)

    /* fecha que no se puede repetir */
    const fecha = Date.now().toString(36)

    return random + fecha
}