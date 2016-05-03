function drawLine(coord1, coord2){

  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);

  if(p1[0] > p2[0]){
    p1 = JSON.parse(coord2);
    p2 = JSON.parse(coord1);
  }

  var slope = (p2[1] - p1[1]) / (p2[0] - p1[0]);

  if(slope === Infinity){
    slope = 9999999999;
  }

  if(slope === -Infinity){
    slope = -9999999999;
  }

  var yint = p1[1] - slope * p1[0];

  for (var x = p1[0]; x < p2[0]; x++){
    var pointx = JSON.stringify([x, Math.round(yint + (slope * x))]);
    document.getElementById(pointx).style.background = color;
  }

  for (var y = p1[1]; y < p2[1]; y++){
    var pointy = JSON.stringify([Math.round(((y - yint)/slope)), y]);
    document.getElementById(pointy).style.background = color;
  }

  if(p1[1] > p2[1]){
    for (var yy = p2[1]; yy < p1[1]; yy++){
      var pointyy = JSON.stringify([Math.round(((yy - yint)/slope)), yy]);
      document.getElementById(pointyy).style.background = color;
  }
  }

}