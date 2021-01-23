/*var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];
Cree una función que compare las 3 matrices y 
encuentre elementos comunes. Imprime los elementos comunes.*/

function matrices(){

    var array1 = [11,66,34,24,68,23,36,16];
	var array2 = [66,76,36,14,15,13,35,68]; 

    iguales = 0;

    for(i=0;i<array1.length;i++){

        for(j=0;j<array2.length;j++){

            if(array1[i] == array2[j]){

                console.log("Los Numeros que se repiten son :" +array1[i]);
            }
        }

    }
    if(!iguales){
        console.log("No se repite ninguno");
    }

}