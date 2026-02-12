/* Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo, imprima todos los números desde 1 hasta el valor recibido. • Convierte luego esta función a función flecha */
// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

//creamos la funcion contarhasta que llevara como parametro un numero
export const contarHasta = (numero) => {
  // Primero validamos si lo que recibimos es un numero
  if (esNumero(numero) === false) {
    // Si no es numero, mostramos un error
    throw new Error("El valor debe ser un numero");
  }

  // Mostramos un mensaje inicial
  console.log(`Contando hasta ${numero}:`);

  // Usamos el ciclo for para contar desde 1 hasta el numero ingresado
  for (let i = 1; i <= numero; i++) {
    // En cada repeticion se imprimira el valor actual de i y luego se sumara 1 a i automaticamente
    console.log(i);
  }
}
