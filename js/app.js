var color;
var mouseIsDown = false;
var plus = false;

document.getElementById('colors').addEventListener('click', function(event){
   color = event.target.id;
});

document.getElementById('clear').addEventListener("click", function(){

  var allCanvas  = document.querySelectorAll(".cell");

  Array.prototype.forEach.call(allCanvas, function(el){
    el.style.background = "white";
  });

});

function getAbove(coord){
  var xy = JSON.parse(coord);

  var above = xy;
  above[1] = xy[1] - 1;
  above = JSON.stringify(above);

  return above;

}

function getBelow(coord){
  var xy = JSON.parse(coord);

  var below = xy;
  below[1] = xy[1] + 1;
  below = JSON.stringify(below);

  return below;
}

function getLeft(coord){
  var xy = JSON.parse(coord);

  var left = xy;
  left[0] = xy[0] - 1;
  left = JSON.stringify(left);

  return left;
}

function getRight(coord){
  var xy = JSON.parse(coord);

  var right = xy;
  right[0] = xy[0] + 1;
  right = JSON.stringify(right);

  return right;
}

function drawPlus(coord){
    if(plus === true){

    var above = getAbove(coord);
    var below = getBelow(coord);
    var left = getLeft(coord);
    var right = getRight(coord);

    event.target.style.background = color;

    if (document.getElementById(above) !== null){
      document.getElementById(above).style.background = color;
    }

    if (document.getElementById(below) !== null){
      document.getElementById(below).style.background = color;
    }

    if (document.getElementById(left) !== null){
      document.getElementById(left).style.background = color;
    }

    if (document.getElementById(right) !== null){
      document.getElementById(right).style.background = color;
    }
  }
}


document.getElementById("beerPong").addEventListener("mousedown", function(event){
  event.target.style.background = color;
  mouseIsDown = true;

  if(plus === true){
    drawPlus(event.target.id);
  }

});

document.getElementById("body").addEventListener("mouseup", function(event){
  mouseIsDown = false;
});

document.getElementById("beerPong").addEventListener("mouseover", function(event){
  if(mouseIsDown === true) {
    event.target.style.background = color;
  }
});

document.getElementById("plus").addEventListener("click", function(event){
  plus = true;
});


