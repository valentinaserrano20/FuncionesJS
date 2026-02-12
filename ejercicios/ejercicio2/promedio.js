/* Diseña una función llamada calcularPromedio que reciba tres notas y retorne el promedio final del estudiante. */
// Importamos la funcion de validacion de numeros
import { esNumero } from '../../validaciones.js';

// creamos una funcion felcha la cual recibe tres notas como parametros para el promedio
export const calcularPromedio = (nota1, nota2, nota3) => {
  // Validamos cada nota por separado
  // Verificamos la primera nota
  if (esNumero(nota1) === false) {
    // Si no es numero, detenemos el programa con un error
    throw new Error("La nota 1 debe ser un numero");
  }

  // Verificamos la segunda nota
  if (esNumero(nota2) === false) {
    throw new Error("La nota 2 debe ser un numero");
  }

  // Verificamos la tercera nota
  if (esNumero(nota3) === false) {
    throw new Error("La nota 3 debe ser un numero");
  }

  // calculamos el promedio quye es sumar todas las notas y dividirlo por la cantidad de notas en este caso 3
  const promedio = (nota1 + nota2 + nota3) / 3;

  // Retornamos el resultado final
  return promedio;
}
