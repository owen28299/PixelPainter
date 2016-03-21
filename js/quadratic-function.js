function drawCurve(coord1, coord2, coord3){
  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);
  var p3 = JSON.parse(coord3);

  var x1 = p1[0];
  var y1 = p1[1];
  var x2 = p2[0];
  var y2 = p2[1];
  var x3 = p3[0];
  var y3 = p3[1];

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


  var y = a * x1 * x1 + b * x1 + c;

  for (var x = x1; x <= x3; x++){
    var pointx = JSON.stringify([x, Math.round(a * x * x + b * x + c)]);
    document.getElementById(pointx).style.background = color;
  }

}