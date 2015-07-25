$(document).ready(function(){


	$container = $('#container');
createGrids(16);
	

	$container.on('mouseenter','.grid',function(){
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css({'backgroundColor':hue});
	});

	$('#clearButton').on('click',function(){

		//$(this).next().find('.grid').removeClass('highlighted');
	var gridNumber = prompt("Enter grind size", "16");
	$container.empty();
	createGrids(gridNumber);
});


});

var createGrids = function(gridNumber){

for(var i=0; i<gridNumber*gridNumber; i++){

	$container.append('<div class="grid"></div>');
	$container.find('.grid').css({'height':(480-(gridNumber*2))/gridNumber + 'px','width':(480-gridNumber*2)/gridNumber + 'px'});
	}

}