// Cada ejercicio tiene su propio modulo en su carpeta, este es el menu principal
// Importamos TODAS las funciones desde el index.js central
import {
  mostrarResultadoAcademico,
  ejecutarBanco,
  procesarFactura,
  pedirProductos,
  analizarNumero,
  ejecutarConversor
} from '../index.js';

// Importamos la libreria para pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Reto 1: Sistema de Calculo Academico
function ejecutarRetoAcademico() {
  console.log("Sistema Academico");
  /* se le piden al usuario los datos */
  let nombre = prompt("Nombre del estudiante: ");
  let nota1 = parseFloat(prompt("Nota 1: "));
  let nota2 = parseFloat(prompt("Nota 2: "));
  let nota3 = parseFloat(prompt("Nota 3: "));

  try {
    /* se llama a la funcion mostrarResultadoAcademico con los datos ingresados, esta funcion retorna un mensaje con el resultado academico completo, el cual se muestra al usuario */
    const resultado = mostrarResultadoAcademico(nombre, nota1, nota2, nota3);
    console.log(`\nResultado de ${resultado.nombre}:`);
    console.log(`  Notas: ${resultado.nota1}, ${resultado.nota2}, ${resultado.nota3}`);
    console.log(`  Promedio: ${resultado.promedio}`);
    console.log(`  Estado: ${resultado.resultado}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Reto 2: Operaciones Bancarias
// Esta funcion llama directamente a ejecutarBanco() que ya tiene su propio ciclo
function ejecutarRetoBanco() {
  console.log("Operaciones Bancarias");
  ejecutarBanco();
}

// Reto 3: Sistema de Facturacion
function ejecutarRetoFacturacion() {
  console.log("Sistema de Facturacion");
  // Pedimos los productos al usuario (la funcion tiene su propio ciclo)
  const productos = pedirProductos();

  // Verificamos que haya al menos un producto
  if (productos.length > 0) {
    procesarFactura(productos);
  } else {
    console.log("No se ingresaron productos.");
  }
}

// Reto 4: Analisis de Numeros
function ejecutarRetoAnalisis() {
  console.log("Analisis de Numeros");
  let numero = parseInt(prompt("Ingresa un numero entero para analizar: "));

  try {
    const resultado = analizarNumero(numero);
    console.log(`\nAnalisis del numero ${resultado.numero}:`);
    console.log(`  Par o Impar: ${resultado.parImpar}`);
    console.log(`  Positivo o Negativo: ${resultado.positivoNegativo}`);
    console.log(`  Primo: ${resultado.primo}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Reto 5: Conversor de Monedas
function ejecutarRetoConversor() {
  console.log("\n--- RETO 5: Conversor de Monedas ---");
  ejecutarConversor();
}

console.log("  MENU DE RETOS");
console.log("\n  1 - Sistema Academico");
console.log("  2 - Operaciones Bancarias");
console.log("  3 - Sistema de Facturacion");
console.log("  4 - Analisis de Numeros");
console.log("  5 - Conversor de Monedas");
console.log("  0 - Salir");

let continuar = true;

while (continuar) {
  let opcion = prompt("\nElige una opcion: ");

  if (opcion === "1") {
    ejecutarRetoAcademico();
  } else if (opcion === "2") {
    ejecutarRetoBanco();
  } else if (opcion === "3") {
    ejecutarRetoFacturacion();
  } else if (opcion === "4") {
    ejecutarRetoAnalisis();
  } else if (opcion === "5") {
    ejecutarRetoConversor();
  } else if (opcion === "0") {
    continuar = false;
    console.log("proceso terminado.");
  } else {
    console.log("Opcion no valida. Intenta de nuevo.");
  }
}
