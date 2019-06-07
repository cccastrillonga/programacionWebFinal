	
var contador = 0;

fetch('http://200.116.198.74:8080/visitas/')
.then(function(visitas,data){
    return visitas.json();
})
.then(function(visitas){
    document.getElementById("Visitas").innerHTML = visitas;
})

