//main click listener
document.getElementById("beerPong").addEventListener("click", function(event){

  try {
    JSON.parse(event.target.id);
  } catch (error) {
    mouseIsDown = false;
    return;
  }

  if(JSON.parse(event.target.id) instanceof Array){

    switch(penType){
      case("normal"):
        clicks = [0, "", "", ""];
        event.target.style.background = color;
        break;
      case("plus"):
        clicks = [0, "", "", ""];
        drawPlus(event.target.id);
        break;
      case("fill"):
        fill(event.target.id);
        event.target.style.background = color;
        break;
      case("line"):

        if(clicks[0] === 0){
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;

          drawLine(clicks[1], clicks[2]);
          clicks = [0, "", "", ""];
        }
        break;
      case("square"):

        if(clicks[0] === 0){
          // oldColor = event.target.style.background;
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;
          drawSquare(clicks[1], clicks[2]);
          clicks = [0, "", "", ""];
        }
        break;
      case("curve"):

        if(clicks[0] === 0){
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;
          event.target.style.background = color;
        }
        else if (clicks[0] === 2) {
          clicks[3] = event.target.id;
          event.target.style.background = color;
          drawCurve(clicks[1], clicks[2], clicks[3]);
          clicks = [0, "", "", ""];
        }
        break;
      case("hcurve"):

        if(clicks[0] === 0){
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;
          event.target.style.background = color;
        }
        else if (clicks[0] === 2) {
          clicks[3] = event.target.id;
          event.target.style.background = color;
          drawHCurve(clicks[1], clicks[2], clicks[3]);
          clicks = [0, "", "", ""];
        }
        break;
      case("triangle"):

        if(clicks[0] === 0){
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;
          event.target.style.background = color;
        }
        else if (clicks[0] === 2) {
          clicks[3] = event.target.id;
          event.target.style.background = color;
          drawTriangle(clicks[1], clicks[2], clicks[3]);
          clicks = [0, "", "", ""];
        }
        break;
      case("circle"):

        if(clicks[0] === 0){
          oldColor = event.target.style.background;
          event.target.style.background = color;
          clicks[1] = event.target.id;
          clicks[0] ++;
        }

        else if(clicks[0] === 1){
          clicks[2] = event.target.id;
          clicks[0] ++;

          drawCircle(clicks[1], clicks[2]);
          clicks = [0, "", "", ""];
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