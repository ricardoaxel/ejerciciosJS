/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ascDesc = (arr) => {
    
    const resp = {
    asc: arr.slice().sort(),
    desc: arr.slice().sort().reverse()
    }

    return resp
}

console.log(ascDesc([7,5,7,8,6]))


/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

console.log("ej 25");

/* SOLUCION COMPLICADA XD
const eliminarDuplicados = (arr) =>{
    let sinDuplicar = [];
    for(let i=0;i<arr.length;i++){
        console.log(`Se está viendo ${arr[i]}`);

        if(sinDuplicar.length===0){
            sinDuplicar.push(arr[i]);
        }
        else{
            console.log(`Tamaño sinDuílciar: ${sinDuplicar.length}`);
            for(let j=0;j<sinDuplicar.length;j++){

                console.log(`El arreglo de sin repetidos va: ${sinDuplicar}`)
                console.log(`Palabras a comparar: ${arr[i]} y ${sinDuplicar[j]}`)

                //Si  NO es el último elemento del arreglo a comparar
                if(j<sinDuplicar.length-1){
                    if(arr[i]===sinDuplicar[j]){
                        console.log(`Se ha repetido valor de ${arr[i]} en ${i}`)
                        break   
                    }
                }
                //Si es el último elemento del arreglo a comparar
                else{
                    if(arr[i]===sinDuplicar[j]){
                        console.log(`Se ha repetido valor de ${arr[i]} en ${i}`)
                        break   
                    }
                    else{
                        sinDuplicar.push(arr[i]);
                        console.log(`Se agrego ${arr[i]}`)
                        break
                    }  
                }
            }
        }
    }
    console.log(sinDuplicar);
}


*/

const eliminarDuplicados = (arr) =>{
    let sinDuplicados = [...new Set(arr)]
    return sinDuplicados
}

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]))

/*
ES5
26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr) => {
    let suma = 0
    for (const el of arr){
        suma = suma + el
    }
    console.log(suma/arr.length)
}
*/

const promedio = (arr) =>{
    arr.reduce((total,num,index,arr) => {
        total += num;
        if(index == arr.length-1){
            return console.log(`El promedio es: ${total/arr.length}`);
        }
        else{
            return total;
        }
    })        
}   

promedio([9,8,7,6,5,4,3,2,1,0])