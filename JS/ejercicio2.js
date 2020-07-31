/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

//Método 1

const invertir = (palabra) => palabra.split("").reverse().join("")   
console.log(invertir("holaa"));

//método 2

const invertir2 = (palabra) => {
    let largoPal = palabra.length;
    let palabrarev = "";
    console.log(largoPal);
    for(let i=1; i<=largoPal;i++){
        console.log(palabrarev);
        palabrarev = palabrarev + palabra[largoPal-i];
    }
    return palabrarev;
}

console.log(invertir2("esta palabra ta chida")); 


/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const cuentaOcurrencias = (texto,ocurrencias) => (texto.match(RegExp(ocurrencias,"g")).length)


console.log(cuentaOcurrencias("hola mundo adios mundo mi mundooo", "mundo"));
/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

//Usamos una de las funciones del ejercicio 5
const validPal = (palabra) => 
    (invertir(palabra)===palabra)   
        ?console.log("Es palindromo")
    :console.log("No es palindromo")

validPal("sadas");

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminaBasura = (texto,basura) => (texto.replace(RegExp(basura,"g"),""))

console.log(eliminaBasura("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"));
