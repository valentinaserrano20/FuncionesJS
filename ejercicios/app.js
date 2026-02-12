// Cada ejercicio tiene su propio modulo en su carpeta, este es el menu principal

// Importamos TODAS las funciones desde el index.js central
import {
  saludoPersonalizado,
  calcularPromedio,
  contarHasta,
  calcularTotal,
  mostrarMensajeEsPrimo
} from '../index.js';

// Importamos la libreria para pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion para ejecutar el ejercicio del saludo
function ejecutarSaludo() {
  /* mostramos un mensaje referenciando el ejercicio que se va a ejecutar */
  console.log("Saludo");

  /* se le pide al usuario que ingrese su nombre */ 
  let nombre = prompt("Cual es tu nombre? ");

  /* usamos try para que si el usuario ingresa un dato no valido, podamos validar esa parte del codigo */
  try {
    /* llamamos a la funcion saludoPersonalizado con el nombre ingresado, y guardamos el resultado en la variable saludo */
    const saludo = saludoPersonalizado(nombre);
    /* mostramos el saludo */
    console.log(saludo);
  } catch (error) {
    /* si el usuario ingresa un dato no valido, se muestra un mensaje de error */
    console.error(`Error en saludo: ${error.message}`);
  }
}

// Funcion para ejecutar el ejercicio del promedio
function ejecutarPromedio() {
  console.log("Promedio");

  let n1 = parseFloat(prompt("Ingresa la Nota 1: "));
  let n2 = parseFloat(prompt("Ingresa la Nota 2: "));
  let n3 = parseFloat(prompt("Ingresa la Nota 3: "));

  try {
    const promedio = calcularPromedio(n1, n2, n3);
    console.log(`El promedio es: ${promedio}`);
  } catch (error) {
    console.error(`Error en promedio: ${error.message}`);
  }
}

// Funcion para ejecutar el ejercicio de contar
function ejecutarContar() {
  console.log("Contar");
  let numero = parseInt(prompt("Hasta que numero quieres contar? "));

  try {
    contarHasta(numero);
  } catch (error) {
    console.error(`Error en contar: ${error.message}`);
  }
}

// Funcion para ejecutar el ejercicio de compra
function ejecutarCompra() {
  console.log("Compra");
  let precio = parseFloat(prompt("Ingresa el precio del producto: "));
  let cantidad = parseInt(prompt("Ingresa la cantidad: "));

  try {
    const resultado = calcularTotal(precio, cantidad);
    console.log(`Subtotal: ${resultado.subtotal}`);
    console.log(`IVA: ${resultado.iva}`);
    console.log(`Total: ${resultado.total}`);
  } catch (error) {
    console.error(`Error en compra: ${error.message}`);
  }
}

// Funcion para ejecutar el ejercicio de numeros primos
function ejecutarPrimo() {
  console.log("Numero Primo");
  let numero = parseInt(prompt("Ingresa un numero para saber si es primo: "));

  try {
    const mensaje = mostrarMensajeEsPrimo(numero);
    console.log(mensaje);
  } catch (error) {
    console.error(`Error en primo: ${error.message}`);
  }
}

console.log("MENU DE EJERCICIOS");
console.log(" 1 - Saludo Personalizado");
console.log(" 2 - Calcular Promedio");
console.log(" 3 - Contar Hasta");
console.log(" 4 - Calculo de Compra");
console.log(" 5 - Numero Primo");
console.log(" 0 - Salir");

/* declaramos una variable para controlar el ciclo del menu, esta variable se usara para saber si el usuario quiere seguir eligiendo ejercicios o salir del programa */
let continuar = true;

/* usamos un while para que el menu se repita mientras la variable continuar sea true, esto permite al usuario elegir varios ejercicios sin tener que reiniciar el programa cada vez */
while (continuar) {
  let opcion = prompt("\nElige una opcion: ");

  if (opcion === "1") {
    ejecutarSaludo();
  } else if (opcion === "2") {
    ejecutarPromedio();
  } else if (opcion === "3") {
    ejecutarContar();
  } else if (opcion === "4") {
    ejecutarCompra();
  } else if (opcion === "5") {
    ejecutarPrimo();
  } else if (opcion === "0") {
    /* aqui volvemos la variable continuar a false para salir del ciclo y terminar el programa */
    continuar = false;
    console.log("proceso terminado");
  } else {
    console.log("Opcion no valida. Intenta de nuevo.");
  }
}
