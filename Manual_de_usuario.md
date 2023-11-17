# **Manual de usuario para la aplicacion web de control de wesen de la haya**

## Al iniciar 

- La primera pagina de la aplicacion es index.html.

- Al iniciar la aplicacion nos saldra una alerta que nos pedira si queremos cargar unos datos por defecto o tener la aplicacion sin datos.

## Pagina de inicio (index.html)

- En esta pagina nos saldra algo de informacion sobre el organismo que se encarga de vigilar y regular los wesen.

## Pagina para añadir un criminal wesen (formularioWesen.html)

- Esta pagina es un formulario para poder registrar un criminal wesen, para poder agregar un criminal debe
de estar previamente registrado el crimen que ha cometido, en este formulario todos los campos son 
obligatorios excepto los complices,que para poder agregar un complice wesen debe de estar agregado ese wesen como criminal wesen, ademas la fecha maxima para poder registrar la condena sera el dia actual.Una vez rellenado al pulsar el boton guardar la aplicacion nos notificara el registro.

## Pagina para añadir un crimen (formularioCrimen.html)

- En esta pagina podremos registrar un crimen, todos los campos son obligatorios, por lo que para poder agregar un crimen se debera
rellenar correctamente el formulario, la fecha en la que se cometio el crimen debe de ser como maximo el dia actual.Una vez rellenado correctamente al pulsar el boton guardar la aplicacion nos notificara el registro.

## Pagina para consultar criminaless (listadoWesen.html)

- Esta pagina mostrara un listado con los datos de los wesen criminales y tendras un boton para poder borrar un wesen en concreto del registro

## Pagina para consultar crimnenes (listadoCrimenes.html)

- Esta pagina muestra todos los datos de cada crimen registrado en el registro

## Pagina informe (informe.html)

- Esta pagina por defecto muestra todos los wesen registrados con algunos de sus datos, ordenados por fecha, numero de crimenes y la gravedad de estos. Ademas tiene un fitro que consta de un selector que te permite elegir por que atributo filtrar el wesen y  se debe poner un texto para buscar el wesen con ese dato en concreto en el registro. Y finalmente abajo hay un boton que al pulsarlo genera un archivo pdf con la informacion que hay en pantalla.