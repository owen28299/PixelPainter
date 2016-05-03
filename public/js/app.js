var color = "black";
var mouseIsDown = false;
var penType = "normal";
var clicks = [0,"","", ""];
var oldColor = "white";

function clearCanvas() {
  var allCanvas  = document.querySelectorAll(".cell");

  Array.prototype.forEach.call(allCanvas, function(el){
    el.style.background = "white";
  });

  clicks = [0, "", "", ""];

  oldColor = "white";
}

//start with a blank canvas
clearCanvas();


//Colour Selector
document.getElementById('colors').addEventListener('click', function(event){
  color = event.target.style.background;
  document.getElementById('currentColor').value = event.target.id;
});

document.getElementById("lastColorBlock").addEventListener('click', function(event){
  color = event.target.style.background;
  document.getElementById('currentColor').value = event.target.value;
});


//turns on the mouseDown
document.getElementById("beerPong").addEventListener("mousedown", function(event){
  if(event.target.id !== "beerPong"){
    mouseIsDown = true;
  }

});

//drag now invokes mouse up
document.getElementById("beerPong").addEventListener("drag", function(){
  mouseIsDown = false;
});

//turns off the mouseDown
document.addEventListener("mouseup", function(event){
  mouseIsDown = false;
});


//clear button
document.getElementById('clear').addEventListener("click", function(){
  clearCanvas();
});

document.getElementById('holder').addEventListener("click", function(event){
  event.stopPropagation();
  penType = event.target.id;
});