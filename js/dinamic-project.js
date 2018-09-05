var tableHead = document.querySelector("#tableHead");
var tableBody = document.querySelector("#tableBody");

var requestURL = 'http://localhost:1001/projects';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
	'use strict';
	var projectData = request.response;
};

function makeTable (jsonObj){

}

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

function addNewProject() {
	alert("Project added successfully")
}

$(function) {
	$(#tableBody).html("");
	for (var i = 0; i<listProjects.length; i++){
		var tr = `<tr>
          <td>`+data.datos[i].nombre+`</td>
          <td>`+data.datos[i].apellido+`</td>
          <td>`+data.datos[i].cargo+`</td>
          <td>`+data.datos[i].empresa+`</td>
        </tr>`;
	}
}