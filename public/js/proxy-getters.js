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

function getTopLeft(coord){
  var left = getLeft(coord);
  return getAbove(left);
}

function getTopRight(coord){
  var right = getRight(coord);
  return getAbove(right);
}

function getBottomLeft(coord){
  var left = getLeft(coord);
  return getBelow(left);
}

function getBottomRight(coord){
  var right = getRight(coord);
  return getBelow(right);
}

