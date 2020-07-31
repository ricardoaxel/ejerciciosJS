/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const vocalOCons = (frase) => {
    let vocales = frase.match(RegExp("[aeiou]","gi")).length
    let consonantes= frase.match(RegExp("[bcdfghjklmnpqrstvwxys]","gi")).length
    console.log(`Vocales: ${vocales} Consonantes: ${consonantes}`);
}

vocalOCons("Holaaaa eSSSs");

/*
19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

/*
20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/