'use strict';

document.getElementById("load").addEventListener("click", function() {

  var saveReq = new XMLHttpRequest();
  saveReq.addEventListener('load', renderSavedImage);

  saveReq.open("GET", "/load");
  saveReq.send();

});

function renderSavedImage(data){
  var image = JSON.parse(data.target.responseText);

  for (var coord in image){
    document.getElementById(coord).style.background = image[coord];
  }
}