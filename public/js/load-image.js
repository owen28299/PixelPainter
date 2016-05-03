'use strict';

document.getElementById("load").addEventListener("click", function() {

  var imageName = document.getElementById('loadas').value;

  var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', renderSavedImage);
  loadReq.open("GET", "/load/" + imageName);
  loadReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  loadReq.send();

});

function renderSavedImage(data){
  var image = JSON.parse(data.target.responseText);

  for (var coord in image){
    document.getElementById(coord).style.background = image[coord];
  }
}