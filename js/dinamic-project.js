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
	'use strict'
	var tableParts = jsonObj;

	for (var i = 0; i<tableParts.length; i++){
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var td6 = document.createElement('td');
		var td7 = document.createElement('td');
		var td8 = document.createElement('td');
		var td9 = document.createElement('td');

		td1.textContent = tableParts[i].id;
		td2.textContent = tableParts[i].name;
		td3.textContent = tableParts[i].description;
		td4.textContent = tableParts[i].assignedAmount;
		td5.textContent = tableParts[i].clientId;
		td6.textContent = tableParts[i].calendarStartDate;
		td7.textContent = tableParts[i].calendarEndDate;
		td8.textContent = tableParts[i].lastUpdate;
		td9.textContent = tableParts[i].active;
	}

	tBody = document.createElement('tbody');

	tbody.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

	tableBody.append(tbody);

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
