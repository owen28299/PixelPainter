//adding color picker

function colorGen(){

	var input = document.createElement('input');
	input.type = 'color';
	input.value = '#33cccc';

	document.getElementById('colorpicker').appendChild(input);
	input.style.width = '100px';
	input.style.height = '28px';

	var count = 0;

	input.onchange = function() {
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
				child[count].style.background= value;
				count++;
				console.log('the count is: ', count);
			}
				else
				{
					count = 0;
				}

			}

		};
	}

colorGen();
