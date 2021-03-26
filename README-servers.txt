

			Ejecutar en Servidor:	


Archivos que requieran ejecutar algún tipo de publicación-suscripción
Archivos que requieran ejecutar un servicio para realizar algo
Archivos que requieran recoger información y consultarla en una BBDD

MODO:
- 1: creando un servidor local desde un terminal en VSC
     npm install http-server -g
- 2: ejecutando el directorio desde xampp/htdocs/..


			Notas Conexiones:


NPM+NODE
NPM: si ejecutas npm install http-server -g se creará un servidor local.
NPM: para ejecutarlo: http-server . -p 8888 //para que entre por el port 8888, por ej.

VER->: C:\Users\Imanol\Desktop\modelosPizzeria\Capts_Proyecto

- Como recordamos, al trabajar en el calendario, ejecutabamos npm install http-server -g,
  luego iniciabamos el servidor y se conectará dando un servicio HTTP por un PORT.
  Basta con ejecutar el comando en el directorio desde el que quiero conectarme.
	. index.js: archivo que importará los archivos.js de los componentes de mi app


- Nos actualizamos a proyectos más recientes, como los de Backend y Validación. 
  Vimos como ejecutar el paquete de npm install, para que se cree la carpeta de node_modules,
  A partir de aquí, vimos como se crea el package.json, que hará varias referencias a:
	El canuto por el que pasas los datos de:
	. Paquete de módulos
	. Librerías
	. Versiones
	. Dependencias: express, express-validator, redis...
	. index.js:establece la conexión al server

  Para probar la conexión desde otro módulo, tendremos que hacer referencia a él.
- Nuestras páginas las guardaremos en la carpeta -> 'public'.
- Nuestra Infraestructura, dominio, controller, aplicación, en la carpeta -> 'src'.








-------------------ejemplos-----------------------
- Calendar con DOM
- Calendar-system-date
- Calendar-pubsub

- pubsubCalendar_Andrés
- pubsubCalendar_Suraj
- eventCalendar_Andrés
- commentedCalendar
- eventCalendar_Suraj
- ej-Fetch-JSON
- pruebasubirarchivos