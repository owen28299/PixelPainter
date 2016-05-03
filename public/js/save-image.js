document.getElementById("save").addEventListener("click", function(){

  function saveImage(callback){
    var elementList = document.querySelectorAll('.cell');

    var imageState = {};

    Array.prototype.forEach.call(elementList, function(element){
      imageState[element.id] = element.style.background;
    });

    var name = document.getElementById('saveas').value;

    callback(imageState, name);
  }

  saveImage(function(imageState, name){
    var saveReq = new XMLHttpRequest();
    saveReq.addEventListener('load', function(data){
      console.log(data);
    });

    saveReq.open("POST", "/image/save");
    saveReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    saveReq.send("imagestate=" + JSON.stringify(imageState) + "&name=" + name);
  });

});

