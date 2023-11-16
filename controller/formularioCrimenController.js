
let txtDenominacion = document.getElementById("denominacion");
let txtFechaRealizacion = document.getElementById("fechaRealizacion");
let txtInvolucradosKehrseiter = document.getElementById("involucradosKehrseiter");
let txtVictimas = document.getElementById("victimas");
let txtDescripcion = document.getElementById("descripcion");

/**
 * Metodo que una vez validado el formulario nos regista un objeto de Crimen en localStorage
 * @returns 
 */
function guardarCrimen(){

    if(!document.getElementById("crimenForm").checkValidity()){
        return;
    }

    let denominacion = txtDenominacion.value;
    let fechaRealizacion = txtFechaRealizacion.value;
    let involucradosKehrseiter = txtInvolucradosKehrseiter.value;
    let victimas = txtVictimas.value;
    let descripcion = txtDescripcion.value;

    let miCrimen = new Crimen(denominacion, fechaRealizacion, involucradosKehrseiter, victimas, descripcion);

    let crimenDao = new CrimenDao();

    crimenDao.addCrimen(miCrimen);

    alert("Crimen añadido correctamente a la base de datos");

    document.getElementById("crimenForm").reset();


}