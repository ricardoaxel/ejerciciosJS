/**
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
    /Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
    /Valida que el título no rebase los 100 caracteres.
    /Valida que el director no rebase los 50 caracteres.
    / Valida que el año de estreno sea un número entero de 4 dígitos.
    / Valida que el país o paises sea introducidos en forma de arreglo.
    /Valida que los géneros sean introducidos en forma de arreglo.
    / Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, 
War, Western.
 */

class Pelicula{
    constructor({id,titulo,director,anio,pais,generos,calificación}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.generos = generos;
        this.calificación = calificación;
        //Llamada a funciones
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(anio);
        this.validarPais(pais);
        this.validarGenero(generos);
        this.validarCalif(calificación);
    }
    
    validarIMDB(id){
        if(id.length!==9){
            return console.error("El id no es de 9 caracteres");
        }
        
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.error("El identificador no cumple con el formato (2 letras seguidas de 7 números");
        }
    }

    validarTitulo(titulo){
        if(titulo.length>100){
            return console.error("El título debe ser menos a 100 caracteres")
        }
    }  

    validarDirector(director){
        if(director.length>50){
            return console.error("El director debe ser menos a 50 caracteres")
        }
    } 

    validarAnio(anio){
        if(!(/[0-9]{4}/.test(anio))){
            return console.error("El año no es un número de cuatro digitos");
        }
    }

    validarArreglo(arr,tipo){
        if(!(arr instanceof Array)){
            return console.error(`El ${tipo} debe venir en forma de arreglo`);
        }
    }

    validarPais(pais){
        let tipo= "pais";
        this.validarArreglo(pais,tipo);
    }
    validarGenero(generos){
        let tipo= "genero";
        this.validarArreglo(generos,tipo);

        let genOk= ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
            "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", 
            "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", 
            "War", "Western"];

        for (let gen of generos){

            
            if(!(genOk.includes(gen))){
                return console.error("El genero no está en la lista de géneros permitidos");
            }
        }
    }

    validarCalif(calif){
        if(typeof calif != "number"){
            return console.error("La calificaiciónd debe ser un número");
        }
        if(calif>10||calif<0){
            return console.error("La calificación debe estar entre 0 y 10");
        }
    }
    
}

const shueck = new Pelicula({
    id:"ab1234567",
    titulo: "shuerk",
    director: "jesus",
    calificación: 10,
    anio: 2020,
    pais: ["mejico"],
    generos: ["Western"]
});

console.log(shueck.pais);
