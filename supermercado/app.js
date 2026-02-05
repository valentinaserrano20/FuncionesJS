import libreria from 'prompt-sync';
const prompt = libreria();

const Supermercado=(precioProducto1, precioProducto2)=>{
  let totalCompra= precioProducto1+precioProducto2;
  return totalCompra;
}

let NombreProducto1=prompt("ingrese el nombre del producto1:");
let NombreProducto2=prompt("ingrese el nombre del producto2:");
let PrecioProducto1=parseFloat(prompt(`ingrese el precio de ${NombreProducto1}:`));
let PrecioProducto2=parseFloat(prompt(`ingrese el precio de ${NombreProducto2}:`));


const totalCompra=Supermercado(PrecioProducto1, PrecioProducto2);

console.log(`el nombre de los productos son ${NombreProducto1,NombreProducto2} y el total de la compra es ${totalCompra}`);


function Supermercado(precioProducto1, precioProducto2){

  let totalCompra= precioProducto1+precioProducto2;
  return totalCompra;
}



