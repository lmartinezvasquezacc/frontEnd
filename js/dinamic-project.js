var addProject = function(event){
	event.preventDefault();
	var nuevaFilaProjectTemp = document.getElementById('nuevaFilaProject').innerHTML;
	
	var ultNro = document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML;
	ultNro = parseInt(ultNro)+1;
	document.querySelector('table#tableProjects tbody').innerHTML += nuevaFilaProjectTemp;
	document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML = ultNro;	
};
var agregarProjectBtn = document.querySelector('#addProject');
agregarProjectBtn.addEventListener('click', addProject);

$(document).click(function() {
  $("#toggle").toggle("slide");
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});

var listProjects = [{"name": "Pepito project", "description": "Java Project", "people": "Pepito", "creationDate": "01-08-2018", "lastUpdate": "09-09-2018"}];

$("#resultado").text(a.join(", "));