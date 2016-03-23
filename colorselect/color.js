//adding color picker

function colorGen(){

	//creates an html input color picker
	var input = document.createElement('input');
	input.type = 'color';
	input.value = '#33cccc';

	document.getElementById('colorpicker').appendChild(input);
	input.style.width = '100px';
	input.style.height = '28px';

	//creates last colors selected bank
	var count = 0;

	input.onchange = function() {
	 var parent = document.getElementById('lastColorBlock');
	 var child = document.getElementById('lastColorBlock').children;
	 var value= input.value;
	 if(child.length <= 7){
	    var lastColor= document.createElement('div');
	    lastColor.className = 'lastColor';
	    lastColor.id= value;
	    lastColor.style.background = value;
	    console.log(lastColor.id);
	    document.getElementById('lastColorBlock').appendChild(lastColor);
	    console.log(document.getElementById('lastColorBlock').children);
	} else {

			if(count <= 7){
				var newColor= document.createElement('div');
	    		newColor.className = 'lastColor';
	    		newColor.id= value;
	    		newColor.style.background = value;    		
				parent.insertBefore(newColor, child[0]);
				parent.removeChild(child[count]);
				count++;
			}
				else
				{
					count = 0;
				}

			}

		};
	}

colorGen();
