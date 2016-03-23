function fill(coord){
  var up = coord;
  var down = coord;
  var left = coord;
  var right = coord;

  var base = document.getElementById(coord).style.background;

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