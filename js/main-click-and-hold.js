//main click listener
document.getElementById("beerPong").addEventListener("click", function(event){


  if(JSON.parse(event.target.id) instanceof Array){

    switch(penType){
      case("normal"):
        event.target.style.background = color;
        break;
      case("plus"):
        drawPlus(event.target.id);
        break;
      case("line"):

        event.target.style.background = color;
        console.log('event.target.id', event.target.id);

        if(clicks[0] === 0){
          clicks[1] = event.target.id;
          clicks[0] ++;
          console.log(clicks);

        }
        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;

          console.log(clicks);
          drawLine(clicks[1], clicks[2]);
          clicks = [0, "", ""];

          console.log(clicks);
        }

        break;
    }
  }

});

//main drag listener
document.getElementById("beerPong").addEventListener("mouseover", function(event){
  if(mouseIsDown === true) {
    switch(penType){
      case("normal"):
        event.target.style.background = color;
        break;
      case("plus"):
        drawPlus(event.target.id);
        break;
    }
  }
});