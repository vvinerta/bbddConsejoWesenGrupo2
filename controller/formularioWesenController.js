

let txtNombreApellidos = document.getElementById("nombreApellidos");
let txtDireccion = document.getElementById("direccion");
let txtNacionalidad = document.getElementById("nacionalidad");
let txtTipo = document.getElementById("tipo");
let txtCrimenes = document.getElementById("crimenes");
let txtFoto = document.getElementById("foto");
let txtApercibido = document.getElementById("apercibido");
let comboGravedadFaltas = document.getElementById("gravedadFaltas");
let txtWesenComplices = document.getElementById("wesenComplices");
let txtSicario = document.getElementById("sicario");
let txtCastigo = document.getElementById("castigo");
let selFechaCondena = document.getElementById("fechaCondena");

function guardarWesen(){

    if(!document.getElementById("wesenForm").checkValidity()){
        return;
    }

    let nombre = txtNombreApellidos.value;
    let direccion = txtDireccion.value;
    let nacionalidad = txtNacionalidad.value;
    let tipo = txtTipo.value;
    let crimenes = txtCrimenes.value;
    let foto = txtFoto.value;
    let apercibido = txtApercibido.value;
    let gravedadFaltas = comboGravedadFaltas.value;
    let wesenComplices = comboGravedadFaltas.value;
    let sicario = txtSicario.value;
    let castigo = txtCastigo.value;
    let fechaCondena = selFechaCondena.value;

    
    let miWesen = new Wesen(nombre, direccion, nacionalidad, tipo, crimenes, foto, 
                            apercibido, gravedadFaltas, wesenComplices, sicario, castigo, fechaCondena);
        
            console.log(miWesen);
    
    let wesenDao = new WesenDao();
    
    wesenDao.addWesen(miWesen);

    alert("Criminal añadido a la base de datos");
    
}

function previewImage(event) {
    const input = event.target;
    const previewImg = document.getElementById('previewImg');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        previewImg.src = "";
    }
}
