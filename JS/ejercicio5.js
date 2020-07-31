/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
*/

const binToDec = (num,base) => 
    (base===2)
        ?parseInt(num,base)
        :parseInt(num,2)



//VERSION COMPLICADA Si es binario
    /* Complicado
    if (base===2){
        
        let binstring = num.toString()
        let tamn = binstring.length 
        let numeroEnDec = 0
        
        for(let i=1;i<=tamn;i++){
            numeroEnDec = numeroEnDec + parseInt(binstring[tamn-i])*Math.pow(2,i-1)
        }
        return numeroEnDec
    }
    */

console.log(binToDec(100,2));
console.log(binToDec(10,10));

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.
*/

const descuento = (monto,desc) => monto - monto * (desc/100)
console.log(descuento(2700,35))

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

console.log("Ejercicio 17");
const fechaAHoy = (fechaIng) =>{
    let fechaFinal = new Date().getTime() - fechaIng.getTime(),
    aniosEnMS = 1000*60*60*24*365,
    aniosHumanos = Math.floor(fechaFinal/aniosEnMS)
    return aniosHumanos
}

console.log(fechaAHoy(new Date(1950,4,23)))