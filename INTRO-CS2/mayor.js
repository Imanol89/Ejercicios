/*1.	Dada una lista de números positivos [3, 5, 7, 1, 6], 
devuelve el número más grande de la lista.*/
function numMayor(numeros){
    
    num = 0;
	let mayor = numeros[0];
	
	for(i=0;i < numeros.length; i++){
        
        let num = numeros[i];
        
		if(num > mayor){
			(mayor = num);
        }
        
	}
    return mayor;
}
let numeros = [3, 5, 7, 1, 6];

