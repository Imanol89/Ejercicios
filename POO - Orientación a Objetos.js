

/*						Orientación a Objetos					*/
	
/*	Caracteristicas de los Objetos:

- Están compuestos por atributos y métodos/funciones.
- La palabra this reemplaza al nombre del Objeto.
- Los métodos/funciones trabajan sobre el propio objeto,
  de forma interna, OJO: de forma externa la palabra this pasa
  a ser de ámbito global.
- Un constructor es una función anónima que define un nuevo objeto 
  y lo devuelve, creando copias del objeto (también llamadas instancias), 
  cada una con sus propias propiedades, métodos y valores.
	El propósito de un constructor es el de funcionar como una fábrica de objetos.

	*/
	var miobjeto = {
		
		nombre: "Juan",
		edad: 30,
		
		mostrardatos: function() {
			var mensaje = "Nombre: " + miobjeto.nombre + "\r\n";
			mensaje += "Edad: " + miobjeto.edad;
			alert(mensaje);
			},
		cambiarnombre: function(nombrenuevo) {
			var nombreviejo = miobjeto.nombre;
			miobjeto.nombre = nombrenuevo;
			return nombreviejo;
			}
			
		};
	//Evolución a la palabra THIS
	function MiObjeto(nombreinicial, edadinicial){
		
		this.nombre = nombreinicial;
		this.edad = edadinicial;
		
		this.mostrardatos = function() {
		var mensaje = "Nombre: " + this.nombre + "\r\n";
		mensaje += "Edad: " + this.edad;
		console.log(mensaje);
		},
		
	/*	this.mostrarnombre = function(){
			console.log(this.nombre);
		};
		this.mostraredad = function(){
			console.log(this.edad);
	}*/
			//adicionales
			this.cambiarnombre = function(nombrenuevo){
			var nombreviejo = this.nombre;
			this.nombre = nombrenuevo;
			return nombreviejo;
			};
			this.cambiaredad = function(edadnueva){
			var edadvieja = this.edad;
			this.edad = edadnueva;
			return edadvieja;
			}
		
		
	}
	
	
	
	

[{
	id:1,
	name:'pedro';
}

{
	id:2,
	name'Maria';
}]

//constructor
function Foo(id, name){
	this.id = id;
	this.name = name;
	this._phone = phone;
}
	//A través de prototype le creo metodos
	//Ahora invoco la función del constructor
	Foo.prototype.write = function(){
		console.log(this.name);
		console.log(this._phone);
	}
	//metodo para pasar a mayusculas
	Foo.prototype.toUpperCase = function(){
		return this.name.toUpperCase();
	}
	
	//control de acceso a metodos con _ (solo lectura)
	
	Foo.prototype._write = function(){}

//Creamos instancias diferentes del objeto
var Pedro = new Foo(1,'Pedro');
var Maria = new Foo(2,'Maria');

//probamos la implementacion del nuevo metodo mayusculas
var Foo = new Foo(1, 'Pedro');
Foo.write();
Pedro.toUpperCase();

//añadir un nuevo atributo al objeto.
Foo.prototype.phone = 666666;

//cambiar valor
persona.phone = 777777;

///Metodos estaticos y Ahorro de Memoria

///Los metodos estáticos son usados por objetos que NO cambian su estado
///Una clase es la definición para mantener el estado de cualquier objeto

//Vamos a crear el 'fabricante de instancias de objetos' - una factoria

	//static
	Foo.create = function(id, name){
		return new this(id, name);
	}
	//private
	Foo.prototype._write = function(){}
	Foo.prototype.upperCase = function(){
		return this._name.toUpperCase();
	}

//ejemplos e instancias / mostrar incluso objetos HTML
document.createElement('div');
var div = document.createElement('div');
var p = document.createElement('p');

//	CLASES
//Las clases de JavaScript utilizan herencia basada en prototipos.
//A partir del 2015 el codigo se adapta segun ES5 o ES6, en el 2015
class Foo{
	//este metodo jamas deberia tocarlo
   constructor(id,name){
     this._id = id;
     this._name = name;
   }
   write(){
      console.log(this._id);
      console.log(this._name);
   }
   upperCase(){
     return this._name.toUpperCase();
   }
   //este metodo jamas deberia tocarlo
   _write(){}
   static create(id,name){
     return new this(id,name);
   }
}

class Div{
	constructor(){
		this.children = [];
	}
	remove(){}
	appendChild(node){
		this.children.push(node);
		this._paint();
	}
	_paint(){
		
	}
}
new Div();

Transpilacion

ES6 -> ES5

Babel ---> Fabe


//Forma Private en ES6: cambia el _ por el #
class Foo{
	//este metodo jamas deberia tocarlo
   constructor(id,name){
     this.#id = id;
     this.#name = name;
   }
   write(){
      console.log(this.#id);
      console.log(this.#name);
   }
   upperCase(){
     return this._name.toUpperCase();
   }
   //este metodo jamas deberia tocarlo
   #write(){}
   static create(id,name){
     return new this(id,name);
   }
}

//////			HERENCIA
div
p
/*Composite Pattern*/
class Node{
	#children=[]:
	add(node){
		node.parent = this
		this.children.push(node)
	}
	remove(node){
		TODO://remove node
		node.paren = null;
	}
}

1. cual es su estado, que quiero guardar en el objeto
2. cuando me cambien alguno de sus estados, que pasará
3. si se conecta, crea y actualiza.



children
addChild
remove

//para div
class div{
	constructor(){
		this.children = [];
	}
	addChild(node){
		this.parent = this;
		this.children.push(node);
	}
	remove(){
		this.parent = null;
	}
}

//para P
class p{
	constructor(){
		this.children = [];
	}
	addChild(node){
		this.parent = this;
		this.children.push(node);
	}
	remove(){
		this.parent = null;
	}
}

///////ahora implementamos la herencia
//extends - hereda todas las caracteristicas del padre
//super - invoco o accedo a las propiedades del padre
class div extends Node{
	constructor(id){
		super();
		this.id = id;
	}
	remove(){
		super.remove();
		//TODO...
	}
}

class p extends Node{
	
}

class Child extends Parent{
	constructor(){
		super();
	}
	write(){
		console.log("primero escribo child");
		super.write();
	}
}

class Parent{
	write(){
		console.log('parent');
	}
}

new Child().write()

//ejemplo más gráfico
function Animal (nombre) {
  this.nombre = nombre;
}
Animal.prototype.hablar = function () {
  console.log(this.nombre + 'hace un ruido.');
}
class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' ladra.');
  }
}
var p = new Perro('Mitzie');
p.hablar();

User: (solo puede tener GET)
	Leer
customer:
	leer
	crear
	modificar
	borrar

class Entity{}

const Read = Base => class extends Base{
	get(){}
}
const Create = Base => class extends Base{
	add(){}
}
const Delete = Base => class extends Base{
	remove(){}
}
const Update = Base => class extends Base{
	modify(){}
}

class User extends Read(class {}){
}
class User extends Read(Create(Delete(Update(class {}))))){
}
class Customer extends mixins(Create, Delete, Update, Read){
}

/////////////////////
Hemos visto:
new
prototype
extends
super
class
this

const mixins = (...) => ...
/*Cambiar la siguiente sintaxis
13:39
class Customer extends Read(Create(Delete(Update(class {})))){
}
13:39
Por esta otra class Customer extens mixins(Create,Delete,Update,Read){
}
13:39
Y para ello necesitas reduceRight o reduce*/

const create = Base => class extends Base{
	add(){}
}
const update = Base => class extends Base{
	modify(){}
}
class customer mixin(create,update){
}

var customer = new customer();

customer.add()
customer.modify()

//ejercicio de Mixin

const mixins = (...args) => args.reduce((a,b)=>b(a), class{});
//		los 3 puntos toma los argumentos como un array

[
	create,
	update
]

a=class{}
b=create

create(class{})
update(create(class{}))
class customer mixin(create, update){
	
}

/////////	Los cuatro Jinetes del Apocalipsis: 	/////////////

/*	this	programador
	bind	programador
	
	call	aladino
	apply	aladino		*/
	
	this //el this viene a ser el nombre de la función
	foo = {
		x:10,
		write:function(){
			console.log(this.x)
		},
		bar:{
			x:20,
			write:function(){
				console.log(this.x);
			}
		}
	}

	foo.x = 30;
	foo.bar.x = 40;
	foo.bar.write();
	foo.write();
	
	var write = foo.write
	//Vemos como Cambiar el AMBITO
	window.write = foo.write;
	write(); //undefined
	window.x=9999
	write(); //99999

	/*		THIS 		en JavaScript			*/
//primer Jinete	
	/*Cada vez que una función es asignada a una variable
	se pierde el ámbito, this pertenece al objeto propietario
	de la variable.
	*/
	
	/*Cada vez que se pasa una función como parametro a otra, se
	pierde el ambito y se establece en undefined*/

	class Bar{
		constructor(writer){
			//debugger; //linea opcional para probarlo
			writer(); //undefined
			this.writer = writer; 
			this.writer(); //Bar
		}
		
	}
	class Foo{
		constructor(name){
			this.name = name;
			new Bar(this.writer)
			
		}
		writer(){
			console.log(this);
		}
	}
	
//segundo Jinete
	//EL BIND cambia el ambito
	class foo{
		constructor(name){
			this.name = name;
			//viene a ser una función
			new Bar(this.writer.bind(this))
			
		}
		writer(){
			console.log(this);
		}
	}
	
	/////
	foo = {
		x:10,
		write:function(){
			console.log(this.x);
		}
	}
	
	foo.write() //10
	var write = foo.write.bind(foo);//para que no pierda ese ambito
	write() //undefined
	
	REACT	//o sabes programar o no empieces
	ANGULAR //como no sabes programar yo te hago un ignorante
	LITE-ELEMENT //como no sabes programar yo te hago un ignorante

//Tercer Jinete 	-	call y apply sirven para cambiar el ambito
//call pasa los pàrametros separados por coma
//apply pasa los parametros en un array.
	function Foo(name){
		this.name = name;
	}

	Foo.call({},"Pedro","Hurtado")
	
	var x = {};
	Foo.call(x,"Pedro","Hurtado") //CALL
	var x = {};
	Foo.apply(x,["Pedro","Hurtado"])

	//El primer parametro de la Funcion CALL es el ambito
	//y el resto de los elementos, son parámetros de la 
	//Función foo.
	function Bar(name,surname){
		this.name = name;
		this.surname = surname;
	}

/*		Ejercicios - Creation Factory

Dados los siguientes constructores y conociendo solamente el nombre 
de los constructores "Foo" y "Bar", crear una factoria capaz de crear
nuevas instancias de los Objetos Foo y Bar.*/

//cuarto Jinete
	function Factory(scope,strType,...args){
		//para que solo puedan definir este tipo con strType
		debugger; //comprobamos la ejecución
		const type = scope[strType];
		//Si el constructor esta definido, lanza resultado, sino da error
		if(!type){
			throw `el ${strType} not exists`
		}
		//Ahora crea el objeto a partir del prototipo
		const instance = Object.create(type.prototype);
		type.apply(instance,args)
		return instance;
	}

a = new Foo("Pedro");

//Si realizo un Object.Create de un elmento, estoy llamando al new object.
////////////////////////////////////////////////////
/*
1.	Si se pasa como parametro se pierde el ambito this.bar = new Bar (this.writer)
	1.1	Si se ejecuta sin asignar el ambito (this) es igual a undefined
		writer(); //undefined
		
	1.2 Si se asigna el ambito anteriores es igual al ambito del nuevo propietario
		this.writer = writer;
*/

function Foo(name, surname){
	this.name = name;
	this.surname = surname;
}

var Bar = {}
Foo('Pedro','Hurtado')
//call pasa los parametros por ,
Foo.call(Bar,'Pedro','Hurtado')
//apply pasa los parametros por []
Foo.apply(Bar,['Pedro','Hurtado'])
Foo.bind(Bar)('Pedro','Hurtado')

//Volvemos a repasar el ejercicio:
/*Dados los siguientes constructores crea una instancia del 
constructor que te pasen como parametro a una funcion que actua
como factoria.
El parametro te lo pasan como cadena para Foo 'Foo' y para Bar 'Bar'.
*/

	function Factory(scope,strType,...args){
		const type = scope[strType]
		if(!type){
			throw `${strType} no existe`
		}
		//se crea un objeto como el new
		const instance = Object.create(type.prototype)
		type.apply(instance,args)
		return instance;
		
	}

factory(window,"Foo","Pedro")
factory(window,"Bar","Pedro","Hurtado")
factory(window,"Pepino",1,2,3) //error

//
//Inyeccion de dependencias
A->B->C
new A(new B(new C()))
	class A{
	   constructor(B,C){
	   }
	   static get dependecies{
		  return ["B","C"]
	   }
	}
class B{
}
class C{
}
factory(window,"A")

//Usos de GETTERS y SETTERS
//GET - Lee
//SET - Asigna
class
	getter
	setter
	
class Foo{
	
	#name;
	constructor(name)
		this.#name = name;
		
	get name(){
		return this.#name;
	}
	set name(value){
	
		if(this.name !== value){
			console.log(`el nombre ha cambiado a ${value}`)
		}
		this.#name = value;
	}
}

Foo = new Foo('carolina');
a = Foo.getName(); // getter
Foo.setName = ('Maria'); // setter

//Otro ejemplo:
var intervalo = {
  valorMinimo: 3,
  valorMaximo: 7,
  get valoresContenidos() {
    var contenidos = [];
    for(var i=this.valorMinimo; i<=this.valorMaximo; i++) {
      contenidos.push(i);
    }
    return contenidos;
  },
  set valoresContenidos(arrayValores) {
    arrayValores.sort();
    this.valorMinimo = arrayValores[0];
    this.valorMaximo = arrayValores[arrayValores.length - 1];
  }
}
//Ejemplo Libro:
function Libro(editorial){
    const that = this;
    this.editorial = editorial;
    return {
        setEditorial: function(editorial){
            that.editorial = editorial;
        },
        getEditorial: function() {
            return that.editorial;
        }
    };
}
const libro = Libro("ejemplo editorial");
console.log(libro.getEditorial());//mediante un método público se accede a un atributo privado
console.log(libro.editorial);//undefined porque no se puede acceder a un atributo privado desde afuera de la clase
libro.setEditorial("cambio de editorial");
console.log(libro.getEditorial());//imprime "cambio de editorial"


//Sólo para que veas qué contiene el objeto,
//verás que sólo son las funciones y no hay algún atributo editorial
console.log(libro);

//Ahora veremos los default parameters

function sum(a,b=3){
   return a+b;
}
//error
function sum(a=3,b){
   return a+b;
}
sum(5,3)
sum(5)

//rest parameters javascript
	
point ={
   x:0,
   y:100,
   z:50
}
let x=point.x
let y=point.y
destructuring
let {x,y}=point
function foo({y,z}){
}
foo(point)
//de los apuntes de ES6, NO leer lo siguiente:
ES6 Modules
Promesas

/////-			Document Object Model - DOM			///////////////////////////////

<div class="red" style="border 1px blue" id="barca">
Fuera el Madrid!
</div>

//Lo que va a hacer
- Crea
	var div = document.createElement('div') // crea un div
	var texto = document.createTextNode('Fuera el Madrid') // crea un texto
	var comment = document.createcomment('Comentario') // crea un comentario
	document.createElementNS("http://www.w3.org/2000/svg",'svg') //para iconos
	document.createElementNS("http://www.w3.org/1999/xhtml","div")
- Modifica
	class=red

//Primer elemento del DOM, despues de Object es:
EventTarget
Object
Node //Papá
	TextNode
	Comment
	DocumentFragment
	document
	Element HtmlElement	->	Div
							a
							p
							button
	
	
//Cuando estamos en un codigo que se heredan eventos de
//padres e hijos, se llama Composite Patern - Patrón de Composición
////////////////////////////////////////////////////////////////////////
//14/01/2021

//		Comprobaciones, Búsquedas y Ejecución desde el DOM
//Para ejecutar las comprobaciones, escribimos en la consola del navegador:
node o document, segun el nombre del padre

CREAR:
document.createElement
document.createElementNS-HTML       "http://www.w3.org/1999/xhtml"
						 SVG        "http://www.w3.org/2000/svg"
                         MATHML     "http://www.w3.org/1998/Math/MathML"
						 
document.createElement('div')
document.createElementNS("http://www.w3.org/1999/xhtml","div")

document.createTextNode('Hello World')
document.createComment('comentario')

REMOVE:
<div>
	<div></div> //el hijo o nodo que quiero eliminar
</div>
/*Con el nodo me voy al padre y hago removeChild del propio nodo
Antes de eliminarme le pido permiso a mi padre y luego me elimino*/

node.remove()					//nunca
node.parent.removeChild(node)	//siempre

MODIFICATION:
<div id="alejandro" class="red" style"color:blue;">
</div>

node = document.createElement('div'); //create
//ej:
div = document.createElement('div');
//vamos a agregarle el atributo id y asignarle el valor Alejandro
node.setAttribute("id","Alejandro")	//modificando

//vamos a agregar el atributo class y asignarle el valor Red
node.classList.add("red")
node.style.setProperty("color","blue") //cambiamos el estilo, el rojo por el azul
node.style.setProperty("width","")

//Ademas de esto me tengo que estudiar los classlist:
https://developer.mozilla.org/es/docs/Web/API/Element/classList
https://developer.mozilla.org/es/docs/Web/API/Element/attributes

//Susutitución de datos de elementos
text=document.createTextNode("Alejandro")
text.data = "Maria"

comment=document.createComment("Comentario")
comment.data = "Comentario mas Grande"

//Properties vs Attribute
input = document.createElement('input')
input.setAttribute('value','Sara')
document.body.appendChild(input)

//modelo ejemplo
html
head
body
	div id="Alejandro" class="red"
	
document.getElementById("Alejandro") //retorna un nodo
document.body.getElementById("Alejandro")

document.getElementsByTagName("div") //coleccion de todos los descendientes div
node.getElementByTagName("div")		 //coleccion de todos los descendientes div
node.getElementByClassName("red")	//coleccion de todos los descendientes class red

node.querySelector()		//node
node.querySelectorAll()		//coleccion
//ej
document.querySelectorAll('svg') //me lanzará todo, el numero de elementos

/*
1. necesito decirle a mi padre que he nacido - children
2. necesito conocer a mis hermanos mayores
3. necesito conocer a mis hermanos menores
4. necesito conocer a mi padre - parent node
*/

1. parent = document.createElementNS("http://www.w3.org/1999/xhtml","div")
2. children = [document.createElement('div'),
			   document.createElement('div'),
			   document.createElement('div')]
			   
	for(let i=0;i < children.length; i++){
		
		//parent.appendChild(children[i]) - este NO deberia usarlo
		parent.insertBefore(children[i],null) //recomendable
		
	} //se crean a partir del for porque sino no tendria la length de children
	  //Ya han nacido los niños !jajaj
	
	//añadir más elementos/hijos -  de uno en uno
	//Inserta un elementos justo antes del ultimo hijo (posicion del array) indicado en children 
	parent.insertBefore(document.createElement('div'),parent.children[1])
	parent.insertBefore(document.createElement('div'),null) //igual a appendChild - lo inserta al final
//ej function
	function insert(node, children, sibiling=null){
		node.insertBefore(children,sibiling) //a traves de insert tengo un wrapper que oculta algo del sistema
	}
	
	insert();
//ej: saber que hijo esta antes y despues
	sandro = parent.children[1]; //<div><div>
	sandro.previousSibling
	sandro.nextSibling
	sandro.nextSibling.nextSibling
	sandro.previousSibling.previousSibling
	
	sandro.parentNode
	sandro.
//////////////
Object
eventtarget
node //si pregunto por los nodos, van a ser todos, textos y elementos
	TextNode
	Comment
	DocumentFragment
	Document
	
	Element HtmlElement HtmlDivElement
						HtmlAnchorElement
//mientras si pregunto solo por el elemento, me va a devolver el elemento
	
parentNode
parentElement

previousSibling Node
previousSiblingElement

nextSibling
nextSiblingElement

children ->	Elementos
childNodes -> Nodes

//principal
class Node{
	constructor(){
		this.childNodes = []
	}
	appendChild(node){
		if(!node){
			throw 'no puede ser nulo';
		}
		node.parentNode = this;
		this.chilNodes.push(node)
	}
}
		//creamos una subclase hija Element a partir de Node
		class Element extends Node{
			constructor(){
				super();
				this.children=[];
			}
			appendChild(element){
				if(!element){
					throw 'no puede ser nulo';
				}
				element.parentElement = this;
				super.appendChild(element)
			}
		}
	
	
		class HtmlDivElement extends Element{
			constructor(){
				super()
				this._align="left"
				}
				get align(){
					
				}
				set align(){
					
				}
		}
	
	const elements = {
		"div":() => new HtmlDivElement();
	}
	
	//una funcion para crear Elemento y acceder por la clave del elemento
	function createElement(element){
		return elements[element]()
	}

	//vamos de nuevo con los eventos que reciben una orden
	document.addEventListener('click',(ev) => console.log(ev))
	document.addEventListener('key',(ev) => console.log(ev))
	
	const handler = (ev) => console.log(ev)
	document.removeEventListener('click',handler)
	
	//vamos a ponernos del lado del mal
	var input = document.createElement('input')
	input.setAttribute('type','password')
	document.body.

	//Los elementos son observadores y van de padres a hijos, nunca al revés.
	//deberemos hacer comunicaciones entre hermanos
	
<script>
	let name = 'Alejandro'
</script>
<h1>Hello {name}!</h1>

class Component{
	constructor(name,parent){
		this.div = document.createElement('div')
		this.text = document.createTextNode(name)
		parent.appendChild(div)
		
		document.addEventListener('keyup',(ev) =>{
			this.text.data = ev
			this.render();
		)}
	}
	render(){
	}
}

/*Con lo aprendido hoy, hacer la parte del calendario que 
dibujan los grid*/
//primero tengo que suscribirme al evento y luego pasarle los datos
//crear etiqueta, hacer el evento, y hacer lo que hace el evento
{...}
/*los atributos data son atributos personalizados
donde se puede guardar informacion del usuario*/
setAttribute("data-day", v)
//en el atributo day, puedo ponerle lo que sea, lo que quiera guardar en data

//ver
for each
for of

///////////////////////////////////////////////////////////////////////////////
//usos
observer
pubsub

Objeto A						Objeto B

A.mequierosuscribir			B.dimeAlgo

A.mequierosuscribir(B.dimeAlgo)

A		coordinador			B
		A ------> B

/////////Dentro de un boton, lo normal es encontrar un dispatchEvent
//Siempre voy  tener alguien que publica y alguien que escucha
<div>
//Publicador
	<button></button>
</div>
//Observador, siempre va a tener algo que escuchar
class Foo{
	constructor(button){
		button.addEventListener('click',this.dimealgo.bind(this))
	}
	dimealgo(ev){
		
	}
}
function load(){
		const button = document.queryselector('button')
		new Foo(button)
}

//Para comprobarlo, copia y pega en el navegador: //todo desciende de Window y Object
window.addEventListener('click',(ev) => console.log(ev))
//otro ejemplo, en este caso el observador es window, notar la diferencia
//porque no están metidas en una clase
<div>
//Publicador
	<button></button>
</div>
//Observador
function print(button){
	button.addEventListener('click',(ev) => console.log(ev))
}
function load(){
	const button = document.queryselector('button')
	print(button)
}

//	Anotaciones
La web originariamente se inventó para compartir información.
Hay algo que se llama //webcomponents
/*y son las herramientas que nos permiten implementar 
funcionalidades y aspectos de la web*/
/*Si vamos a buscar sobre que algo que esté en beta
o no esté terminado, buscarlo en GitHub*/

//Tenores de Google - Buscar
Almo			Google
Javier Velez	BBVA
Ismael Faro		IBM
Pedro Hurtado	Locura

//Por qué es mejor estudiar los Webcomponents que los Frameworks?
Porque una vez que controle los webcomponents, entenderé los framworks

dentro de webcomponent hay un HTML Template Instantiation
Una de las razones por la cual la gente no usa webcomponent
es por un tema de concesión de templates. No se ha llegado
a un acuerdo claro.

//Ejemplo - Creamos nuevos elementos
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>

    <style type="text/css">
    	gnt-mes{
    		display: block;
    	}
	</style>
<!-- Veremos como Trabajan los WebComponents  -->
<!-- Todos los webcomponents se muestran por defecto inline-->
    <script type="text/javascript">
    	
    	class MonthGrid extends HTMLElement{
           
		   constructor(){
               super();
			   let template = document.getElementById('days')
			   //creo la template, la clono y la uso
			   this.appendChild(template.content.cloneNode(true))
               console.log(this)
           }
           connectedCallback(){
               console.log(this.parentNode)
           }
           disconnectedCallback (){
               console.log(this.parentNode)
           }
		   //definimos un metodo estatico que observe
		   static get observedAttributes(){
				return ['date','width'];}
		   }
		//Sólo saltara para los elementos que le digo
		attributeChangeCallback(name, oldValue, newValue){
			console.log(name);
			console.log(newvalue);
		}
		   
  
        customElements.define("gnt-mes",MonthGrid)

    	//Los que NO esten en la siguiente lista, son desconocidos
    	var components = {
    		"div" : () => new HTMLDivElement()
    		"mes" : () => new Monthgrid()
    	}

    	define("mes", constructor){
    		components["mes"] = () => new constructor()
    	}

    	document.createElement('mes')

    	//siempre PREFIJO - NOMBRE
    </script>
</head>
<body>
	<gnt-calendar date="01-02-2021"></gnt-calendar>
//El elemento template no renderiza nada
/*Hasta que yo no agregue un appendChild para 
ese elemento, no cambiara*/
	<template id="days">
		agregar los div
	</template>

	<gnt-mes date="18/01/2021" width="100" heigth="100">1</gnt-mes>
	<gnt-mes></gnt-mes>
	<gnt-mes></gnt-mes>
	<gnt-mes></gnt-mes>
	<gnt-mes></gnt-mes>
	<gnt-mes></gnt-mes>
	<gnt-mes></gnt-mes>
</body>
</html>


/*
1. Tengo que extender como minimo de HTMLElement
2. Tengo que definir con un prefijo-nombre
*/
Cuando el navegador, encuentra parte del nombre de la etiqueta,
va a seguir pintando esa etiqueta, porque hereda de HTML Element
siempre que lleve - hereda de HtmlElement
siempre que lleve _ hereda de Unknown

//Ejemplos de la Vida misma
document.createElement('gnt-mes')

alejandra = document.createElement('gnt-mes')
alejandra.parentNode = null
body.appendChild(alejandra)
alejandra.parentNode = body
//////////////////////////////////////////////////////////////////////
//18-01-21
//volvamos a nuestro calendario, tratar de adaptar la estructura al mío
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            color: green;
        }
        div:hover{
            background-color:black
        }
        :root{
            --calendarcolor:blue;
            --calendarcolorhover:white;
        }
    </style>
</head>
<body>
    <div>Jamaica</div>
    <gnt-mes date="01/01/2021"></gnt-mes>
    <gnt-mes></gnt-mes>
    <gnt-mes></gnt-mes>
    <gnt-mes></gnt-mes>
    <script>
        class MonthGrid extends HTMLElement{
            #shadow
            constructor(){
               super();
               this.#shadow = this.attachShadow({mode:'open'})
           }
           static getStyle(){
               const css = `
                  :host{
                      display:grid;
                      grid-template-columns:repeat(7,1fr);
                      gap:0.5rem;
                  }
                  .day{
                      width:1.5625rem;
                      height:1.5625rem;
                      color:var(--calendarcolor,blue)
                  }
                  .day:hover{
                      background-color:var(--calendarcolorhover,red)
                  }
				  
               `
               const style = document.createElement('style')
               style.textContent =css;
               return style;
           }
		   //Ejemplo de Callback, con shadow
           connectedCallback(){
               this.#shadow.appendChild(MonthGrid.getStyle())
               for(let i=0;i<31;i++){
                    let div =document.createElement('div')
                    div.appendChild(this.#getDay(i+1))
                    div.classList.add('day');
                    this.#shadow.appendChild(div);
               }
           }
           #getDay(day){
               let text = document.createTextNode(day)
               return text;
           }
		   //se verá ahora
		   #getSlot(){
			   return document.createElement('slot')
		   }
        }
        customElements.define("gnt-mes",MonthGrid)
    </script>
</body>
</html>

///Hoy Vimos
custom elements
shadow dom
templates x
slot //como preparo mi componente para empujar mi elemento hacia adentro

por ejemplo:
//componentes internos:
<slot name="toolbar"></slot>
<slot name="menu"></slot>
<slot name="content"></slot>

//componentes externos:
<gnt-toolbar slot="toolbar"></gnt-toolbar>
<gnt-menu slot="menu"></gnt-menu>
<gnt-content slot="content></gnt-content>

//OJO a los Scripts inline, prohibidos
xss: virus --> csp: vacuna

Hay qeu quitar el script inline.
Al exportar una clase estoy creando un modulo
Desde el Index, importo monthgrid from './calendar.js'
Se crea un modulo por cada vez que exporto una clase con javascript,
en estos archivos.js, todo el contenido es privado.
Los nombres de archivos de modulo en minuscula
Las clases en mayusculas

Dada una fecha devolver un array con los dias del mes y 
los dias anteriores y posteriores al mes, hasta completar 
42 días.

function GetDaysInMonth(date){
	
	return [ // 42 objetos
	{
		date
		isToday
		isInMonth
	}
	]// 42 objetos
}
{
	date
	isToday
	isInMonth
}
//descargar visual studio live share
//ver lo que hizo Andres
//deberia hacer una funcion para calcular el dia de hoy
//deberia hacer una funcion para calcular el mes actual


Andrés Felipe Carrera Lozano  14:01
function getDaysInMonth(date){
    let arr =[];
    // TODO 
}
function isInMonth(currentDate,date){
    return currentDate.getMonth()=== date.getMonth() &&
            currentDate.getFullYear() === date.getFullYear()
}
function isToday(currentDate,date){
    return currentDate.getDate()=== date.getDate() &&
    currentDate.getMonth()=== date.getMonth() &&
    currentDate.getFullYear() === date.getFullYear()
}
function getFirstDateOfWeek(date){
    let firstDayMonth = new Date(date.getFullYear(),date.getMonth(),1);
    let first = firstDayMonth.getDate() - firstDayMonth.getDay();
    return new Date(firstDayMonth.setDate(first));
}

//Idea
1. El primer dia del mes es 1 dia de la semana donde esta el día 1
2. Necesito devolver una estructura con la siguiente informacion
{
	date, isToday,
	insInMonth
}
3. Necesito un array de 42 elementos del punto 2 para poder
pintar 7 columnas por 6 filas.

Abrimos un terminal:
 escribimos: npm init
 corroboramos la info y avanzamos
 crear index.html - en el especifico el src del index.js, 
 desde donde hare todos los import y los export.
 
 ///Veamos
 /*		Anotacion:		
 - Por la circunstancia que fuese, yo necesito mantener la instancia de un objeto
 - Si quiero que el objeto cambie sin ser modificado el original, creo un clon del objeto
 */
import culture from './config.js'

export function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}
export function isToday(current, date) {
    return current.getDate() === date.getDate() &&
        current.getMonth() === date.getMonth() &&
        current.getFullYear() === date.getFullYear();
}
export function isInMonth(current, date) {
    return current.getMonth() === date.getMonth() &&
        current.getFullYear() === date.getFullYear();
}
	function getFirstDayOfWeek(date){
		let firstDayOfWeek = culture.firstDayOfWeek;
		var dayOfWeek = date.getDay() // 0-6
		if (dayOfWeek >= firstDayOfWeek){
			return new Date(date.setDate(date.getDate() - dayOfWeek + firstDayOfWeek))
		}
		else {
			return new Date(date.setDate(date.getDate() -7 + firstDayOfWeek))
		}
	}
	function getDataObject(date,today){
		return {
			date,
			today:isToday(date,today),
			isInMonth:isInMonth(date,today)
		}
	}
//Creamos los Meses del Calendario
export function getMonthCalendar(date){
    let _dateClone = new Date(date.getTime());
    let i=0;
    let days=[];
    let _date = getFirstDayOfWeek(getFirstDayOfMonth(_dateClone))
    let today =new Date()
    do {
        days.push(getDataObject(_date,today))
        _date = new Date(_date.setDate(_date.getDate() + 1))
    } while(++i<42)
    return days;
}

//Lo que hay que Estudiar:
do
	https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/do...while
increment prefix postfix  ++i , i++
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
Date
	https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
InTl
	https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Intl

Operador ternario es aquel que evalua al booleano, se le poone interrogante
Si se abusa del if-else, tendremos un problema de Complejidad Ciclomática
https://es.wikipedia.org/wiki/Complejidad_ciclom%C3%A1tica

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

Las expresiones Lambda, son las arrow functions
//Por ejemplo:
result = filter([1,2,3,4,5,6,7,8,9],(v) => v%2 ===0) //filtro que saca los Nº pares

diccionarios son clave:valor

Proceso de Desarrollo de un Software:
Tecnica a seguir:
1. escribo rapido para funcionar
2. testeo
3. refactorizo
4. testeo
//////////////////////////////////////////////////////////////
//Recorrer Fechas en el calendario
- date
- previousMonth()
- nextMonth()

1. nextOrPreviousMonth
	+1
2. previous
	-1

//Como debemos plantear el razonamiento del problema
1. Cuando cambie la fecha tengo que volver a pintar
	setter/getter date --> date!=value --> update
	update
2. previous month Metodos
3. next month Metodos
//Necesito distinguir mis Necesidades y usar los metodos ideales.
class MonthGrid{
	#date = new Date()
	
	//Análisis importante antes de programar
	get date(){
		return this.#date;
	}
	set date(value){
		
	}
	nextPrevious(){}
	nextMonth(){}
	
	#update(){}
	#create(){}
}
////Resumen de lo visto
//Para modificar
this.#text.data = this.#day.date.getDate()

Timer
1s = 1000ms

setTimeout(() =>{
	console.log(new Date())
},1000)

setTimeout
clearTimeout

export const intervalclock = 1000


timerservice:
//es unico en el sistema, por tanto es un singleton
//voy a importar {intervalclock} from './config.js'
import {intervalclock} from './config.js'

//Necesito una Clase con responsabilidad unica que se suscriba y que se quite
export class TimerService {
	//guardarme lo que devuelve setInterval, quitarme la suscripcion
	#processID = null;
	//crea una funcion a la que suscribe
	suscribe(cb){
		this.#processID = setInterval(cb,intervalclock)
	}
	//En el momento que deja de escuchar al sistema, entra en dispose
	//para crear una funcion de adiós!
	dispose(){
		this.#processID && clearInterval(this.#processID)
		this.#processID = null;
	}
}

/*Yo necesito un codigo limpio en el que pueda poder suscribirme y poder desusscribirme
para suscribirme necesito una funcion y para desuscribirme otra,
necesito modificar el att time
necesito modifical el texto
necesito suscribirme al timerservice
cuando me suscribo necesito calcular una nueva fecha
luego me pinto, un texto y un time y lo llamo desde el connectedcallback
cuando llamo de una funcion a la otra pierdo el ambito, entonces uso el bind
luego cuando regreso de escuchar, y me voy a casa, salgo por el disconnectedCallback.dispose
*/
//desde la clase que hago el callback
//Diseño que se basa en el Concepto de Responsabilidad Única

class Timer extends HtmlElement{
	
	#time
	#text
	#timerService
	constructor(){
		super();
		this.#timerService = new TimerService();
	}
	
	#update(){
		let datetime = date.toString();
		this.#time = setAttribute('datetime',datetime)
		this.#text.data = date
		
	}
	#create(){
		this.#time = document.createElement('time')
		this.#text = document.createTextNode('')
		this.#time.appendChild(this.#text)
		return this.#time;
	}
	//inicia la llamada al servicio
	connectedCallback(){
		this.appendChild(this.#create())
		//para no perder el ambito, uso el jinete, el bind
		this.#timerService.suscribe(this.#update.bind(this))
	}
	//desconecta la llamada al servicio
	disconnectedCallback(){
		this.removeChild(this.#time);
		this.#timerService.dispose();
	}
	
}
customElements.define('gnt-timer',Timer)

//voy a tener un componente de tipo time
//voy a tener un componente de tipo text
<time hora> Tiempo </time>

debemos agregar los import al archivo index.js

import './components/gridmonth.js'
import './components/timer.js'

//luego pinto el reloj
<gnt-time></gnt-time>
<gnt-gridmonth></gnt-gridmonth>

//ejemplo practico
1. Calcula el primer día de la semana donde está el día 1 y los 41 siguientes. Devúelveme en un objeto
{fecha, isInMonth, isToday}
Referencia:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
2. Dados los siguientes arrays:
a = [1,2,3],
b = [3,4,5]
Modifica todos los valores de a con los valores de b.
b.forEach((v,i) => a[i] = b[i])
//	ver el Drive
//Las arrow function no pierden el ambito
//Mientras que las funciones lo pierden, 
// si no uso el bind, pierdo el ambito del this

//La instancia solo puede acceder a lo público
//El this tiene acceso a lo privado y a lo publico

//Recordar que cada instancia tiene un puntero al prototipo
// es como una funcion para acceder a this, si es __proto___ (es privado)
// This solo se puede usar desde dentro de la funcion, no desde fuera,
// para eso esta foo = new Foo(), que es publico.

//para recordar de java
private int a=1 //es privado para todos
protected int a=1 //es privado para todos excepto para sus herederos


////////					PRUEBA DE NIVEL

//Comprobaciones de lo Aprendido hasta ahora:
//1.Demuestra que la siguiente cadena " geeksforgeeks " no es un palíndromo.

/*La palabra del enunciado NO puede leerse de derecha a izquierda. 
Las palabras capicúas o las frases que puede leerse tanto de izquierda a derecha,
como de derecha a izquierda, se denominan Palíndromos. 
Si copias y pegas el siguiente código en la consola de tu navegador, podrás comprobarlo.
En el caso de que ingrese una frase, será necesario eliminar los espacios en blanco.
*/
function texto()
{
	var palabra = prompt("Escribe una palabra").toLowerCase();
	// eliminamos los espacios en blanco
	palabra = palabra.trim("");
	for (var i =0; i < palabra.length;  i++){
		if (palabra[i] != palabra [palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
if(texto())
{
	console.log("El texto es palíndromo");
}else{
	console.log("El texto no es palíndromo")
}

/*CSS:
1.	Diferencias entre flexbox y grid*/


//1. crea un div
   div = document.createElement('div')
//2. crea un svg
   document.createElementNS('http://www.w3.org/2000/svg','svg')
   document.createElementNS('http://www.w3.org/2000/svg','div')
//3. agrega una clase al div creado en el punto 1
   div.classList.add('red')
//4. agrega un estilo que cambie la propiedad color al punto 1
   div.style.setProperty('color','blue')
//5. agrega un atributo id al punto 1
   div.setAttribute('id','maria')
//6. crea un pagina en blanco y agrega al body el div con "hello world"
   text = document.createTextNode('Hello World')
   div.appendChild(text)
   document.body.appendChild(div)
//7. crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world"
   child = document.createElement('div')
   div.insertBefore(child,text)
//8. dime los nodos que tiene el primer div
   div.childNodes
//9. dime los elementos que tiene el primer div
   div.children
//10. busca todos los div de la página
   document.querySelectorAll('div')
//11. busca los div que contienen la clase agregada al punto 3
   document.querySelectorAll('.red')
   document.getElementByClassName('red')
//12. busca los div que tienen el id agregado en punto 5
   document.querySelectorAll('#maria')
   document.getElementById('maria')
//13. deja el body sin elementos de tres formas diferentes
   div.parentNode.removeChild(div)
   div.remove()
   document.body.textContent = ''
   
/////25/01/21/////////////////////////////////////////////////////////////////

Publicador - Suscriptor:
Eventos:

Tenemos que lanzar un mensaje por un canal, y esa persona nos tiene que
escuchar.
Ej: en el caso de que pinchemos en un dia, se cambia al pìe del calendario
	
//Estudiar map mdn y el set mdn:
//topics: una accion que se produce en el sistema, viene a ser el canal que transmite
//Suscripción - Desuscripción
//los eventos solo los pueden recoger los ancestros.
//La unica forma es desacoplar
	
class PubSub{
	//yo me quiero suscribir para seguir escuchando
	constructor(){
		this.topics = new map();
	}
//que vamos a hacer cuando nos suscribamos
	on(topic, callback){
		let suscriptor = this.topics.get(topic)
		if(!suscriptors){
			//el set me permite tener una lista duplicada
			suscriptors = new set();
			this.topics.set(topic,suscriptors)
			}
			suscriptors.add(callback)
			//retornar la suscripcion y a la vez, una funcion
			//que me permita desuscribirme - salir de la reunión
			//esto se ejecuta desde el disconnected callback
			return () => suscriptors.delete(callback)
		}	
		//ahora vamos a emitir, cada suscriptor es una funcion
		//El foreach recorre cada uno de los datos que le paso
		emit(topic, data){
		//aqui le pasa los topics
			let suscriptors = this.topics.get(topic);
			//pregunta si hay suscriptores
			suscriptors && suscriptors.forEach(s=>{s(data)})
		}
		//para la desuscripción ver la capt pubsub3
}

//El PubSub que paso Pedro
class PubSub{
    constructor(){
      this.topics = new Map();
    }
    on(topic,cb){
       let suscriptors = this.topics.get(topic)
       if(!suscriptors){
           suscriptors =new Set();
           this.topics.set(topic,suscriptors)
       }
       suscriptors.add(cb)
       return ()=>suscriptors.delete(cb)
    }
    emit(topic,data){
	let suscriptors = this.topics.get(topic);
        suscriptors && suscriptors.forEach(s=>{
           s(data)
        })
    }
}

//vamos a convertir el timerservice en un singleton
//nuestro timer crea un publicador suscriptor
//desde el timer.js le pasa el publicador
//El singleton es tan sencillo como exportar una clase y definirla como new. 
//El singleton está pensado para no sobrecargar los servicios
//Utilizo un solo canal, para transmitir a sus sucesores.
//Me suscribo a un servicio y publico en todos los canales
//una vez calculada la fecha en cada segundo, la emito al calendario

//en el on le digo lo que voy a transmitir, el paso el topic
//y la funcion para activarlos
//emit los emite

//por cada instancia tengo un pubsub y si el timer sufre cambios,
//notifica a todas las instancias.

//Cada calendario crea su pubsub, y el timerservice le dice, por cada
//vez que cambie, suscríbete!
//El pubsub es una clase que se encarga de conectar una clase con otra

//ver Enlaces Útiles
//una clausura me permite guardar el estado de de la clase o la función hasta que se desuscriba
//siempre que me suscribo a algo, debo tener también una desuscripcion

//lanzo un evento con el padre
//Consigo que los padres me den el publicador a cada hijo
//en el set me va a llegar el publicador y aqui me voy a suscribir con el on
y se cierra el ciclo










































































