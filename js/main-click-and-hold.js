//main click listener
document.getElementById("beerPong").addEventListener("click", function(event){
  event.target.style.background = color;


  //turn this into a bunch of switches
  if(penType === "plus"){

    drawPlus(event.target.id);
  }

});

//main drag listener
document.getElementById("beerPong").addEventListener("mouseover", function(event){
  if(mouseIsDown === true) {
    event.target.style.background = color;
  }
});