function fill(coord){
  var up = coord;
  var down = coord;
  var left = coord;
  var right = coord;

  var base = document.getElementById(coord).style.background;

  console.log('base', base);
  console.log('color', color);

  var baseComponents = base.split("");
  baseComponents.shift();
  baseComponents.shift();
  baseComponents.shift();
  baseComponents.shift();
  baseComponents.pop();

  baseComponents = baseComponents.join("").split(",");

  function rgbToHex(r, g, b) {

    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  baseComponents = rgbToHex(Number(baseComponents[0]), Number(baseComponents[1]), Number(baseComponents[2]));

  if(baseComponents === color){
    return;
  }

  if(base === color){
    return;
  }

  while(document.getElementById(getLeft(left)).style.background === base){
      document.getElementById(getLeft(left)).style.background = color;
      left = getLeft(left);
  }

  while(document.getElementById(getRight(right)).style.background === base){
    document.getElementById(getRight(right)).style.background = color;
    right = getRight(right);
  }

  while(document.getElementById(getAbove(up)).style.background === base){
    document.getElementById(getAbove(up)).style.background = color;

    left = getAbove(up);
    right = getAbove(up);

    while(document.getElementById(getLeft(left)).style.background === base){
      document.getElementById(getLeft(left)).style.background = color;
      left = getLeft(left);
    }

    while(document.getElementById(getRight(right)).style.background === base){
    document.getElementById(getRight(right)).style.background = color;
    right = getRight(right);
    }

    up = getAbove(up);
  }

  while(document.getElementById(getBelow(down)).style.background === base){
    document.getElementById(getBelow(down)).style.background = color;

    left = getBelow(down);
    right = getBelow(down);

    while(document.getElementById(getLeft(left)).style.background === base){
      document.getElementById(getLeft(left)).style.background = color;
      left = getLeft(left);
    }

    while(document.getElementById(getRight(right)).style.background === base){
    document.getElementById(getRight(right)).style.background = color;
    right = getRight(right);
    }

    down = getBelow(down);
  }

}