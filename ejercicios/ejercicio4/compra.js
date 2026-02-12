/* Crea un pequeño programa que calcule el valor total de una compra, Debes usar al menos tres funciones: 
•	Una función para calcular el subtotal (cantidad × precio). 
•	Otra función para calcular el IVA (19%).
•	Una tercera función que retorne el total a pagar.
•	Usa retornos de valor y combina los resultados entre funciones. */
// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

// Funcion para calcular el subtotal la cual tiene como parametros el precio y la cantidad 
const calcularSubtotal = (precio, cantidad) => {
  // Multiplicamos precio por cantidad
  return precio * cantidad;
}

// Funcion para calcular el IVA=19%
const calcularIVA = (subtotal) => {
  // Multiplicamos el subtotal por 0.19 (que es el 19% en decimal)
  // Ejemplo: si el subtotal es 1000, el IVA es 1000 * 0.19 = 190
  return subtotal * 0.19;
}

// Funcion principal que usa las funciones anteriores
export const calcularTotal = (precio, cantidad) => {
  /* verificamos que el precio sea un numero */
  if (esNumero(precio) === false) {
    throw new Error("El precio debe ser un numero");
  }

  // Validamos la cantidad tambien sea un numero
  if (esNumero(cantidad) === false) {
    throw new Error("La cantidad debe ser un numero");
  }

  /* llamamos a la funcion para calcular el subtotal usando precio y cantidad */
  const subtotal = calcularSubtotal(precio, cantidad);

  /* llamamos a la funcion para calcular el IVA usando el subtotal */
  const iva = calcularIVA(subtotal);

  /* calculamos el total sumando el subtotal y el IVA */
  const total = subtotal + iva;

/*   retornamos el total a pagar, que es el resultado final de la compra */
  return total;
}
