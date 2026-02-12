/* Crea un programa modularizado que permita registrar el nombre y tres notas de un estudiante. 
Debe cumplir con las siguientes funciones: 
•	Una función para calcular el promedio. 
•	Una función para determinar si aprueba o reprueba. 
•	Una función principal que muestre el mensaje final con nombre y resultado. 
•	Aplica retorno de valores y estructuras condicionales. */
// Importamos las validaciones de texto y numeros para validar los datos ingresados por el usuario
import { esNumero, esTexto } from '../../validaciones.js';

// Funcion para calcular el promedio de 3 notas, teniendo como parametro 3 notas
const calcularPromedio = (nota1, nota2, nota3) => {
  // Sumamos las 3 notas y dividimos entre 3, para calcular el promedio
  const promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}

// Funcion para determinar si el estudiante aprueba o reprueba, tenemos como parametro el promedio calculado
const determinarAprobacion = (promedio) => {
  // si el promedio es mayor o igual a 3, el estudiante aprueba
  if (promedio >= 3) {
    return "APROBADO";
  } else {
    // Si el promedio es menor a 3, el estudiante reprueba
    return "REPROBADO";
  }
}

// Funcion principal que muestra el resultado academico completo uniendo las funciones anteriores
export const mostrarResultadoAcademico = (nombre, nota1, nota2, nota3) => {
  // Primero validamos que el nombre sea texto
  if (esTexto(nombre) === false) {
    throw new Error("El nombre debe ser un texto");
  }

  // Validamos que cada nota sea un numero
  if (esNumero(nota1) === false) {
    throw new Error("La nota 1 debe ser un numero");
  }

  if (esNumero(nota2) === false) {
    throw new Error("La nota 2 debe ser un numero");
  }

  if (esNumero(nota3) === false) {
    throw new Error("La nota 3 debe ser un numero");
  }

  // Llamamos a la funcion que calcula el promedio
  const promedio = calcularPromedio(nota1, nota2, nota3);

  // Llamamos a la funcion que determina si aprueba o reprueba
  const resultado = determinarAprobacion(promedio);

  // Retornamos el mensaje final con el nombre del estudiante, su promedio (redondeado a 2 decimales) y si aprobo o reprobo
  return {
    notas:[nota1,nota2,nota3],
    promedio: promedio,
    resultado: resultado
  };
}
