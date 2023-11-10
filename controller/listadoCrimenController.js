var lista =document.getElementById("listaC");  

let wesendao=new CrimenDao(); 
let arraycrimen=wesendao.getAllCrimenes();

arraycrimen.forEach(element => {

var li=document.createElement("li");
li.innerHTML=element.getDenominacion()+"<br>"+
element.getFechaRealizacion()+"<br>"+
element.getInvolucradosKehrseiter()+"<br>"+
element.getVictimas()+"<br>"+
element.getDescripcion()+"<br><br>";

lista.appendChild(li);
});