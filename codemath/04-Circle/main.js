window.onload = function(){
	var canvas = document.getElementById("canvas")
		,context = canvas.getContext("2d")
		,width = canvas.width = window.innerWidth
		,height = canvas.height = window.innerHeight
		;

	

	// ANIMATION
	/*
	var centerY = height * .5
		, centerX = width * .5
		, xRadius = 400
		, yRadius = 200
		, xangle = 0
		, yangle = 0
		, xspeed = .1
		, yspeed = .131
		, x, y
		;

		render();



	function render(){
		context.clearRect(0, 0, width, height);
		x = centerX + Math.cos(xangle) * xRadius;
		y = centerY + Math.sin(yangle) * yRadius;

		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI*2, false);
		context.fill();

		xangle += xspeed;
		yangle += yspeed;

		requestAnimationFrame(render);
	}*/


	var centerY = height * .5
		, centerX = width * .5
		, radius = 200
		, angle = 0
		, numObjects = 40
		, slice = Math.PI * 2 / numObjects
		, x, y
		;

		



	for (var i = 0; i < numObjects; i++) {
		angle = i *slice;
		x = centerX + Math.cos(angle) * radius;
		y = centerY + Math.sin(angle) * radius;
		context.beginPath();
		context.arc(x,y, 10, 0, Math.PI*2, false);
		context.fill();
	};

}