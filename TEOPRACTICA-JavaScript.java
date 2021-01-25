04/12/2020
	function sum(a,b){
		
		int a = ();
		int b = ();
		
		return a+b;
	}
	
	Comprobarlo con la Calculadora - vista programador
	
	PROCESOS	ESTADO
CALL	0		SUM
PASS	1		A 5
PASS	1		B 3
GET		2		A
GET		2		B
RETURN	3		A+B
SET		4		8

Las direcciones de memoria dependerán si
se trata de una arquitectura de 32 bits o de 64 bits.
0000 0000 0000 0000 0000...
0000 0001 0101
0000 0001 0011
0000 0010 0000 0000 0000...
0000 0010 0000 0000 0000...
0000 0011 
0000 0100 1000

1111 1111

						Nombrar las variables:
						
1. Nunca puede ser un numero ni palabras reservadas.
2. Conceptos en la escritura

function Foo(name){		PASCAL CASE
	
}
// Usamos la pascal case, para crear el constructor de un objeto.


function helloWorld(){		CAMEL CASE
	
}
// Usamos el camel case, para crear la función de un objeto.


function xyz(array){
	
	var x = 0;
	//Iterar por todos los elementos del array desde 0.
	for(i=0; array.length > i; i++){
		x = array[i] + x;
	}
	return x;
}
xyz([1, 3, 6]); // El resultado será 10

function acumulable(array){
	
	var x = 0;
	//Iterar por todos los elementos del array desde 0.
	for(i=0; array.length > i; i++){
		x = array[i] + x;
	}
	return x;
}
acumulable([1, 3, 6]);

Calcular cual es el alumno más joven de la clase:
Calcular el mínimo valor dado de una secuencia dada:
Recordar el uso del if y el signo menor.

//Calcula el menor valor dado:

//Declaro un array con determinados valores
var numeros = [3,66,67,611,23,11,100,8,93,17,24,7,22,33,45,28,33,23,12,99,100];
//me creo un array, para el menor valor
var min = numeros[0]

for(i=0;i<numeros.length;i++){
    if(min<numeros[i]){
	/*Si el min es menor en la lista acumulable de numeros*/
       (numeros[i]=min)
	   //entonces min es igual a numeros
    }else{
        console.log(min);
		//lanza el minimo
    }
}



//Que está realizando el else if dentro éste trozo?
var min = numeros[0]

for(i=0;i<numeros.length;i++){
    if(min<numeros[i++]){

       (min=numeros[i++])
    }else if (min>numeros[i++]){
        (numeros[i++]=min)
    }else{
        console.log(min);
    }
}

//Ahora con las herramientas Math.max y Math.min

var numbers = [1, 2, 3, 4];
console.log(Math.max.apply(null, numbers)); // 4
consoles.log(Math.min.apply(null, numbers)); // 1

public class MayoryMenor {
	
	public static void main(String[] args){
		
		int [] edad = (13,16,68,6,23,11,8,93,17,24);
		int edadmayor = edad[0];
		int edadmenor = edad[0];
		
		for(int x=0; x<10; x++){
			
			if(edad[x] > edadmayor)
				edadmayor = edad[x];
			
			if(edad[x] < edadmenor)
				edadmenor = edad[x];
		}
		
		system.out.print("El mayor del vector es: " + edadmayor + "");
		system.out.print("El menor del vector es: " + edadmenor + "");
	}
		
}

//	marca_de_verificación_blanca
//	ojos
//	manos_levantadas
13:57

09/12/2020
//		EJERCICIO - 1:

// Basado en este algoritmo calcular el minimo de usa secuencia dada, o
// en este caso el integrante más joven de la clase:

//Declaramos la función y parámetros utilizados:
function numeroMenor(array) {
  
  menor = array[0]; //menor valor situado en el array
  
  for (i = 0; array.length > i; i++) {
	  
    num = array[i]; //numero del array con el valor que tenga
					//se puede poner directamente dentro del if.
					//if(array[i] < menor)
					//		menor = array[i];
	if(num < menor){ //sentencias
		menor = num;
	}
  }
  return menor;		//dato devuelto
}
//Le pasamos el siguiente array para comprobarlo:
numeroMenor ([32,30,28,38,29,22,27,24,18,255,30,28,33,26,34,24,27]);

//Otra Forma, muy similar.
function edad(array){
	
	var x = array[0];
	
	for(var i = 0; array.length > i; i++){
		
		var menor = array[i];
		
		if(menor < x){
			
			x = menor;
			
		}
	}
	return x;
}
edad ([32,30,28,38,23,26,29,22,27,24,18]);


										//Ejercicios de Navidad:

//https://github.com/generation-org/javascript/tree/master/1.1.2

//INTRO-CS-2 -Introducción a los algoritmos

/*1.	Dada una lista de números positivos [3, 5, 7, 1, 6], 
devuelve el número más grande de la lista.*/

function numMayor(numeros){
	//definimos variables
	let num = 0;
	let mayor = numeros[0];
	
	for(i=0;i < numeros.length;i++){
		
		let num = numeros[i];
		
		if(num > mayor){
			mayor = num;
		}
	}
	return mayor;
}
numMayor ([3, 5, 7, 1, 6]);


/*2.	Estás tratando de ir del punto B al punto C. 
Solo puedes mover un bloque a la vez. 
Puede moverse hacia arriba, hacia abajo, de izquierda a derecha. 
Escribe un algoritmo para ir del punto B al punto C. */

Hola,
Se supone que tienes que calcular el recorrido más corto, 
es decir trata una posición como X y la otra como Y. 
Haz la diferencia de las X y las Y y después tendrás que devolver dos movimientos.
1. Moverlo en X o Y y después al contrario, puedes utilizar Math.min 
y te dará el menor de X y el menor de Y



//Función para crear la Cuadrícula
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
//Posiciones
//Punto B = ["1:1","1:2"]
//Punto C = ["5:7","5:8"]

var tablero=[][]


for(i=0;i<10;i++){
    for(t=0;t<9;t++){
        tablero=tablero+""
    }
    tablero=tablero+""+"\n"
}

console.log(tablero)




/*
(10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]
0: (10) ["0:0", "0:1", "0:2", "0:3", "0:4", "0:5", "0:6", "0:7", "0:8", "0:9"]
1: (10) ["1:0", "1:1", "1:2", "1:3", "1:4", "1:5", "1:6", "1:7", "1:8", "1:9"]
2: (10) ["2:0", "2:1", "2:2", "2:3", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9"]
3: (10) ["3:0", "3:1", "3:2", "3:3", "3:4", "3:5", "3:6", "3:7", "3:8", "3:9"]
4: (10) ["4:0", "4:1", "4:2", "4:3", "4:4", "4:5", "4:6", "4:7", "4:8", "4:9"]
5: (10) ["5:0", "5:1", "5:2", "5:3", "5:4", "5:5", "5:6", "5:7", "5:8", "5:9"]
6: (10) ["6:0", "6:1", "6:2", "6:3", "6:4", "6:5", "6:6", "6:7", "6:8", "6:9"]
7: (10) ["7:0", "7:1", "7:2", "7:3", "7:4", "7:5", "7:6", "7:7", "7:8", "7:9"]
8: (10) ["8:0", "8:1", "8:2", "8:3", "8:4", "8:5", "8:6", "8:7", "8:8", "8:9"]
9: (10) ["9:0", "9:1", "9:2", "9:3", "9:4", "9:5", "9:6", "9:7", "9:8", "9:9"]
undefined
*/

function destiny(){
	
	let array2D = ([0,1,2,3,4,5,6,7,8,9,10],[0,1,2,3,4,5,6,7,8,9,10]);
	//var array1 = ([0,1,2,3,4,5,6,7,8,9,10]);
	//var array2 = ([0,1,2,3,4,5,6,7,8,9,10]);
	//let B = 0;
	//let C = 0;
	//Posiciones actuales
	B = array2D[8][2];
	C = array2D[4][8];
		
	//Bucle que recorre el primer array
	for(var x = 0; x < array2D[x].length; x++) {
    //Bucle que recorre el array que está en la posición i
		for(var y = 0; y < array2D[y].length; y++) {
			
			document.write(array2D[x][y]);
		}
	}
}

	//Sara hizo la función basándose en las posiciones x,y de cada punto.
function bToC(){

var ejexB = 402;
var ejeyB = 408;
var ejexC = 102;
var ejeyC = 308;

let diferenciaxBC = ejexC-ejexB;
let diferenciayBC = ejeyC-ejeyB;

if (diferenciaxBC>0){
    while (ejexB !== ejexC) {
        ejexB++;

    } console.log('Ha sumado ' + diferenciaxBC + ' posiciones en el eje x')


} else if (diferenciaxBC<0){

    while (ejexB !== ejexC) {
        ejexB--;

    }console.log('Ha restado ' + diferenciaxBC + ' posiciones en el eje x')


} else {console.log('Ya está en la misma posicion en el eje x')}

if (diferenciayBC>0){
    while (ejeyB !== ejeyC) {
        ejeyB++;

    } 
    console.log('Ha sumado ' + diferenciayBC + ' posiciones en el eje y')


} else if (diferenciayBC<0){

    while (ejeyB !== ejeyC) {
        ejeyB--;

    } 
    console.log('Ha restado ' + diferenciayBC + ' posiciones en el eje y')

} else {console.log('Ya está en la misma posicion en el eje y')} 


}

bToC()	
	

/*Construya un programa que tome su nombre y lo guarde en una variable. 
En la parte superior de su código, escriba un comentario que tenga su 
nombre y la fecha de hoy. Imprima Hello my name is con su nombre en 
la consola.*/

function myFicha(){
	//variables
	let nombre;
	let edad;
	let altura;
	let race;
	let sex;
	//entrada por teclado
	nombre = prompt('Introduce tu Nombre: ', '');
	edad = prompt('Introduce tu Edad: ', '');
	altura = prompt('Introduce tu Altura: ', '');
	race = prompt('Introduce tu Raza: ', '');
	sex = prompt('Introduce tu Sexo: ', '');
	//salida del mensaje (document.write / console.log)
	console.log('Tu nombre es :',nombre,"<br>")
	console.log('Tu edad es :',edad,"<br>")
	console.log('Tu estatura es de:',altura,"<br>")
	console.log('Tu raza es :',race,"<br>")
	console.log('Tu sexo es :',sex,"<br>")
	
}

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
	
	
<script language = "JavaScript">
function CelsiusConverter () {
document.converter.fahrenheit.value = (document.converter.celsius.value * 9/5) + 32
document.converter.kelvin.value = document.converter.celsius.value * 1 + 273.15
}
function FahrenheitConverter () {
document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5/9
document.converter.kelvin.value = ((document.converter.fahrenheit.value - 32) * 5/9) +273.15
}
función KelvinConverter () {
document.converter.celsius.value = document.converter.kelvin.value - 273.15
document.converter.fahrenheit.value = ((document.converter.kelvin.value - 273.15) * 9/5) +32
}	
</script>
	
<formulario nombre = "convertidor">
Celsius: <input type = "text" name = "celsius" onChange = "CelsiusConverter ()"> <br />
Fahrenheit: <input type = "text" name = "fahrenheit" onChange = "FahrenheitConverter ()"> <br />
Kelvin: <input type = "text" name = "kelvin" onChange = "KelvinConverter ()"> <br />
<input type = "button" value = "¡Convertir!" />
</form>
	
	
	
//el de la gente en la cola del super

function clientes(){
	
		var marco = [0, 1, 2, 3];
		var marie = [0, 1, 2, 3];
		var tomas = [0, 1, 2, 3];

		var totalPeople = 15;

		var init = 0;
		var x=0;

		for(i=0; i<marco.length; i++){
				
			
		}

		for(x=0; x<marie.length; x++){
		
			
		}
		
		for(y=0; y<tomas.length; y++){
		
		
		}
	
}
		
	

for(let i = 0; marco.length>i; i++){

    init = marco[i]
    tomas = (totalPeople-init)/3

    if((totalPeople-init)%3===0){

        var marie = 2tomas;

        console.log('Tomas atiende a ' + tomas + ', Maria atiende a ' + marie + ' y marco atiende a ' + marco[i])
    }
}
	



//https://github.com/generation-org/javascript/tree/master/1.1.3

//INTRO-CS-3 - Algorithm Design and Problem Solving - Introduction








































//https://github.com/generation-org/javascript/tree/master/INTRO-CS-4

//INTRO-CS-4 - Algorithm Design and Problem Solving - Advanced

//const array4 = {c:32,a:50,d:30,t:22,r:60,u:20,j:42};
//const array5 = {c:32,a:5,d:30,t:23,r:56,u:20,j:44};
//const array6 = {c:32,a:50,d:30,t:22,r:56,u:20,j:44};

/*					Ejercicios adicionales - Matrices

var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];

Cree una función que compare las 3 matrices y encuentre elementos comunes. */
//se crean 3 arrays con valores en comun (a,c y d)

//Esta función imprime solo los numeros repetidos
function identicos(array1, array2, array3, array4){
	
	//const array1 = ['a','b','c','d','u','r','w','q','o'];
	//const array2 = ['d','e','a','c','i','w','ñ','l','p'];
	//const array3 = ['g','c','d','a','z','s','v','m','n'];
	
	var array1 = [11,66,34,24,68,23,36,16];
	var array2 = [66,76,36,14,15,13,35,68]; 
	var array3 = [66,77,36,44,15,16,37,68];
	var array4 = [66,78,36,43,51,23,25,68];
	
	var iguales=0;
	
	for(var i in array1)
	{
		 //console.log(i+"----> for 1")
			for(var j in array1)
			{
			   // console.log(j+"---> for 2")
			   for(var x in array1)
			   {
					// console.log(j+"---> for 3")
					for(var y in array1)
					{
						// console.log(j+"---> for 4")
						
						if(array1[i] == array2[j] && array3[x] == array4[y]){
							
							iguales++;
							
						console.log(array2[j])
						}
					}
				}
			}
	}
}			
console.log(identicos());
	
//Este Script encambio muestra el Numero de valores repetidos
<script>
var array1=new Array(1,2,3,4,5,6);
var array2=new Array(2,4,6,78);
 
var iguales=0;
for(var i=0;i<array1.length;i++)
{
	for(var j=0;j<array1.length;j++)
	{
		if(array1[i]==array2[j])
			iguales++;
	}
}
alert(iguales);
</script>




//arrow function
array1.length == array2.length && array1.every(function(v,i){return v === array2[i]});


























//Una variable definida como constante: const=3, siempre será 3.
//Un Poco mas sobre OPERADORES
// como funciona let, SÓLO se cumple en su trozo de llaves
// equivale a redefinir las variables.
var x = 10;

function f0(){
	console.log(x)
	{let x = 1};
}

f0();
 //en cambio si definimos var pero no la inicializamos, 
 // devolverá undefined. Null y Undefined, son valores primitivos.
var x = 10;

function f0(){
	console.log(x)
	var x = 1;
}
f0();

var x = 7;
x = 15;
x = 20;
const x = 7;
x = 15;   //Aqui da un Error


var x = 1;
var y = 2;
var z = x + y;
z = 3;

//Podria sumar dos variables y asignarla a una constante
// por ejemplo

x + y = z
const z;

//dado una secuencia de numeros, mostrar todos los divisibles
// por 4 y 9.
function div(array) {
  
  for(let i=0; i < array.length; i++){
	  
	  let value = array[i];
	  
	  if(value % 4 === 0)||(value % 9 === 0){
		  //No puede ser el valor && porque sino se 
		  //colapsa la función. Me daría un Undefined.
		  //TO DO, es decir, 'por hacer' - es como el javadoc
		   
	  }
	  
  } 
}
div ([32,30,28,38,23,26,29,22,27,24,18,33,21,26,23,26,29,22,27,24,25,30,28,33,26,34,24,27]);

=
+
-
%
||
&&
== vs ===
!= vs !==

false or false = false
false or true = true //con el OR, basta con que sea uno True
true or false = true
true or true = true

true and true = true //en el AND manda el ultimo
false and false = false
false and true = false
true and false = false

var bar = 0;
var bus = 1;

const foo()=>console.log('hello world');


'' false = false
0 false
null false
undefinded false
false false
'' !='

var a=0;
if(!a){
	console.log(a)
}
//devuelve 0

//	FUNCIONES
//como tengo yo que declarar una funcion
//Si una función tiene más de tres argumentos, algo no va bien
function name(var1, var2, var3){
	
	//Puede tener un return, no obligatoriamente tiene que tenerlo
	//Puede no retornar nada()
	//El UNDEFINED en JavaScript y el VOID en Java
	}

function name(a,b){
	let sum = a+b;
	console.log(sum);	
}	
var a = name(6,6) //12
var a = name(6,6) //undefined
	
	
//Funciones flecha, se sustituye el return por =>
function sum(a,b){
	return a+b;
}
const sum = (a,b) => a+b;


//		EJERCICIO - 2:

//Dada una secuencia dada obtener los numeros pares:
function par(array){
	for(let i=0; i<array.length;i++){
		if(array[i]%2===0){
			console.log(array[i]);
		}
	}	
}
par ([32,30,28,38,23,26,29,22,27,24,18]);
//Los Impares
function impar(array){
	for(let i=0; i<array.length;i++){
		if(array[i]%2!==0){
			console.log(array[i]);
		}
	}	
}
impar ([32,30,28,38,23,26,29,22,27,24,18]);
//Los mayores que 3
function mayor3(array){
	for(let i=0; i<array.length;i++){
		if(array[i]>3){
			console.log(array[i]);
		}
	}	
}
mayor3 ([32,30,28,38,23,26,29,22,27,24,18]);
//Los mayores que 3 y menores que 9
function mayor3menor9(array){
	for(let i=0; i<array.length;i++){
		if(array[i]>3 || array[i]<9){
			console.log(array[i]);
		}
	}	
}
mayor3menor9 ([32,30,28,38,23,26,29,22,27,24,18]);


//		EJERCICIO - 3:

//Lograr una funcion combinada que me incorpore las demas
//Tenemos que lograr una función única que evalúe todo
//
//puedo usar la funcion FILTER para hacer la llamada en una sola línea
//predicate es otra funcion
function filter(array, predicate){
	
	for(let i=0; i<array.length;i++){
		let value = array[i];
		if(predicate(value)){
			console.log(value);
		}
		
	}
}
//vamos a ver como trabaja la función anterior
filter([1,2,3], (v)=>v%2===0)
filter([1,2,3], (v)=>v%2!==0)
filter([1,2,3], (v)=>v>3)
filter([1,2,3], (v)=>v>3 && v<9)


//A una funcion se le puede pasar todo lo que nosotros queramos;
const pares = function(v){
	return v%2===0;
}

//1. Recorrer una secuencia
//2. Por cada valor de la secuencia devolver True || False
//3. 
//Primero tener en cuenta los valores que no son correctos
//y luego desarrollamos lo demas
function tareas(n){
	
	var n = 0;
	//COn el siguiente IF nos quitamos el error principal,
	//de encima.
	if(n < 0 || n > 15){
		return "Falló";
	}
	//ahora lo demás...
		else if(n > 6 && n < 9){
			return "Insuficiente";
		}
			else if(n >= 9 && n < 15){
				return "Bueno";
			}
			//Leemos el enunciado de de forma inversa.
				else{
					return "Excelente!";
				}
						
}
//Entonces para probarlo, escribimos en la consola
console.log(tareas(4));
console.log(tareas(14));
console.log(tareas(8));
console.log(tareas(12));
console.log(tareas(13));
console.log(tareas(16));
console.log(tareas(18));


/* EJERCICIO - 4:

Abra una página de Javascript de repl.it y llámela 
Ejercicio de Introducción a los Algoritmos 3.
Tenemos 3 artículos y sabemos el precio de cada uno. 
Sin embargo, solo podemos comprar los dos artículos menos costosos.
Escriba un algoritmo que tome tres entradas de usuario y 
envíe los dos precios más pequeños a la consola. */

function numeroMenor(array) {
  
  num = 0;
  menor = array[0];

	for (i = 0; array.length > i; i++) {
		
		num = array[i];
		
		if(num < menor){
			menor = num;
		}
	}
	 return menor;
	 
}
numeroMenor ([32,30,28,33,23,26,19,80,27,24,90]);	
	

//Averiguar los 2 precios más bajos de una lista dada:		//corregirrrr
function baratos(numeros){
	
	var min1 = numeros[0]
	var min2 = numeros[0];

		for(i=0;i<numeros.length;i++){
		
			if(min1<numeros[i]){
			   (min1=numeros);
			   
			   if(min2<numeros[i]){
				   (min2=numeros);
			   }
				else{
					console.log (min1), (min2);
						
				}	
			}
		}
		return min1;
		return min2;
}
baratos ([32,30,28,13,23,26,29,80,27,24,90]);
	
	
	
	
//Otra forma??
function Baratos(array){
	
	num1=0;
	num2=0;
	menor1=array1[0];
	menor2=array2[1];
	
	for(i=0;array.length > i; i++){
		
		num1 = array1[i];
		num2 = array2[i];
		
		if(num1 < menor1){
			menor1 = num1;
		}
			else if(num2 < menor2){
				menor2 = num2;
			}	
	}
	return menor1, menor2;
}
Baratos	menor1([32,30,28,38,23,26,29,22,27,24,18,213,333]);
//menor2	([26,29,22,27,24,25,30,28,33,26,34,24,27]);


//ANÁLISIS DE CADENAS DE CARACTERES

//Metodos que aplicaremos a los ARRAYS
push
pop
indexOf
splice
slice
length
shift
unshift
map
math.pow

//Integrar un valor a un array - metodo 'push'
a=[1,2,3];
0 -> 1
1 -> 2
2 -> 3

a.push(4)
//me va a devolver
a=[1,2,3,4]:

//Ejemplo
function foo(a,b){
	for(let i=0; i< b.length; i++){
		a.push(b[i])
	}
}

//agregar al principio
unshift //
ej: a.unshift(3);
shift // 

//agregar por el final
push //para agregar
ej: a.push(5);
pop //me da el ultimo valor

//PRÁCTICA
/*Hacer una funcion que basada en un algoritmo,
quite el último valor agregado al array.*/

//ivan
function foo(arr,val){
	var x = arr.indexOf(val)
	arr.splice(x,1)
	return arr
}



//corregirrrr
function foo(a,b){
	var b = a.indexOf(b)
	a.splice(b,1)
	/*
	for(let i=0; i< b.length; i++){
		a.push(b[i])
	}*/
	return a;
}

/*primero hay que ver la posiciion
en la que va a ir insertado*/

function foo(array,value){
	let index = array.indexOf(value);
	if(index !== -1){
		array.splice(index,1);
	}
	return array;
	
}
var a=[1,2,3]
var value=2;
foo(a,value)
a


//Ivan
function foo(array,value, before){
	let index = array.indexOf(before);
	array.splice(index,0,value)
	return array;
	
}
foo([1,4,5,6,7,8,9],2,3,4)

/*primero hay que ver la posiciion
en el qeu valr esta i sertado*/

function foo(array,value, before){
	let index = array.indexOf(before);
	
	if(index !== -1){
		array.splice(index,0, value);
	}
	return array;
	
}
foo([1,2,3,5,6,8],4,7)

var a=[1,2,4]
var value=2;
foo(a,value)
a

//Luis
 function caro (precios) {
	  let mayores = precios.sort(function(a, b) {
		  
		return b - a;
	  
		}).slice(0,3);
	
	  return mayores  
}

//julen
function mayorS(arr){
  let x =arr.sort().slice(0,arr.length)
  return x
}
mayorS([2,4,6,90,50,60])

//Joseph
De joseph Tapia para todos:  12:22 PM
var a = [1, 2, 3, 5, 6, 100, 23, 4];
a.sort(function(a, b) {
  return a - b;
});
console.log(a);

//Multiplicar al cuadrado
var a=[1,2,3,4,5]
var b=a.map(function(x){
  return Math.pow(x,2);
})
console.log(b)

/*Crear un Array sin valores duplicados*/
/*Comprobar que un elemento no esta en un array*/
b.indexOf(1)===-1
b.push(1)

/*
Crear un nuevo array
recorrer el anterior
comprobar que cada valor no esta en el nuevo
insertar el nuevo
retornar el nuevo array
*/
function duplicate(array){
	
	let newArray=[];
	for(let i=0; i < array.length;i++){
		if(newArray.indexOf(array[i])===-1){
			newArray.push(array[i])
		}
	}
	return newArray;
}

//Avanzado - se puede hacer con SET
let duplicados = [1,1,2,2,3,3,4,4,5,5,6,6,7]
let unicos = Array.from(new Set(duplicados))
console.log(unicos)
//En una sola linea
new Set([23,44,21,23,21,44])



							//OBJETOS

							
						
var foo = ();
var bar = [];

var foo = {
	dni: 'X4815107B',
	name: 'Imanol Ortega',
	edad: '31',
	pais: 'Argentina',
}

a = [1,2,3,4];
//Los Atributos de un Objeto son {key:value}
//Ejemplo:

foo.dni; -> dni: X4815107B
bar.a ->

//Creamos el objeto coche:
var coche = {
	
	marca:string
	model:string
	color:string
	
	//puertas:[{posicion:string, color}]
	puertas:[{posicion:string, color}
			{posicion:'izquierda',color:'azul'},
			{posicion:'derecha',color:'verde'},
			{posicion:'trasera',color:'amarillo'},
	],
	
	volante:{color:'rojo',
			diametro:52,
	}

}

vehiculo.volante.diametro,

vehiculo.volante && vehiculo.volante.color
//"negro"
vehiculo.volante && vehiculo.volante.diametro
//"52"
vehiculo.puertas.find(g=>g.posicion) === 'trasera')


//Metodo para sacar el color de las puerta trasera.
function getGate(puertas){
	
	for(let i=0; i < length; i++){
		let value = puertas[i];
		if(value.posicion === posicion)
			return value;
	}
	
}
//una vez que tengamos la funcion para buscar la puerta,
//la invocamos:

getGate(vehiculo.puertas).color
getGate(vehiculo.puertas).posicion
//Creamos una constante dentro del rango de valores
//Las constantes también sirven para almacenar valores Seguros:



//agregar aqui el ejemplo de la captura



a.find(); //Encuentra la primera coincidencia respecto a un valor dado
a.filter(); //Encuentra un array de valores, que tienen en un común un valor dado


//para asegurarnos de que nos devolverá el valor deseado
const gate = getGate(vehiculo.puertas,'derecha')

if(gate){
	gate.color,
	gate.posicion,
}
getGate(gates,'trasera').color


//		EJERCICIOS

//Crear un Objeto Animales
var animal = {
	
	genero:string,
	sexo:string,
	medio:string,
	
}

var mundo = [

	{genero:'terrestre',sexo:'femenino',medio:'montaña'},
	{genero:'acuatico',sexo:'masculino',medio:'rio'},
	{genero:'terrestre',sexo:'masculino',medio:'selva'},
	//{genero:'',sexo:'',medio:''},

]


//1. Devuelve todos los animales que son terrestres:

//Tenemos que crear un nuevo array
//Siempre recordemos el Acceso {key:value} !!
function filter(array,key,value){
	
	let newArray = [];
	for(let i=0;i<array.length;i++){
		if(array[i][key]===value){
			newArray.push(array[i])
		}
	}
	return newArray;
}

//Otra forma sin el push
function filter(array,key,value){
	
	let newArray = [];
	for(let i=0;i<array.length;i++){
		if(array[i][key]===value){
			return newArray;
		}
	}
}
//Luego probamos
filter(mundo,'genero','terrestre')

//Recordemos que el uso de && equivale a IF, otra forma
mundo && mundo.filter(a=>a.genero === 'terrestre');


//2. Ahora buscar todos los animales terrestres de sexo femenino
//el uso de predicate nos permite invocar todos los demas elementos.
function find(array,predicate){
	
	for(let i=0;i<array.length;i++){
		if(predicate(array[i])){
			return array[i];
		}
	}
}
//Otra forma con function arrow
filter(array,(v) => v.genero === 'terrestre')
filter(array,(v) => v.genero === 'terrestre' && v.sexo === 'femenino')

//DE PEDRO:
var animal={
   genero:string,
   sexo:string
   medio:string
} //objeto
var mundo=[
   {genero:'terrestre',sexo:'femenino',medio:'montaña'},
   {genero:'acuatico',sexo:'masculino',medio:'rio'},
   {genero:'terrestre',sexo:'masculino',medio:'selva'},
]
function filter(array,predicate){
   let newArray=[];
   for(let i=0;i<array.length;i++){
     if(predicate(array[i])){
        newArray.push(array[i])
     }
   }
   return newArray;
}
function find(array,predicate){
   for(let i=0;i<array.length;i++){
     if(predicate(array[i]){
        return array[i]
     }
   }
}
//aplicamos function arrows
filter(array,(v)=>v.genero==='terrestre')
mundo.filter((v)=>v.genero==='terrestre')
filter(array,(v)=>v.genero==='terrestre' && v.sexo==='masculino')

Pedro Hurtado  13:46
1. representa una estructura de información de la vida real
    key:value
    key puede ser alfanumerica con la misma restriccion que cualquier
    identificador
    value:Numbre|Boolean|String|Null|Undefined|Array|Object
Array:object cuya key es el indice del array
typeof(Array) object
Array.isArray([]) //true
var foo = {id:1,nane:'pedro'}
foo.id
1
foo["id"]
1
foo.id === foo["id"]
1:Number



//Para mañana crear 2 objetos que tengan varias propiedades
//Analizar sus características, si es un atributo,un array de propiedades, etc...

1. Representa una estructura de informacion de la vida real
2. key:value
	key: puede ser alfanumerica con la misma restricccion que cualquier identificador
	
	value:|Boolean|String|Null|Undefinded|Array|Object
	
	Array: Object cuya key es el indice del array
	
	typeof(array) devuelve object
	
	var foo = (id:1, name:'pedro')
	
	foo.id
	
	1
	
	foo["id"]
	
	1
	
	foo.id === foo["id"]
	
	//por ejemplo: El 1 es un objeto de tipo numbers
	//Un array tambien es un objeto
	
//Analizamos las lineas de comando
function foo(){
	
	console.log('hello world')
}

foo()
	
a=[1,2,3];	
a.length;
a.find(); //Encuentra la primera coincidencia respecto a un valor dado
a.filter(); //Encuentra un array de valores, que tienen en un común un valor dado
a.math();

a.filter(element,index,array)=>{debugger; return true});
	
arr.find(callback(element[,index[, array]])[, thisArg])
	
arr.filter(callback(element[,index[, array]])[, thisArg])	
	
const foo =()=>{return 1}

a=foo();

const suma =(a,b) => a+b

const bar=(a,b)=>{}

function bar(a){};
	
	/*Buscar y leer POLYFILL en MDN*/
	
	/*Buscar Array.prototype.sort()*/
	
	//Ejercicio - Analizar
	
/*1. Dada la siguiente información, usar Map, Reduce, Filter y Sort
  a)obten el año donde más se facturo*/
///////////////////////////////////////////////////////////////////////////
var invoices=[
		  {year:'1999',number:'1',total:'$1000'},
		  {year:'2000',number:'6',total:'$100'},
		  {year:'2034',number:'7',total:'$999'},
		  {year:'1998',number:'4',total:'$1500'},
		  {year:'2077',number:'5',total:'$1022'},
		  {year:'2100',number:'8',total:'$913'},
];
//ref. abajo, veremos como se usa el reduce.
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

//RESPUESTA
//vamos a definir un total
var totals = invoices.reduce((acumulador,valorActual)=>{
	//debugger;
		let year = valorActual.year;
		let total = valorActual.total;
						
		if(acumulador.hasOwnProperty(year)){
			acumulador[year]=acumulador[year]+total;
		}else{
			acumulador[year]=total;
		}
		return acumulador;
												
},{});
//Ahora convierte un objeto a un array
Object.entries(totals).reduce((acumulador,valorActual)=>{
	debugger;
	acumulador.push({year:acumulador[0],total:valorActual[1]})
	return acumulador;
},[])
////////////////////////////////////////////////////////////////////////////					
		
a=acumulador
b=valor actual ->cada elemento del array

	//bien simple
	var arreglo  = [5,10,432,21,880,65,54,342,834,834,438];
    maximo = 0;

		for(var i=0,lenght=arreglo.length; i<lenght; i++){
			if(maximo < arreglo [i]){
				maximo = arreglo [i];
			}
		}
		document.write(maximo);	  
  
    //Las expresiones mas usadas
		map
		reduce
		filter
		find
		sort - ordenamiento de burbuja
			   comparaciones de parejas
		timsort
		
		burbuja
		insercion
		comparacion
		quizsort
		timsort
		
		
		push
		pop
	

//  b)devolver un array con la siguiente estructura
	[{year,sum(total)}]
	//ver metodos de JS en MDN
	//ejemplo
	[{year:1000, total:1000},{year:2000,total:1099}]

	//17/12/2020
	
//Object.entries es el metodo que recoger al objeto
//con 	clave:valor, es decir:
// acumulador:valorActual
//Esto..
Object.entries = [[1999:1000],[2000,1099]];
(totals) //-> el campo que me interesa

Object.entries(totals).reduce((a,b)=>{
	
	let year = b[0];//posicion clave
	let total = b[1];//posicion valor
	let obj = {year:year,total:total}//Objeto clave:valor
	
	a.push(obj)
	return a;
},[])

/*	Object.entries(foo)
	Object.fromEntries(Object.entries(foo))
	Object.keys(foo)
	Object.values(foo)
*/

totals = {
	1999:1000,
	2000:1099
}

[
{year:1999,total:1000},
{year:2000,total:1099},
]
	
[[1999:1000],[2000,1099]].reduce((acumulado,valoractual)=>{
	
	let year = valoractual[0],
	let total = valoractual[1],
	
	//con el push creo ese nuevo total
	acumulado.push({year:year,total:total})
	return acumulado;
},[])

//Simple ejemplo del metodo reduce:
[1,2,3].reduce((a,v)=>a+v)

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
//Simple ejemplo del metodo map:
[1,2,3].map((a,v)=>a+v)

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
	
//Objeto color:
color = {
	r:value,
	g:value,
	b:value,
}

//Ordenaciones con Sort y Comprobaciones que realiza la Libreria
-1		0		1
menor	igual	mayor
  
function sort = (a,b)=>{
	  
	  if(a<b){
	  return -1;
	  }
		  if(a>b){
			return 1;
	  }
	  return 0;
}    

const sum = (a,b)=>a+b; //1º prueba

//El compilador realizaría esto a la hora de comprobar
//la función sort:
describe('call sort and return -1',()=>{
	expect(sort(3,5)).equals(-1)})
describe('call sort and return 1',()=>{
	expect(sort(5,3)).equals(1)})
describe('call sort and return 0',()=>{
	expect(sort(5,5)).equals(0)})
	//dependiendo del valor introducido en la suma,
	//Devolverá un mensaje de error - rojo o correcto - verde
	
	//Refactorización:
	test('call sort and return 3',()=>{
		expect(sort(5,2)).toBe(3)
	})
	test('call sum and return 8',()=>{
		expect(sum(5,3)).toBe(8)
	})
	
	//El 100% de las comprobaciones y nuestras propias pruebas se llama:
	//Cobertura = coverage = 100%
	//Apple, Google, Microsoft, Facebook - Google tiene un Coverage del 80% por ejemplo.
	//La cobertura al 100% es la ruina, porque el que mucho abarca poco aprieta.
	//Ese 20%, es un sector de comprobaciones que fallan. 
	//Por eso debemos instalar actualizaciones.

	/*
	Desarrollo Guiado por Pruebas - Test Driven Development
	TDD: Yo no puedo sacar un productor al mercado sin probarlo
	Refactorización: Se realiza una síntesis del código, para que
					 sea más compacto y seguro.
	
	Visual Studio Code, Nodejs Git
	workflow
	Scrum
	
	PO: Product Owner - 4 desarrolladores
	JP: Jefe de Proyecto
	/////////////////////////////////////////////////
	Estamos a 17 de diciembre, hemos sacado nuestra version del producto.
	Han pasado 3 meses y hay que hacer una funcion que sea capaz de sumar*/
	
	describe('call sum and return 8',()=>{
		expect(sum(5,3)).equals(8))
	}
	 
	//Necesito refactorizar una funcion de otro compañero:
	//ej
	function getLength(array){
		if(arr.length===0){
			return 0;
		}else{
			return arr.length;
		}
	}
	//refactorizacion
	function getLength(array){
		return array.length;
	})
	getLength([]);
	
	//Ejemplo simple, refactorizacion 
	//Se repite en DaysRefactoring.pdf - Pag 18
	var result = {
		'5':()=>"regular",
		'7':()=>"bueno",
		'10':()=>"excelente",
	}
	//refactorizacion
	function getresult(value){
		return result[value]();
	}
	
//	21/12/2020
Flujo de Trabajo de un Desarrollador:

JP
DESARROLLO
QA

 - Vamos a empezar abriendo GIT
 
 - Se crea una Rama MASTER	V01 - Versión copia y original
 -					MASTER 	V02
 -					MASTER 	V03.1
 -					MASTER 	V03.2
 - Luis se pone a programar una tarea haciendo un DEVELOP (La rama DEVELOP es eterna)
 Rama Release - Vida Temporal hasta que llega el producto final y se mergea a la MASTER
 - RELEASE --> Testeada por el equipo de QA (y la agrega a la Master)
 
 -->FEATURE/Task1 --> a la rama DEVELOP
 -->FEATURE/Task2 --> a la rama DEVELOP
 -->Aplico un HOSTFIX --> MASTER --> DEVELOP
 
 -->entonces realizará un MERGE
 
 //COmandos de GIT
 
 Git add - añade ficheros al repositorio
 Git add . Copia del actual repositorio
 Git commit - realizar los cambios sobre el fichero
 Git Pull - Descargar toda la rama al equipo local
 Git Push - Publicar todo el contenido local al servidor de versiones
	
	
git add
git commit -m 'af dsadasdasd dasdasd'
git pull
git push

git branch - crear rama
git checkout - cambiar de rama

//si se incorpora un nuevo trabajador
git clone
//para descargar toda la rama
git fetch
	
//Concepto de SCRUM

Scrum:
	daily
	backlog
	sprint
	retrospectiva
	
//Se definen y dividen las tareas	
backlog - para Calendario de Windows:

	1.TimeSystem
	2.SystemDate
	3.Month
		3.1Date Month
		3.2Button Month
		3.3DaysOfWeekend
		3.4Day
	
	done is done
	//Comenzar siempre por las tareas que no tengan dependencias de otras.
	
master
develop

	git checkout -b feat/day
	git add .
	git commit -m 'dasdsadd sdad'
	git pull
	git push origin feat/day
	git checkout develop
	git merge origin feat/day
	git pull origin develop
	git push origin develop (el origin es el path remoto)
	
git checkout master
git merge origin develop
git add
git commit -m 'dadsdasds'
git push

//Para crear un servidor web al momento:
npm install -g http-server
http-server
//Etiquetas que veremos de html:
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Menu -->
    <header>
        <!--La etiqueta nav es la que define una sección por la que navegamos-->
        <nav>
            <ul>
                <li><a href="https://google.es">Google</a></li>
                <li><a href="https://linkedin.com">Linkedin</a></li>
            </ul>
        </nav>
    </header>
</head>
<body>
<main>
    <article>
        <h1>
            "Titulo"
        </h1>
        <section>
            <h2>
                "Titulo de la Seccion"
            </h2>
        </section>
        <aside>

        </aside>
    </article>
</main>

    <form action="" method="POST">
    <div>
        <input type="text" name="user">
    </div>    
    <div>
        <input type="password" name="pass">
    </div>
    <div>
        <button type="submit">Login</button>
    </div> 
    </form>

</body>
</html>

header
nav - indica semanticamente que hay una seccion de navegacion
main
sdection
aside
article
footer
<p>
<p strong>
a - anchor, para navegar, un link
tanto dentro como fuera de la web
<a href=""></a>
img
video
audio
src
iframe: cargar contenido externo
ul
ol
//para el diseño
div
span
	
//CSS
selectores css:
	//mientras tanto, en el html...
	
		div class="heading1"
		p id = "principal"
		
		div {
			color:blue;
		}
		.heading1{
			font-size:25px;
		}
		#principal{
			font-size:18px;
		}
		
debemos poner el . antes de la palabra si tengo un //div class
debemos poner el # antes de la palabra si tengo un //id - No se pueden repetir
Se podrán concatenar mediante un punto . todos aquellos elementos específicos
que se quieran modificar de la página. Pero mejor, divide y vencerás.


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*A partir de aquí, elige el objeto favorito de tu cuarto,
y establece sus propiedades y funciones correspondientes.

var camisas = {
	size:string;
	price:number;
	buttons:number;
	color:string;
	texture:string;
	mark:string;
}

var lamp = {
	encendida:boolean;
	apagada:boolean;
	interruptor:false;
};

function lampara (lamp){
		
	//	let encendida=1;
	//	let apagada=0;
		
		encendida:boolean;
		apagada:boolean;
		estado:false; //empieza estando apagada

		if(apagada === estado){
			estado === false;
			return apagada;
		}
		else{
			return encendida;
		}	
}


//Para el cajon1
function cajones(cajon1){
	if(cajon1 === estado){
		console.log(close);
	}else{
		console.log(open);
	};
}

var armario = ['cajon1','cajon2','cajon3',,'cajon4','puerta1','puerta2'];

var  cajon1 = {
	contenido:['libro','pipa','llaves','cartera'],
	color:string;
	ancho:number;
	largo:number;
	estado:false;
	open:true;
	close:false;
};

var puerta1 = {
	color:string;
	ancho:number;
	largo:number;
	
};


//Ejemplo de Objeto Simple / Crea Persona
function createNewPerson(name,age) {
	
  var obj = {
	  name:string,
	  age:number,
	  gender:string,
	  interests:['surf','read','eat','sleep'],
  };
  
  obj.name = name;
  obj.age = age;
  
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + ' I have ' + this.age + ' years old.'.');
  };
  return obj;
}	

	//El uso del This / Diferencia entre obj y this
function Person(name) {
	
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}		
*/	
