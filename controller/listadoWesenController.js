
var lista =document.getElementById("listaW");  
let wesen1 = new Wesen("Nombre Apellidos", "Dirección", "Nacionalidad", "Tipo", 5, "foto.jpg", true, "Gravedad", ["Cómplice1", "Cómplice2"], true, "Castigo", "2023-11-08");
let wesen2 = new Wesen("Nombre Apellidos2", "Dirección", "Nacionalidad", "Tipo", 5, "foto.jpg", true, "Gravedad", ["Cómplice1", "Cómplice2"], true, "Castigo", "2023-11-08");

let wesendao=new WesenDao(); 
let arraywesens=wesendao.getAllWesens();

//USAR PAR PRUEBA
arraywesens=[wesen1,wesen2];

arraywesens.forEach(element => {

var li=document.createElement("li");
li.innerHTML=element.getNombre()+"<br>"+
element.getDireccion()+" - "+element.getNacionalidad()+"<br>"+
element.getTipo()+"<br>"+
element.getCrimenes()+"<br>"+
element.getFoto()+"<br>"+
element.getApercibido()+"<br>"+
element.getGravedadFaltas()+"<br>"+
element.getWesenComplices()+"<br>"+
element.getSicario()+"<br>"+
element.getCastigo()+"<br>"+
element.getFechaCondena()+"<br><br>";

lista.appendChild(li);
});