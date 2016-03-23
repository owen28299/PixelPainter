function drawPlus(coord){
  if(penType === "plus"){
    event.target.style.background = color;
    document.getElementById(getAbove(coord)).style.background = color;
    document.getElementById(getBelow(coord)).style.background = color;
    document.getElementById(getLeft(coord)).style.background = color;
    document.getElementById(getRight(coord)).style.background = color;
  }
}