// RETO 5 - RETO CREATIVO: CONVERSOR DE MONEDAS
// Este programa demuestra todos los conceptos aprendidos:
// - Funciones tradicionales (function) y funciones flecha (=>)
// - Parametros y argumentos
// - Retorno de valores
// - Modularizacion y buenas practicas

// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

// Importamos la libreria de los inputs
import promptSync from 'prompt-sync';
const prompt = promptSync();

/* mi funcion es una tasa de obtenerTasaCambio, de ejecutarConversor, cop y dolares, usando objetos, esta es una funcion flecha y usa como parametro la monedaOrigen y la monedaDestino */
const obtenerTasaCambio = (monedaOrigen, monedaDestino) => {
  // Creamos un objeto con las tasas de cambio
  const tasas = {
    "USD_COP": 3700,     // Dolar a Peso Colombiano
    "COP_USD": 0.00025,  // Peso Colombiano a Dolar
    "USD_EUR": 0.92,     // Dolar a Euro
    "EUR_USD": 1.09,     // Euro a Dolar
    "EUR_COP": 4360,     // Euro a Peso Colombiano
    "COP_EUR": 0.00023   // Peso Colombiano a Euro
  };

  // Unimos las dos monedas con un guion bajo para buscar en nuestro objeto, Ejemplo: "USD" + "_" + "COP" = "USD_COP"
  const clave = monedaOrigen + "_" + monedaDestino;

  // Buscamos si la combinacion existe en nuestras tasas, si no existe, retornamos null para indicar que no se puede convertir entre esas monedas
  if (tasas[clave] !== undefined) {
    return tasas[clave];
  } else {
    return null;
  }
}

/* aqui usamos la funcion declarada en la cual se hace la conversion de moneda, esta funcion recibe como parametros la cantidad a convertir y la tasa de cambio */
const convertirMoneda = (cantidad, tasa) => {
  // Validamos que la cantidad sea un numero
  if (esNumero(cantidad) === false) {
    throw new Error("La cantidad debe ser un numero valido");
  }

  // Validamos que la cantidad sea positiva
  if (cantidad <= 0) {
    throw new Error("La cantidad debe ser mayor a 0");
  }

  // Validamos que la tasa sea un numero
  if (esNumero(tasa) === false) {
    throw new Error("La tasa de cambio no es valida");
  }

  // Multiplicamos la cantidad por la tasa de cambio para obtener el resultado de la conversion
  const resultado = cantidad * tasa;

  return resultado;
}

// muestra las monedas disponibles para convertir, esta funcion no recibe parametros y solo muestra un mensaje con las opciones de monedas que se pueden convertir
const mostrarMonedasDisponibles = () => {
  console.log("Monedas disponibles:");
  console.log("  USD - Dolar Estadounidense");
  console.log("  COP - Peso Colombiano");
  console.log("  EUR - Euro");
}

/* funcion principal que usa las funciones anteriores */
export function ejecutarConversor() {
  console.log("\nBienvenido al Conversor de Monedas!");

  let continuar = true;

  // Ciclo while para permitir multiples conversiones
  while (continuar) {
    // Mostramos las monedas disponibles
    mostrarMonedasDisponibles();

    // Pedimos la moneda de origen
    let monedaOrigen = prompt("\nMoneda de origen (USD/COP/EUR): ");
    // Convertimos a mayusculas para evitar errores si escribe en minuscula
    monedaOrigen = monedaOrigen.toUpperCase();

    // Pedimos la moneda de destino
    let monedaDestino = prompt("Moneda de destino (USD/COP/EUR): ");
    monedaDestino = monedaDestino.toUpperCase();

    // Obtenemos la tasa de cambio
    const tasa = obtenerTasaCambio(monedaOrigen, monedaDestino);

    // Verificamos que la combinacion de monedas sea valida
    if (tasa === null) {
      console.log("Combinacion de monedas no disponible. Intenta de nuevo.");
    } else {
      // Si la tasa es valida, pedimos la cantidad
      let cantidad = parseFloat(prompt("Cantidad a convertir: "));

      try {
        // Llamamos a la funcion de conversion
        const resultado = convertirMoneda(cantidad, tasa);

        // Mostramos el resultado
        console.log(`\n${cantidad} ${monedaOrigen} = ${resultado.toFixed(2)} ${monedaDestino}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }

    // Preguntamos si quiere hacer otra conversion
    let respuesta = prompt("\nDeseas hacer otra conversion? (s/n): ");
    if (respuesta !== "s") {
      continuar = false;
      console.log("Gracias por usar el Conversor de Monedas!");
    }
  }
}
