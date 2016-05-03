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
  var response = JSON.parse(data.target.responseText);

  var image = JSON.parse(response.imagestate);

  for (var coord in image){
    document.getElementById(coord).style.background = image[coord];
  }
}