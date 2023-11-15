var lista =document.getElementById("listaC");  

let wesendao=new CrimenDao(); 

let arraycrimen=[];
arraycrimen=wesendao.getAllCrimenes();

arraycrimen.forEach(element => {

var li=document.createElement("li");
li.innerHTML="<div class='horizontal'>"+
"<div class='info'>"+
"Denominacion : "+ element.getDenominacion()+"<br>"+
"Fecha : "+element.getFechaRealizacion()+"<br>"+
"-------------------------------------------------<br>"+
"<b>Involucrado/s :</b><br>"+element.getInvolucradosKehrseiter()+"<br>"+
"<b>Victima/s : </b><br>"+element.getVictimas()+"</div>"+
"<div class='suelo'>"+
"Descripción : <br><textarea cols='50' rows='5'>"+element.getDescripcion()+"</textarea>"+"</div></div>"

lista.appendChild(li);
});
