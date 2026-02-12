/* Crea una función llamada saludoPersonalizado que reciba un nombre como parámetro y retorne un mensaje de bienvenida.  */
// Importamos la funcion esTexto para validar que lo que ingrese el usuario sea uno
import { esTexto } from '../../validaciones.js';

// Creamos la funcion flecha saludoPersonalizado que recibe nombre como parametro
export const saludoPersonalizado = (nombre) => {
    // Usamos un condicional 'if' para verificar si el dato es correcto, lo igualamos a falso ya que esTexto devuelve true si es texto, y false si no lo es
    if (esTexto(nombre) === false) {
        // Si no es texto, lanzamos un error para avisar al usuario que debe ser uno
        throw new Error("El nombre debe ser un texto");
    }
    
    // Si paso la validacion, retornamos el saludo personalizado.
    return `Hola, ${nombre}! Bienvenid@.`;
}
