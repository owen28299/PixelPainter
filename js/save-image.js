document.getElementById("save").addEventListener("click", function(){

  var canvas = document.getElementById("beerPong");

  var img = canvas.toDataURL("image/png");

  document.write('<img src=' + img + "/>");

});

