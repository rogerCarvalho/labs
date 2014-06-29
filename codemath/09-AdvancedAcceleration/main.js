// include lib/vector.js lib
// include lib/particle.js lib
window.onload = function(){
	var canvas = document.getElementById("canvas")
		,context = canvas.getContext("2d")
		,width = canvas.width = window.innerWidth
		,height = canvas.height = window.innerHeight
		;

	
	var ship = particle.create(width/2, height/2, 0, 0)
		, thrust = vector.create(0, 0)
		;


	update();

	document.body.addEventListener("keydown", function(event){
		switch(event.keyCode){
			case 38: // up
				thrust.setY(-0.1);
				break;

			case 40: // down
				thrust.setY(0.1);
				break;

			case 37: // left
				thrust.setX(-0.1);
				break;

			case 39: // down
				thrust.setX(0.1);
				break;

			default:
				break;
		}
	});

	document.body.addEventListener("keyup", function(event){
		switch(event.keyCode){
			case 38: // up
				thrust.setY(0);
				break;

			case 40: // down
				thrust.setY(0);
				break;

			case 37: // left
				thrust.setX(0);
				break;

			case 39: // down
				thrust.setX(0);
				break;

			default:
				break;
		}
	});

	function update(){
		context.clearRect(0, 0, width, height);

		ship.accelerate(thrust);
		ship.update();

		context.beginPath();
		context.arc(ship.position.getX(), ship.position.getY(), 10, Math.PI*2, false);
		context.fill();
		
		

		requestAnimationFrame(update);
	}

}