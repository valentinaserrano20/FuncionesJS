/* Diseña un algoritmo que permita determinar si un número es primo, usando modularización, Divide la solución en varias funciones (por ejemplo: una para validar el número, otra para contar divisores y otra para mostrar el resultado final). Y Aplica buenas prácticas de nombrado y claridad en el código. */

// Importamos la funcion de validacion de numeros
import { esNumero } from '../../validaciones.js';

/* funcion para contar cuantos divisores tiene un numero como parametro */
const contarDivisores = (numero) => {
  // Inicializamos un contador en 0, la cual se incrementara cada vez que encontremos un divisor
  let cantidadDivisores = 0;

  // Recorremos todos los numeros desde 1 hasta el numero ingresado, esto para saber cuantos divisores podria tener
  for (let i = 1; i <= numero; i++) {
    // Usamos el operador modulo (%) que nos da el resto de la division, si da 0, significa que i es un divisor de numero
    if (numero % i === 0) {
      // Aumentamos la cuenta de divisores en 1 esto se hace porque encontramos un divisor
      cantidadDivisores++;
    }
  }

  // Retornamos cuantos divisores encontramos
  return cantidadDivisores;
}

// Funcion para determinar si un numero es primo, esta lleva como parametro el numero a analizar y devuelve true si es primo o false si no lo es
const determinarSiEsPrimo = (numero) => {
  // Los numeros menores a 2 no son primos segun matemticas, entonces si el numero es menor a 2, retornamos false directamente sin hacer mas calculos
  if (numero < 2) {
    return false;
  }

  // Llamamos a nuestra funcion contarDivisores para saber cuantos tiene
  const divisores = contarDivisores(numero);

  // Verificamos si tiene exactamente 2 divisores, esto es porque al tenerlo podemos decir que es primo, ya que solo se puede dividir entre 1 y el mismo numero
  if (divisores === 2) {
    return true;
  } 
  else {
    return false;
  }
}

// Funcion principal que exportamos
// Esta funcion recibe un numero, lo valida, y devuelve un mensaje claro
export const mostrarMensajeEsPrimo = (numero) => {
  // Validamos que sea un numero antes de hacer calculos
  if (esNumero(numero) === false) {
    throw new Error("Debes ingresar un numero valido");
  }

  // Usamos nuestra funcion para determinar si es primo
  const esPrimo = determinarSiEsPrimo(numero);

  // Dependiendo del resultado, devolvemos un mensaje diferente
  if (esPrimo) {
    // Si esPrimo es true y se muestra un mensaje
    return `El numero ${numero} ES PRIMO`;
  } else {
    // Si esPrimo es false y se muestra otro mensaje
    return `El numero ${numero} NO ES PRIMO`;
  }
}
