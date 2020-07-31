/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

///ESTA ES PARA DOS Números N
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntFromInterval(501,600));


//Este sólo funciona para numeros entre 500 y 600
const aleatorio = () => Math.round((Math.random() * 100))+500

console.info(aleatorio());

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


LO MISMO QUE PALINDROMO
*/




/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
    se define como el producto de todos los números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) devolverá 120.

*/

const factorial = (num) => {
    if(num===1){
      return num * num;
    }
    else{
        console.log(num);
        return num * factorial(num-1);
    }
}
console.log(factorial(4));

//Forma reducida
const factorial2 = (num) => (num===1) 
    ? (num*num)
    : (num *factorial2(num-1))

console.log(factorial2(4));