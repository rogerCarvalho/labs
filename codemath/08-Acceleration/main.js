// include lib/vector.js lib
// include lib/particle.js lib
window.onload = function(){
	var canvas = document.getElementById("canvas")
		,context = canvas.getContext("2d")
		,width = canvas.width = window.innerWidth
		,height = canvas.height = window.innerHeight
		;

	// PARTE 01
	/*var p = particle.create(width/2,height,10, - Math.PI/2)
		, accel = vector.create(0.1, 0.1);
	;

	update();

	function update(){
		context.clearRect(0, 0, width, height);

		p.accelerate(accel);
		p.update();
		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI*2, false);
		context.fill();

		requestAnimationFrame(update);
	}*/

	// Parte 02
	var particles = []
		, numParticles = 100
		;


	for(var i=0; i< numParticles; i++){
		particles.push(particle.create(width/2, height/2, Math.random()*5+2, Math.random()*Math.PI*2, .1));
	}

	update();

	function update(){
		context.clearRect(0, 0, width, height);


		for(var i=0; i< numParticles; i++){
			var p = particles[i];

			
			p.update();
			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI*2, false);
			context.fill();

		}
		requestAnimationFrame(update);
	}

}