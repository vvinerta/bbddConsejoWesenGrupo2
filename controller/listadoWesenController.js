var lista =document.getElementById("listaW");  

let wesendao=new WesenDao(); 
let arraywesens=[];
arraywesens=wesendao.getAllWesens();

arraywesens.forEach(element => {

    formateardatos(element);
    let complices=listararrays(element.getWesenComplices());

var li=document.createElement("li");
li.innerHTML=
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
"Fecha de la condena : "+element.getFechaCondena()+"</div></div>"
lista.appendChild(li);
});

function formateardatos(objeto){

if(objeto.getApercibido()){
    objeto.setApercibido("Si");
}else{
    objeto.setApercibido("No");
}

}
function listararrays(array){
    let complices="";

    array.forEach(comp => {
        complices = complices.concat(comp, "<br>");
    });
return complices;
}