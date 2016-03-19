function colorEventListeners() {
  var color;
  var cells = document.querySelectorAll(".cell");

  document.getElementById('colors').addEventListener('click', function(event){
    color= event.target.id;
  });

  var arr = [];

  for (var i in cells){
    arr.push(cells[i]);
  }

  Array.prototype.forEach.call(cells, function(el, index){
    el.addEventListener("click", function(event){
      this.style.background = color;
    });
  });
}

colorEventListeners();
