var service = new WesenService();

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
      wesen.getNombre() +
      "<br>" +
      wesen.getNacionalidad() +
      "<br>" +
      wesen.getTipo() +
      "<br>" +
      wesen.getFechaCondena() +
      "<br>" +
      wesen.getGravedadFaltas() +
      "<br>" +
      wesen.getCrimenes() +
      "<br>" +
      "<br>";

    lista.appendChild(li);
  });
}

function ordenar(listaWesens) {
  listaWesens = service.sortByFechaCondena(listaWesens);
  listaWesens = service.sortByNumeroCrimenes(listaWesens);
  listaWesens = service.sortByGravedadFaltas(listaWesens);

  return listaWesens;
}

function aplicarFiltro() {
  var listaDeWesensens = service.getAllWesens();

  var filtro = document.getElementById("filtro").value;
  var valorFiltro = document.getElementById("valorFiltro").value;

  if (filtro == "" || valorFiltro.trim() == "") {
    alert("Debe rellenar los campos");
  } else {
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
          listaDeWesensens = service.getWesensByGravedadMayorA(valorFiltro);
          break;
      }

      var lista = document.getElementById("informe");

      while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
      }

      listaDeWesensens.forEach((wesen) => {
        var li = document.createElement("li");
        li.innerHTML =
          wesen.getNombre() +
          "<br>" +
          wesen.getNacionalidad() +
          "<br>" +
          wesen.getTipo() +
          "<br>" +
          wesen.getFechaCondena() +
          "<br>" +
          wesen.getGravedadFaltas() +
          "<br>" +
          wesen.getCrimenes() +
          "<br>" +
          "<br>";

        lista.appendChild(li);
      });
    }
  }
}

function borrarFiltro() {
  var filtro = document.getElementById("filtro");
  var valorFiltro = document.getElementById("valorFiltro");

  filtro.value = "";
  valorFiltro.value = "";
  cargarListaYmostrar();
}

function descargarLista() {
  var printContents = document.getElementById("informe").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

cargarListaYmostrar();
