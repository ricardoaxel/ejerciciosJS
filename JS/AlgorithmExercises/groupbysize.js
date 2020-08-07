/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    //Se ven los tipos de datos sin repetición que llegan y se pasan a un map para       hacer búsquedas en ellos
    let groups = new Set(groupSizes)
    let mapGroups = new Map();
    let finalArray = [];
    
    //Se asignan los elementos al mapa
    for(e of groups){
       mapGroups.set(e,"");
    }
    //Se busca el tipo de grupo al que pertenece para concatenarlo a el string de       posiciones asociadas con un " " separador
    for(i=0;i<groupSizes.length;i++){
        mapGroups.set(groupSizes[i], (mapGroups.get(groupSizes[i])+`${i} `));    
    }
  

    //Eliminación de espacio en blanco del último caracter con substring
    //Cambio de cadena a array hacieno split por espacios
    for(e of mapGroups){
        mapGroups.set(e[0],e[1].substring(0, e[1].length - 1).split(" "));   
    }
    
    //console.log(mapGroups);
    
    //AQUÍ SE DESCOMPONEN LOS ELEMENTOS DEL MAP PARA ASIGNARLOS AL ARREGLO
    //Para ir viendo la posición del arreglo final
    //contadorPos = 0;
    //Se recorrer primero los elementos del mapa
    for(e of mapGroups){
        //Para tener un contador de cuantos del mismo se tienen
        contadorNum = 0;
        //Asignación de elementos a array final
        let arregloAux = []
        //Se recorre cada uno de los elementos del arreglo
        for(posicion of e[1]){
            //console.log(posicion);
            //console.log("cont: ",contadorNum);
            //console.log("Contadores a comp: ",contadorNum,e[0]);
            
            //Si el contador llega al número total de elementos aceptados
            //-1 porque ya en el máximo no se aceptaran más elementos a la
            //siguiente vuelta
            if(contadorNum===e[0]-1){
                arregloAux.push(parseInt(posicion))
                finalArray.push(arregloAux);
                arregloAux=[];
                contadorNum = 0;
            }
            
            else{
                contadorNum++;
                arregloAux.push(parseInt(posicion));
            }   
        }
        //Si es el último de su grupo se mana al arreglo final

    }
    return finalArray; 
};