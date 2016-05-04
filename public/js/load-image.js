'use strict';

document.getElementById("load").addEventListener("click", function() {

  var imageName = document.getElementById('loadas').value;

  var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', renderSavedImage);
  loadReq.open("GET", "/image/load/" + imageName);
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

function loadAll(){

  var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', function(data){
    var savedImages = (JSON.parse(data.target.responseText));

    var dropdown = document.getElementById('loadas');

    var names = [];

    savedImages.forEach(function(element){
      if(element.name){
        if(names.indexOf(element.name) === -1){
          names.push(element.name);
        }
      }
    });

    names.forEach(function(element){
      var option = document.createElement('option');
      option.value = element;
      option.innerHTML = element;

      dropdown.appendChild(option);
    });


  });
  loadReq.open("GET", "/image/loadall");
  loadReq.send();

}

loadAll();