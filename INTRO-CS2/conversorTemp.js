/*Construya un programa que:
	1.	Describe lo que hace el programa en la parte superior de la función.
	2.	Toma una temperatura en grados centígrados.
	3.	Convierte la temperatura de grados Celsius a Fahrenheit. 
		El código para la conversión está a continuación:
			var fahrenheit = celsiusTemp * 9 / 5 + 32;
    4.	Envía la temperatura en grados Fahrenheit a la consola.*/
    
	//Convertir a Fahrenheit
	function convertCelsiusaFahrenheit(celsius){
		
		let fahrenheit = celsius * 9 / 5.0 + 32;
		
		return fahrenheit;
	}
	//Convertir a Celsius
	function convertFahrenheitaCelsius(fahrenheit){
		
		let celsius = (fahrenheit - 32) * 5 / 9.0;
		
		return celsius;
    }
    
    console.log(); //salto de linea
    
	let celsius = 32;
    let resultado1 = convertCelsiusaFahrenheit(celsius);
    console.log(`${celsius}ºC = ${resultado1}ºF`);

    let fahrenheit = resultado1;
	let resultado2 = convertFahrenheitaCelsius(fahrenheit);
	console.log(`${fahrenheit}ºF = ${resultado2}ºC`);
    
	
    
    

