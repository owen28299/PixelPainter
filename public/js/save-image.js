document.getElementById("save").addEventListener("click", function(){

  function saveImage(callback){
    var elementList = document.querySelectorAll('.cell');

    var imageState = {};

    Array.prototype.forEach.call(elementList, function(element){
      imageState[element.id] = element.style.background;
    });

    callback(imageState);
  }

  saveImage(function(imageState){
    var saveReq = new XMLHttpRequest();
    saveReq.addEventListener('load', function(data){
      console.log(data);
    });

    saveReq.open("POST", "/save");
    saveReq.setRequestHeader("Content-Type", "application/json");
    saveReq.send(JSON.stringify(imageState));
  });

});

