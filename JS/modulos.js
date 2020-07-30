/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
*/

const cuentaC = (cosaAContar) => {
    return cosaAContar.length;
}

console.log(cuentaC("holasaa"));


/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const recN = (texto,num) => {
    return texto.substr(0,num);
}

console.log(recN("TEXTO A RECORTAR",4));

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

/*
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/