/* Crea un programa que reciba una lista de productos (nombre, precio, cantidad) y calcule: 
•	Subtotal por producto. 
•	Total, sin IVA. 
•	IVA total (19%).
•	Valor total a pagar.
•	 Aplica modularización y retorno de valores.  */

// Importamos la validacion de numeros
import { esNumero } from '../../validaciones.js';

// Importamos prompt-sync para pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion para calcular el subtotal de un producto, recibe el precio y la cantidad como parametros
function calcularSubtotalProducto(precio, cantidad) {
  // retornamos el subtotal que es precio multiplicado por cantidad
  return precio * cantidad;
}

// Funcion para calcular el total sin IVA, esta recibe como parametro los productos que adquirio
function calcularTotalSinIVA(productos) {
  // Inicializamos el total en 0
  let total = 0;

  // Usamos un ciclo 'for' para recorrer cada producto de la lista
  for (let i = 0; i < productos.length; i++) {
    // En cada vuelta, accedemos al producto actual con el indice
    let producto = productos[i];

    // Calculamos el subtotal de este producto
    let subtotal = calcularSubtotalProducto(producto.precio, producto.cantidad);

    // Sumamos el subtotal al total acumulado
    total = total + subtotal;
  }

  // Retornamos el total de todos los productos sumados sin el IVA
  return total;
}

// Funcion para calcular el IVA total (19%) a partir del total sin IVA
function calcularIVATotal(totalSinIVA) {
  // Multiplicamos por 0.19 para obtener el 19%
  return totalSinIVA * 0.19;
}

// Funcion principal implementada como FUNCION FLECHA que procesa las funciones anteriores
export const procesarFactura = (productos) => {
  // Mostramos un encabezado de la factura
  console.log("FACTURA");

  // Recorremos cada producto para mostrar su detalle
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let subtotal = calcularSubtotalProducto(producto.precio, producto.cantidad);

    // Mostramos el nombre del producto, precio, cantidad y subtotal
    console.log(`${producto.nombre}  Precio: $${producto.precio} x ${producto.cantidad} = $${subtotal}`);
  }

  // Calculamos el total sin IVA usando nuestra funcion
  const totalSinIVA = calcularTotalSinIVA(productos);

  // Calculamos el IVA total
  const ivaTotal = calcularIVATotal(totalSinIVA);

  // Calculamos el valor total a pagar (total sin IVA + IVA)
  const totalAPagar = totalSinIVA + ivaTotal;

  // Mostramos el resumen final
  console.log(`Total sin IVA: $${totalSinIVA}`);
  console.log(`IVA (19%):     $${ivaTotal}`);
  console.log(`Total a pagar: $${totalAPagar}`);

  // Retornamos los resultados
  return [totalSinIVA, ivaTotal, totalAPagar];
}

// Funcion para pedir los productos al usuario
export function pedirProductos() {
  // Creamos un arreglo vacio donde guardaremos los productos
  let productos = [];

  let continuar = true;

  // Repetimos mientras el usuario quiera agregar productos, mientras 'continuar' sea true
  while (continuar) {
    // Pedimos los datos de cada producto
    let nombre = prompt("Nombre del producto: ");
    let precio = parseFloat(prompt("Precio del producto: $"));
    let cantidad = parseInt(prompt("Cantidad: "));

    // Validamos el precio
    if (esNumero(precio) === false) {
      console.log("Error: el precio debe ser un numero. Producto no agregado.");
      continue; // 'continue' salta al inicio del ciclo sin ejecutar lo de abajo
    }

    // Validamos la cantidad
    if (esNumero(cantidad) === false) {
      console.log("Error: la cantidad debe ser un numero. Producto no agregado.");
      continue;
    }

    // Agregamos el producto al arreglo usando push()
    productos.push({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    });

    console.log(`Producto "${nombre}" agregado correctamente.`);

    // Preguntamos si quiere agregar otro producto
    let respuesta = prompt("Deseas agregar otro producto? (s/n): ");
    if (respuesta !== "s") {
      continuar = false;
    }
  }

  return productos;
}
