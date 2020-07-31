/*
12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (num) => {
    for (let i=2;i<num;i++){
        //si el numero es divisible entre alguno de los números que no es si mismo no es primo.
        if(num%i === 0) return false
    }
    return true
}

console.log(esPrimo(97));
/*
13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.
*/
const parImpar = (num) => 
    (num%2===0)
        ? "par"
        : "impar" 

console.log(parImpar(10));


/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/

const celFar = (grados,tipo) =>
    (tipo==="C")
    ? (grados*1.8)+32
    : (grados-32)/1.8 


console.log(celFar(0,"C"));