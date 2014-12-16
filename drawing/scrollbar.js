var drawScrollBar = function(canvas, context, scrollPosition, maxScroll){
	var height = 400;
	var width = 20;
	var distanceFromTop = 100;
	
	context.strokeStyle=staveColour;
	context.rect(canvas.width - width, distanceFromTop, width, height);
	context.stroke();
	context.beginPath();
	
	context.strokeStyle=noteColour;
	context.lineWidth =4;
	context.moveTo(canvas.width - width, scrollPosition * height / maxScroll + distanceFromTop);
	context.lineTo(canvas.width, scrollPosition * height / maxScroll + distanceFromTop); 
	context.stroke();
	context.lineWidth = 1;
}
