/* Crea un programa que reciba un número entero y determine: • Si es par o impar. • Si es positivo o negativo.
•	Si es primo. 
•	Cada validación debe estar contenida en una función diferente, y el resultado final debe mostrarse mediante una función principal. */

// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

// Funcion para determinar si un numero es par o impar, tiene como paremtro un numero
function esParOImpar(numero) {
  // Usamos el operador modulo (%) que nos da el resto de la division, si da 0 es par, si da 1 es impar
  if (numero % 2 === 0) {
    return "PAR";
  } else {
    return "IMPAR";
  }
}

// Funcion para determinar si un numero es positivo o negativo, tiene como parametro un numero
function esPositivoONegativo(numero) {
  /* usamos una condicional para decidir, si el numero es mayor a 0 es positivo, si es menor a 0 es negativo, y si no es ni mayor ni menor a 0, entonces es cero */
  if (numero > 0) {
    return "POSITIVO";
  } else if (numero < 0) {
    return "NEGATIVO";
  } else {
    // Si no es mayor ni menor a cero, entonces ES cero
    return "CERO";
  }
}

// Funcion para contar cuantos divisores tiene un numero
const contarDivisores = (numero) => {
  /* se inicia con un contador en 0, el cual se incrementara cada vez que encontremos un divisor */
  let cantidadDivisores = 0;

  // Recorremos todos los numeros desde 1 hasta el numero
  for (let i = 1; i <= numero; i++) {
    // Si el resto de la division es 0, entonces i es divisor
    if (numero % i === 0) {
      cantidadDivisores++;
    }
  }

  return cantidadDivisores;
}

// Funcion para determinar si un numero es primo
function esPrimo(numero) {
  // Los numeros menores a 2 no son primos
  if (numero < 2) {
    return "NO ES PRIMO";
  }

  const divisores = contarDivisores(numero);

  // Si tiene exactamente 2 divisores, es primo
  if (divisores === 2) {
    return "ES PRIMO";
  } else {
    return "NO ES PRIMO";
  }
}

// Funcion principal que analiza todas las funciones anteriores
export const analizarNumero = (numero) => {
  // Validamos que sea un numero antes de analizar
  if (esNumero(numero) === false) {
    throw new Error("Debes ingresar un numero valido");
  }

  // Llamamos a cada funcion de analisis
  const parImpar = esParOImpar(numero);
  const posNeg = esPositivoONegativo(numero);
  const primo = esPrimo(numero);

  // Retornamos la informacion
  return {
    esPar: parImpar,
    esPositivo: posNeg,
    esPrimo: primo,

  }
}
