

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
    let foto = txtFoto.value;
    let apercibido = txtApercibido.checked;
    let gravedadFaltas = comboGravedadFaltas.value;
    let wesenComplices = txtWesenComplices.value;
    let sicario = txtSicario.value;
    let castigo = txtCastigo.value;
    let fechaCondena = selFechaCondena.value;
    let crimenes = [];

    var selectObject =document.getElementById("crimenes");
    for (var i = 0; i < selectObject.options.length; i++) {
        if(selectObject.options[i].selected ==true){              
            crimenes.push(selectObject.options[i].value);
          }
      }

      console.log(crimenes);

    
    let miWesen = new Wesen(nombre, direccion, nacionalidad, tipo, crimenes, foto, 
                            apercibido, gravedadFaltas, wesenComplices, sicario, castigo, fechaCondena);
        
            console.log(miWesen);
    
    let wesenDao = new WesenDao();
    
    wesenDao.addWesen(miWesen);

    alert("Criminal añadido a la base de datos");

    document.getElementById("wesenForm").reset();
    
}

function previewImage(input) {

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

function addOptions() {

    let crimenDao = new CrimenDao();

    let listaCrimenes = crimenDao.getDenominacionCrimenes();

    console.log(listaCrimenes);

    var select = document.getElementById("crimenes");
   
    listaCrimenes.forEach(function(elm){
     var option = document.createElement("option");
     option.text = elm;
     option.value= elm;
     select.appendChild(option);
    })
   }

addOptions();
