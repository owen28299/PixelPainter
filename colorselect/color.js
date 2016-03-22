//adding color picker

var pickColor;

function natsColor(){
  pickColor = document.getElementById('cp').value;
  console.log(pickColor);
}
natsColor();

document.getElementById('cp').addEventListener('click', function() {
  natsColor();
});

