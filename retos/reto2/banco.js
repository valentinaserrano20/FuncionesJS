/* Diseña un sistema que permita simular las siguientes operaciones: 
•	Depositar dinero, retirar dinero y consultar saldo. 
•	Cada operación debe estar representada por una función diferente y el saldo debe mantenerse actualizado entre operaciones. 
•	Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir. */

// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

/* importamos la libreria de inputs */
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion para depositar dinero que tiene como parametros el saldo  y el monto a depositar
function depositar(saldo, monto) {
  // Validamos que el monto sea un numero
  if (esNumero(monto) === false) {
    throw new Error("El monto debe ser un numero");
  }

  // Validamos que el monto sea positivo (mayor a 0)
  if (monto <= 0) {
    throw new Error("El monto a depositar debe ser mayor a 0");
  }

  // Sumamos el monto al saldo actual y retornamos el nuevo saldo
  const nuevoSaldo = saldo + monto;
  return nuevoSaldo;
}

// Funcion para retirar dinero que tiene como parametros el saldo y el monto a retirar
function retirar(saldo, monto) {
  // Validamos que el monto sea un numero
  if (esNumero(monto) === false) {
    throw new Error("El monto debe ser un numero");
  }

  // Validamos que el monto sea positivo
  if (monto <= 0) {
    throw new Error("El monto a retirar debe ser mayor a 0");
  }

  // Verificamos que haya suficiente dinero en la cuenta ya que no se puede retirar mas de lo que hay en el saldo
  if (monto > saldo) {
    throw new Error("Fondos insuficientes. Tu saldo es: " + saldo);
  }

  // Restamos el monto al saldo actual
  const nuevoSaldo = saldo - monto;
  return nuevoSaldo;
}

// Funcion para consultar el saldo, esta funcion recibe el saldo como parametro
function consultarSaldo(saldo) {
  console.log(`Tu saldo actual es: $${saldo}`);
}

// Funcion principal que ejecuta el sistema bancario, esta funcion une las funciones anteriores en un programa
export function ejecutarBanco() {
  // Empezamos con un saldo inicial de 0
  let saldo = 0;

  // Mostramos las opciones disponibles
  console.log("Opciones disponibles:");
  console.log(" 1 - Depositar dinero");
  console.log(" 2 - Retirar dinero");
  console.log(" 3 - Consultar saldo");
  console.log(" 4 - Salir");

  // Variable para controlar el ciclo, usamos como en el menu de los ejercicios una variable true que se cambiara a false cuando el usuario quiera salir del programa
  let continuar = true;

  // Usamos para el menu del programa bancario para que pueda hacer varios movimientos sin tener que reiniciar el programa cada vez
  while (continuar) {
    // Pedimos al usuario que elija una opcion
    let opcion = prompt("\nElige una opcion (1/2/3/4): ");

    // Evaluamos que opcion eligio el usuario
    if (opcion === "1") {
      // DEPOSITAR
      let monto = parseFloat(prompt("Cuanto deseas depositar? $"));
      try {
        saldo = depositar(saldo, monto);
        console.log(`Deposito exitoso. Nuevo saldo: $${saldo}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }

    } else if (opcion === "2") {
      // RETIRAR
      let monto = parseFloat(prompt("Cuanto deseas retirar? $"));
      try {
        saldo = retirar(saldo, monto);
        console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }

    } else if (opcion === "3") {
      // CONSULTAR SALDO
      consultarSaldo(saldo);

    } else if (opcion === "4") {
      // SALIR
      // Cambiamos 'continuar' a false para que el ciclo while termine
      continuar = false;
      console.log("Gracias por usar el sistema bancario");

    } else {
      // Si el usuario escribe algo que no es 1, 2, 3 o 4
      console.log("Opcion no valida. Intenta de nuevo.");
    }
  }
}
