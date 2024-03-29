
function comienzo(){
document.addEventListener('DOMContentLoaded', function () {
    // Comprueba si la alerta ya se ha mostrado
    if (!localStorage.getItem('alertaMostrada')) {
        // Muestra la alerta
        mostrarAlerta();

        // Marca que la alerta ha sido mostrada
        localStorage.setItem('alertaMostrada', true);
    }
});
}

comienzo();

function mostrarAlerta() {
    // Muestra la alerta y almacena el resultado (true o false)
    var resultado = window.confirm("¿Quieres que haya datos por defecto?");

    if (resultado) {

      var wesen1 = new Wesen("Cucuy Geier",
        "Av. de concha Espina",
        "España",
        "Monstruo",
        ["Ejecución Espectral"],
        "https://static.wikia.nocookie.net/grimm/images/f/fd/305-El_Cucuy.png",
        true,
        "5",
        [""],
        "Ziegevolk",
        "Exilio a la Dimensión Onírica",
        "2023-11-16");

      var wesen2 = new Wesen("Schakal",
        "Fischerstadt",
        "Alemania",
        "Chacal",
        ["Ejecución Espectral", "Desvanecimiento Onírico"],
        "https://static.wikia.nocookie.net/grimm/images/5/58/511-Lucien_woged.jpeg",
        true,
        "3",
        ["Cucuy Geier"],
        "Musai",
        "Encierro en el Laberinto",
        "2023-11-17");

      let wesenDao = new WesenDao();
      wesenDao.addWesen(wesen1);
      wesenDao.addWesen(wesen2);

      var crimen1 = {
        denominacion: "Desvanecimiento Onírico",
        descripcion: "Crimen en el que los Wesen utilizan habilidades relacionadas con los sueños. Este acto criminal se caracteriza por sumir a las víctimas en un estado de confusión y desorientación a través de la alteración de sus sueños.",
        fechaRealizacion: "2023-11-13",
        involucradosKehrseiter: 1,
        victimas: 7
      }

      var crimen2 = {
        denominacion : "Ejecución Espectral",
        descripcion: "Crimen oscuro y misterioso, involucra habilidades sobrenaturales de Wesens, se clasifica como un asesinato a mano armada, pero la naturaleza de los métodos utilizados lo hace particularmente siniestro.",
        fechaRealizacion: "2023-11-01",
        involucradosKehrseiter: 2,
        victimas: 5
      }

      let crimenDao = new CrimenDao();
      crimenDao.addCrimen(crimen1);
      crimenDao.addCrimen(crimen2);
    } else {

    }
}