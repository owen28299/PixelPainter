var color;
var mouseIsDown = false;

document.getElementById('colors').addEventListener('click', function(event){
   color = event.target.id;
});

document.getElementById('clear').addEventListener("click", function(){
  var allCanvas  = document.querySelectorAll(".cell");

  Array.prototype.forEach.call(allCanvas, function(el){
    el.style.background = "white";
  });

});

document.getElementById("beerPong").addEventListener("mousedown", function(event){
  event.target.style.background = color;
  mouseIsDown = true;
  console.log("mouseIsDown");
});

document.getElementById("beerPong").addEventListener("mouseup", function(event){
  console.log("mouse is up");
  mouseIsDown = false;
});

document.getElementById("beerPong").addEventListener("mouseover", function(event){
  if(mouseIsDown === true) {
    event.target.style.background = color;
  }
});


