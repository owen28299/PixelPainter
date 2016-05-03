function drawCircle(coord1, coord2){

  document.getElementById(coord1).style.background = oldColor;

  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);

  var x1 = p1[0];
  var y1 = p1[1];
  var x2 = p2[0];
  var y2 = p2[1];
  var h = x1;
  var k = y1;

  var r = Math.round(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));

  var start = h - r;
  var finish = h + r;

  function getY(x) {
    return Math.sqrt(Math.abs(r * r - (x - h) * (x - h)));
  }

  for (var x = start; x <= finish; x++){
    var pointy1 = JSON.stringify([x, Math.round(k + getY(x))]);
    var pointy2 = JSON.stringify([x, Math.round(k - getY(x))]);

    if (document.getElementById(pointy1)){
      document.getElementById(pointy1).style.background = color;
    }
    if (document.getElementById(pointy2)) {
      document.getElementById(pointy2).style.background = color;
    }
  }

  function getX(y) {
    return Math.sqrt(Math.abs(r * r - (y - k) * (y - k)));
  }

  start = k - r;
  finish = k + r;

  for (var y = start; y <= finish; y++){
    var pointx1 = JSON.stringify([Math.round(h + getX(y)), y]);
    var pointx2 = JSON.stringify([Math.round(h - getX(y)), y]);

    if (document.getElementById(pointx1)){
      document.getElementById(pointx1).style.background = color;
    }
    if (document.getElementById(pointx2)) {
      document.getElementById(pointx2).style.background = color;
    }
  }




}