function postForm(){
    'use strict'
    var postUrl = 'http://localhost:1001/projects';
    var post = new XMLHttpRequest();

    post.open("POST", url, true);
    post.setRequestHeader('Content-Type', 'application/json');

    var name = document.getElementById(name);
    var description = document.getElementById(description);
    var assignedAmount = document.getElementById(assignedAmount);
    var clientId = documento.getElementById(clientId);
    var calendarStartDate = documento.getElementById(calendarStartDate);
    var calendarEndDate = documento.getElementById(calendarEndDate);

    var dataJson = JSON.stringify({name: name.value, description: description.value, assignedAmount: assignedAmount.value, clientId: clientId.value, calendarStartDate: calendarStartDate.value, calendarEndDate: calendarEndDate.value});

    post.onload = function () {
        if (post.readyState === 4 && post.status === 400){
            window.location.replace
            (http://localhost:1001/web/dinamic-project)
        }

    }

}