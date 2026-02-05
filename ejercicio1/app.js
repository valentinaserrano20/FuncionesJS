import libreria from 'prompt-sync';
const prompt = libreria();

/* Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo, 
imprima todos los números desde 1 hasta el valor recibido.  */

function contarhasta(numero){

  for (let i=1; i<=numero; i++){
    console.log(i);
  }

}
let numerorecibido=parseInt(prompt("ingrese el numero del cual quiera ver el contador:"));

contarhasta(numerorecibido);


con