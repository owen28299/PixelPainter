//function that accepts clicks


var cells = document.querySelectorAll(".cell");

var arr = [];

for (var i in cells){
  arr.push(cells[i]);
}

Array.prototype.forEach.call(cells, function(el, index){
  el.addEventListener("click", function(event){
    this.innerHTML = "X";
  });
});



//function that assigns colors