

			Ejecutar en Servidor:	


Archivos que requieran ejecutar alg�n tipo de publicaci�n-suscripci�n
Archivos que requieran ejecutar un servicio para realizar algo
Archivos que requieran recoger informaci�n y consultarla en una BBDD

MODO:
- 1: creando un servidor local desde un terminal en VSC
     npm install http-server -g
- 2: ejecutando el directorio desde xampp/htdocs/..


			Notas Conexiones:


NPM+NODE
NPM: si ejecutas npm install http-server -g se crear� un servidor local.
NPM: para ejecutarlo: http-server . -p 8888 //para que entre por el port 8888, por ej.

VER->: C:\Users\Imanol\Desktop\modelosPizzeria\Capts_Proyecto

- Como recordamos, al trabajar en el calendario, ejecutabamos npm install http-server -g,
  luego iniciabamos el servidor y se conectar� dando un servicio HTTP por un PORT.
  Basta con ejecutar el comando en el directorio desde el que quiero conectarme.
	. index.js: archivo que importar� los archivos.js de los componentes de mi app


- Nos actualizamos a proyectos m�s recientes, como los de Backend y Validaci�n. 
  Vimos como ejecutar el paquete de npm install, para que se cree la carpeta de node_modules,
  A partir de aqu�, vimos como se crea el package.json, que har� varias referencias a:
	El canuto por el que pasas los datos de:
	. Paquete de m�dulos
	. Librer�as
	. Versiones
	. Dependencias: express, express-validator, redis...
	. index.js:establece la conexi�n al server

  Para probar la conexi�n desde otro m�dulo, tendremos que hacer referencia a �l.
- Nuestras p�ginas las guardaremos en la carpeta -> 'public'.
- Nuestra Infraestructura, dominio, controller, aplicaci�n, en la carpeta -> 'src'.








-------------------ejemplos-----------------------
- Calendar con DOM
- Calendar-system-date
- Calendar-pubsub

- pubsubCalendar_Andr�s
- pubsubCalendar_Suraj
- eventCalendar_Andr�s
- commentedCalendar
- eventCalendar_Suraj
- ej-Fetch-JSON
- pruebasubirarchivos