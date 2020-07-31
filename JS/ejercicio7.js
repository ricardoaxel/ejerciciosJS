/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const elevarArreglo = (arreglo) => {
    let arregloCuadrado = arreglo.map(el => el*el)
    return arregloCuadrado
}

console.log(elevarArreglo([1,4,5]));
/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const minMax = (arr) =>{
    let arrMM = []
    arrMM.push(Math.max(...arr))
    arrMM.push(Math.min(...arr))
    return arrMM
} 

console.log(minMax([1, 4, 5, 99, -60]))
/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.



const arrParImpar = (arr) =>{
    let par = [], impar = []
    arr.forEach(e => 
        (e%2===0)
        ? par.push(e)
        : impar.push(e)
    )
    return (`pares: ${par} Impares: ${impar}`)
}
console.log("23")
console.log(arrParImpar([1,2,3,4,5,6,7,8,9,0]));

*/

const paresImpares = (arr) => {
    return({
        pares: arr.filter(num => num % 2 ===0),
        impares: arr.filter(num => num % 2 ===1)
    })
}

console.log(paresImpares([1,2,3,4,5,6,7,8,9,0]));