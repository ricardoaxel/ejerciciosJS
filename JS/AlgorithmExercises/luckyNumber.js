/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    
    //Encontrar el minimo en la fila
    let minElCol, indexMinElCol, result=[];
    for(let i=0;i<matrix.length;i++){
        //We obtain the max in the row
        minElCol= Math.min.apply(null,matrix[i]);
        indexMinElCol = matrix[i].indexOf(minElCol);

        //We compare with the rest of the columns
        //auxLucky is for saving if the element is lucky vs all 
        //(if it gets to matrix length it is lucky)
        let auxLucky = 0;
        for(let j=0;j<matrix.length;j++){
            
            //console.log(matrix[j][indexMinElCol],minElCol);
            if(matrix[j][indexMinElCol]>minElCol){
                //console.log("no es lucky");
                break;
            }
            else{
                auxLucky++;
            }
            if(auxLucky==matrix.length){
                //console.log(`${minElCol} es lucky`);
                result.push(minElCol);
            }
        }
    }
    
    return result;
};