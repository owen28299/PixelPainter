//adding color picker

function colorGen(){

	//creates an html input color picker
	var input = document.createElement('input');
	input.type = 'color';
	input.value = '#000000';
  input.id = 'currentColor';

	document.getElementById('colorpicker').appendChild(input);
	input.style.width = '100px';
	input.style.height = '28px';

	//creates last colors selected bank
	var blocks = 0;
  var modulolimit = 8;

	input.onchange = function() {
	 var child = document.getElementById('lastColorBlock').children;
	 var value = input.value;

   color = value;

	 if(child.length <= modulolimit - 1){

      var lastColor= document.createElement('div');
	    lastColor.className = 'lastColor';
	    lastColor.id = "q" + (blocks % modulolimit);
	    lastColor.style.background = value;
      lastColor.value = value;

      if (blocks === 0){
	     document.getElementById('lastColorBlock').appendChild(lastColor);
      }

      else {
       document.getElementById('lastColorBlock').insertBefore(lastColor, child[0]);
      }

      blocks++;
	}

  else {

    for (var i = 0; i <= (modulolimit - 2); i++){
      document.getElementById("q" + i).style.background = document.getElementById("q" + (i + 1)).style.background;
    }

    document.getElementById("q" + (modulolimit - 1) ).style.background = value;

	}

		};
	}

colorGen();
