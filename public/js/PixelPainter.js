function makeCanvas(r, c){
  var rows = r;
  var columns = c;
  var colorArr = ["#000000", "#ffffff", "#ff0000", "#0000ff", "#009900", "#ffff00", "#ff6600", "#6600cc", ];

  function genCanvas(){
    for (var i = 0; i <= rows; i++){
      var row = document.createElement('tr');
      row.id = i;
      document.getElementById("beerPong").appendChild(row);

      for(var j = 0; j <= columns; j++){
        var col = document.createElement('td');
        col.className ="cell";
        col.id = JSON.stringify([j,i]);
        document.getElementById(i).appendChild(col);
      }
    }
  }

  function genColors(){
    for(var i in colorArr){
      var col= document.createElement('td');
      col.id = colorArr[i];
      col.style.background= colorArr[i];
      document.getElementById('colors').appendChild(col);
    }
  }

  return{
    genCanvas : genCanvas,
    genColors : genColors
  };

}

var hpixels = 100;
var vpixels = 100;

var myCanvas = makeCanvas(hpixels, vpixels);
myCanvas.genCanvas();
myCanvas.genColors();

