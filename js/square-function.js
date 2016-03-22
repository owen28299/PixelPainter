function drawSquare(coord1, coord2){

  var p1 = JSON.parse(coord1);
  var p2 = JSON.parse(coord2);
  var invert = false;

  if(p1[1] > p2[1]){
    p1 = JSON.parse(coord2);
    p2 = JSON.parse(coord1);
    invert = true;
  }

  console.log('p1', p1);
  console.log('p2', p2);

  var length = p2[0] - p1[0];
  var height = p2[1] - p1[1];

  for (var y = 0; y <= height; y++) {
    var c1 = JSON.stringify([p1[0], p1[1] + y]);
    var c2 = JSON.stringify([p1[0] + length,p1[1] + y]);
    drawLine(c1, c2);
  }

  if (invert === true){
    for (var yy = 0; yy <= height; yy++) {
      var cc1 = JSON.stringify([p1[0] + 1, p1[1] + yy]);
      var cc2 = JSON.stringify([p1[0] + 1 + length,p1[1] + yy]);

      console.log('cc1', cc1);
      console.log('cc2', cc2);

      drawLine(cc1, cc2);
    }
  }


}