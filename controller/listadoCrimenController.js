var lista =document.getElementById("listaC");  

let wesendao=new CrimenDao(); 
// let b = new Crimen("Allanamiento","10-2-1998",["Carlos Manuel", "Francisco Javier"],["Luis Miguel"],"Han entrado en la casa de Luis Miguel");
// let a = new Crimen("Allanamiento","10-2-1998",["Carlos Manuel", "Francisco Javier"],["Luis Miguel"],"Han entrado en la casa de Luis Miguel");
let arraycrimen=[];
arraycrimen=wesendao.getAllCrimenes();
// arraycrimen.push(a);
// arraycrimen.push(b);

arraycrimen.forEach(element => {

let involucrados=listararrays(element.getInvolucradosKehrseiter());
let victimas=listararrays(element.getVictimas());


var li=document.createElement("li");
li.innerHTML="<div class='horizontal'>"+
"<div class='info'>"+
"Denominacion : "+ element.getDenominacion()+"<br>"+
"Fecha : "+element.getFechaRealizacion()+"<br>"+
"-------------------------------------------------<br>"+
"<b>Involucrado/s :</b><br>"+involucrados+"<br>"+
"<b>Victima/s : </b><br>"+victimas+"</div>"+
"<div class='suelo'>"+
"Descripción : <br><textarea cols='50' rows='5'>"+element.getDescripcion()+"</textarea>"+"</div></div>"


lista.appendChild(li);
});

function listararrays(array){
   
    let involucrados="";
    array.forEach(invo => {
        involucrados = involucrados.concat(invo, "<br>");
    });
return involucrados;
}
