function drawSquare(coord1, coord2){

  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);

  document.getElementById(coord1).style.background = oldColor;
  document.getElementById(coord2).style.background = oldColor;


  if(p1[1] > p2[1]){
    p1 = JSON.parse(coord2);
    p2 = JSON.parse(coord1);
  }

  var length = p2[0] - p1[0];
  var height = p2[1] - p1[1];

  for (var y = 0; y <= height; y++) {
    var c1 = JSON.stringify([p1[0], p1[1] + y]);
    var c2 = JSON.stringify([p1[0] + length,p1[1] + y]);
    drawLine(c1, c2);
  }

}