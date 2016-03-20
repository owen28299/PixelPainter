function getAbove(coord){
  var xy = JSON.parse(coord);

  if (xy[1] > 0) {
    xy[1] = xy[1] - 1;
  }

  xy = JSON.stringify(xy);

  return xy;
}

function getBelow(coord){
  var xy = JSON.parse(coord);

  if(xy[1] < vpixels){
    xy[1] = xy[1] + 1;
  }

  xy = JSON.stringify(xy);

  return xy;
}

function getLeft(coord){
  var xy = JSON.parse(coord);

  if(xy[0] > 0){
    xy[0] = xy[0] - 1;
  }

  xy = JSON.stringify(xy);

  return xy;
}

function getRight(coord){
  var xy = JSON.parse(coord);

  if(xy[0] < hpixels){
    xy[0] = xy[0] + 1;
  }
  xy = JSON.stringify(xy);

  return xy;
}

function drawPlus(coord){
  if(penType === "plus"){
    event.target.style.background = color;
    document.getElementById(getAbove(coord)).style.background = color;
    document.getElementById(getBelow(coord)).style.background = color;
    document.getElementById(getLeft(coord)).style.background = color;
    document.getElementById(getRight(coord)).style.background = color;
  }
}