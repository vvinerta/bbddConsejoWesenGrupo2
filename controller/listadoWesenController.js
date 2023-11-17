var lista =document.getElementById("listaW");  

let wesendao=new WesenDao(); 
let arraywesens=[];

//En esta linea se recoje el array de todos los Wesen
arraywesens=wesendao.getAllWesens();

arraywesens.forEach(element => {

    //Estas dos lineas formatean los datos para mostrarlos
    formateardatos(element);
    let complices=listararrays(element.getWesenComplices());

    
var li=document.createElement("li");
li.innerHTML="<div class='horizontal'>"+"<div name='datos'>"+
"<div name='datospersonales' class='horizontal'>"+
"<div name='datosinfo' class='info'>"+
"<h2>"+element.getNombre()+"</h2>"+
"Tipo : "+element.getTipo()+"<br>"+
"Nacionalidad : "+element.getNacionalidad()+"<br>"+
"Direccion : "+element.getDireccion()+"</div>"+
"<div name='datofoto'><img src="+element.getFoto()+" alt='Foto del criminal'></div></div>"+
"<div class='horizontal2'>------------------------------------------------------------------------------</div>"+
"<div name='datoscrimen' class='horizontal'>"+
"<div name='infocrimen' class='info suelo'>"+
"Crimen/es : "+element.getCrimenes()+"<br>"+
"Gravedad : "+element.getGravedadFaltas()+"<br>"+
"Apercibido : "+element.getApercibido()+"<br>"+
"<b>Complices :</b><br>"+complices
+"</div>"+
"<div name='infoley'>"+
"Castigo : "+element.getCastigo()+"<br>"+
"Sicario : "+element.getSicario()+"<br>"+
"Fecha de la condena : "+element.getFechaCondena()+"</div></div></div>"+
"<div name='papelera' class='papelera'><svg onclick='quitarwesen("+element+")' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'/></svg></div></div>"
lista.appendChild(li);
});

//Metodo para borrar y recargar la lista
function quitarwesen(element){
    if(confirm("¿Desea borrar este Wesen?")){
wesendao.deleteWesen(element);
window.location.href("../view/listadoWesen.html");
    }
}

//Este metodo sirve para cambiar true y false por Si y no para mostrarlo
function formateardatos(objeto){

if(objeto.getApercibido()){
    objeto.setApercibido("Si");
}else{
    objeto.setApercibido("No");
}

}

//Este metodo saca los complices en una cadena para mostrarlo
function listararrays(array){
    let complices="";

    array.forEach(comp => {
        complices = complices.concat(comp, "<br>");
    });
return complices;
}