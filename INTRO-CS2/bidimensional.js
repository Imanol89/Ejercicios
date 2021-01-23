/*2.    Estás tratando de ir del punto B al punto C. 
Solo puedes mover un bloque a la vez. 
Puede moverse hacia arriba, hacia abajo, de izquierda a derecha. 
Escribe un algoritmo para ir del punto B al punto C. */

//Función básica para crear el diagrama de la Imagen:

//Función para crear la Cuadrícula con map
function creaCuadricula() {
            for (let x = 0; x < 10; x++) {
                            map[x] = [];
                for (let y = 0; y < 10; y++) {
                    addCell(x, y); 
                }
            }
        //Función para añadir celda
        function addCell(x, y) {
            map[x][y] = cell(x,y); // create a new object on x and y
        }
        //Función para crear celda
        function cell(x,y) {
            return (x +":"+ y);
        }
}

let map = [];

creaCuadricula(10,10);

console.log(map);

//Posiciones de los Puntos
//Punto B = ["1:1","1:2"]
//Punto C = ["5:7","5:8"]

//Función para sacar los valores en comun:
function matrices(){

    var array1 = [11,66,34,24,68,23,36,16];
	var array2 = [66,76,36,14,15,13,35,68]; 

    iguales = 0;

    for(i=0;i<array1.length;i++){

        for(j=0;j<array2.length;j++){

            if(array1[i] == array2[j]){

                console.log(array1[i]+array2);
            }
        }

    }
    
}