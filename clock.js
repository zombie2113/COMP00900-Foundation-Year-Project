var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var div = document.getElementById('div');
div.textContent = hours + ":" + minutes + ":" + seconds;
var myVar = setInterval(function(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
    div.textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);

