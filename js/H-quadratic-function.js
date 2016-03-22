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

  for (var x = start; x <= end; x++){
    var pointx = JSON.stringify([Math.round(getY(x)), x]);

    if (document.getElementById(pointx)) {
      document.getElementById(pointx).style.background = color;
    }
  }


}