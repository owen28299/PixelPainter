function drawSquare(coord1, coord2){

  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);

  if(p1[1] > p2[1]){
    p1 = JSON.parse(coord2);
    p2 = JSON.parse(coord1);
  }

  var x1 = p1[0];
  var y1 = p1[1];
  var x2 = p2[0];
  var y2 = p2[1];

  var TR = JSON.stringify([x2, y1]);
  var BL = JSON.stringify([x1, y2]);
  p1 = JSON.stringify(p1);
  p2 = JSON.stringify(p2);

  drawLine(p1, TR);
  drawLine(TR, p2);
  drawLine(p2, BL);
  drawLine(BL, p1);

  document.getElementById(p1).style.background = color;
  document.getElementById(p2).style.background = color;
  document.getElementById(BL).style.background = color;
  document.getElementById(TR).style.background = color;

}