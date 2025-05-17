'use strict'
//Clase 8 practica logica prodevs academy

function BinarioADecimal(num) {
  // tu codigo aca
  /* 
  imput "110"
  output "6"
  convertir el string en array
  [1,1,0]
  dar vuelta el array
  [0,1,1];
  recorrer el array usando la posicion y esa posicion que sea el factor por el que lo voy a hacer
  multiplicar el resultado por el valor del elemento del array
  sumar los resultados.
  */

  //recorrer el array con un for
  let resultado=0;
  //obtener la cantidad de caracteres del numero binario-> LONGITUD
  let longitud = num.length;
  //recorrer el string de izquierda a derecha
  for(let i=0; i < longitud; i++){
      let bit = num[i];
      //calcular el exponente que le corresponde a cada bit
      let exponente = longitud-1-i 
      //multiplicar por dos y elevarlo al exponente 
      resultado+=bit * (2**exponente)
  }
   return resultado

 

}

function DecimalABinario(num) {
  // tu codigo aca
  /* dividir num entre dos hasta que llegue a 0
 quedarme con el resultado entero sin  el decimal y el resto.
 ir recordando los restos
 cambiar el orden de los restos y agruparlos para devolverlos como string

*/
let resultado="";
//while mientras
while(num > 0){
  resultado = num % 2 + resultado
  num= Math.floor(num/2)
}

  return resultado;
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}