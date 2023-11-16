var service = new WesenService();

/**
 * Método para obtener la lista de datos del localStorage, ordenarla por la fecha de la condena,
 * el número de crimenes y la gravedad de las faltas y mostrarla en formato lista
*/
function cargarListaYmostrar() {
  var listaWesens = service.getAllWesens();

  listaWesens = ordenar(listaWesens);

  listaWesens.reverse();

  var lista = document.getElementById("informe");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  listaWesens.forEach((wesen) => {
    var li = document.createElement("li");
    li.innerHTML =
      "<br>" +
      "Nombre: "+wesen.getNombre() +
      "<br>" +
      "Nacionalidad: "+wesen.getNacionalidad() +
      "<br>" +
      "Tipo: "+wesen.getTipo() +
      "<br>" +
      "Fecha Condena: "+wesen.getFechaCondena() +
      "<br>" +
      "Gravedad Faltas: "+wesen.getGravedadFaltas() +
      "<br>" +
      "Crimenes: "+wesen.getCrimenes() +
      "<br>" +
      "<br>";

    lista.appendChild(li);
  });
}

/**
 * @param {Array<Wesen>} listaWesens lista de wesens a ordenar
 * @returns Array<Wesen> lista con los datos ordenados
 */
function ordenar(listaWesens) {
  listaWesens = service.sortByFechaCondena(listaWesens);
  listaWesens = service.sortByNumeroCrimenes(listaWesens);
  listaWesens = service.sortByGravedadFaltas(listaWesens);

  return listaWesens;
}

// Recoger los inputs relacionados con el filtro
var selectFiltro = document.getElementById('filtro');
var inputValorFiltro = document.getElementById('valorFiltro');

// Recoger la lista
var listaInforme = document.getElementById('informe');

/**
 * Añadir un evento al campo desplegable, para que cuando el usuario seleccione una opcion
 * se resetee tanto el dato del campo de texto como el filtro aplicado previamente y se
 * muestre toda la lista de daos que hay en el localStorage
*/ 
selectFiltro.addEventListener('change', function(){
  inputValorFiltro.value = "";
  cargarListaYmostrar();
});

/**
 * Añadir un evento de entrada al campo de texto 'inputValorFiltro' que llamará a la función
 * 'aplicarFiltro' cada vez que se introduzca un carácter en el campo
*/
inputValorFiltro.addEventListener('input', aplicarFiltro);

/**
 * Función que aplica un filtro dinámico a una lista de Wesens según el valor seleccionado 
 * y el texto ingresado
*/
function aplicarFiltro() {
  // Obtengo la lista completa de Wesens
  var listaDeWesensens = service.getAllWesens();

  // Obtengo el valor seleccionado del filtro y el texto ingresado en el campo
  var filtro = selectFiltro.value;
  var valorFiltro = inputValorFiltro.value;

   // Verifica si no se ha seleccionado un filtro, muestra una alerta y se vacia el campo de texto
  if(filtro === "") {
    alert("Debe rellenar los campos");
    inputValorFiltro.value = "";
    return;
  }

  // Verifica si el texto ingresado está vacío y carga la lista completa
  if(valorFiltro.trim() === ""){
    listaDeWesensens = service.getAllWesens();
  } else{
  // Filtra dinámicamente la lista según el filtro seleccionado y el texto ingresado
  for (var i = 0; i < listaDeWesensens.length; i++) {
      switch (filtro) {
          case "nombre":
            listaDeWesensens = service.getWesensByName(valorFiltro);
            break;
          case "pais":
            listaDeWesensens = service.getWesensByPais(valorFiltro);
            break;
          case "tipo":
            listaDeWesensens = service.getWesensByType(valorFiltro);
            break;
          case "crimen":
            listaDeWesensens = service.getWesensByCrimen(valorFiltro);
            break;
          case "gravedad":
            listaDeWesensens = service.getWesensByGravedad(valorFiltro);
            break;
          default:
            return false;
      }
    }
  }

  // Limpia la lista actual
  while (listaInforme.firstChild) {
      listaInforme.removeChild(listaInforme.firstChild);
  }

  // Agrega los elementos filtrados a la lista
  listaDeWesensens.forEach(function (wesen) {
      var li = document.createElement("li");
      li.innerHTML =
        "<br>" +
        "Nombre: " + wesen.getNombre() +
        "<br>" +
        "Nacionalidad: " + wesen.getNacionalidad() +
        "<br>" +
        "Tipo: " + wesen.getTipo() +
        "<br>" +
        "Fecha Condena: " + wesen.getFechaCondena() +
        "<br>" +
        "Gravedad Faltas: " + wesen.getGravedadFaltas() +
        "<br>" +
        "Crimenes: " + wesen.getCrimenes() +
        "<br>" +
        "<br>";
      listaInforme.appendChild(li);
  });
}

// Función para descargar la lista de Wesens como un archivo PDF y luego restaurar el contenido original y volver a mostrar la lista de todos los Wesens
function descargarLista() {
  var printContents = document.getElementById("informe").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  cargarListaYmostrar();
  location.reload(true);
}

cargarListaYmostrar();