function drawHCurve(coord1, coord2, coord3){
  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);
  var p3 = JSON.parse(coord3);

  var y1 = p1[0];
  var x1 = p1[1];
  var y2 = p2[0];
  var x2 = p2[1];
  var y3 = p3[0];
  var x3 = p3[1];

  var a;
  var b;
  var c;

  var A = (x3 * x3) - (x1 * x1);
  var B = y2 - y1;
  var C = x2 - x1;
  var D = (x2 * x2) - (x1 * x1);
  var E = y3 - y1;
  var F = x3 - x1;

  b = ((D * E) - (A * B)) / ((D * F) - (C * A));
  a = (B - (b * C)) / D;
  c = y1 - a * (x1 * x1) - b * x1;

  function getY(x){
    return a * x * x + b * x + c;
  }

  var start = Math.min(x1, x2, x3);
  var end = Math.max(x1, x2, x3);
  var vertexx = 0;

  for (var x = start; x <= end; x++){
    var pointx = JSON.stringify([Math.round(getY(x)), x]);

    if (document.getElementById(pointx)) {
      document.getElementById(pointx).style.background = color;
    }

    if(getY(x) > getY(vertexx)){
      vertexx = x;
    }
  }

  if(vertexx === 0) {
    for (var v = start; v <= end; v++){
      if(getY(v) < getY(vertexx)){
      vertexx = v;
      }
    }
  }

  starty = Math.min(vertexx, y1, y2, y3);
  endy = Math.max(vertexx, y1, y2, y3);

  var pointy;

  for (var y = starty; y <= endy; y++){
    for (var check = start; check < end; check++){
      var xcheck = getY(check);

      if ( Math.abs((y - xcheck)) < Math.abs(0.9) &&
        Math.abs((y - endy)) > Math.abs(5)){

        pointy = JSON.stringify([y, Math.round(check)]);

        if(document.getElementById(getAbove(pointy)).style.background === "white" &&
        document.getElementById(getBelow(pointy)).style.background === "white") {
            if(endy - starty > end - start) {
              document.getElementById(pointy).style.background = color;
            }

            else if(document.getElementById(getLeft(pointy)).style.background === "white" &&
            document.getElementById(getRight(pointy)).style.background === "white"){
              document.getElementById(pointy).style.background = color;
            }
        }
      }


    }
  }


}