var frameCount = 0;
var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;

startAnimating(60);

function startAnimating(fps) {
	fpsInterval = 1000 / fps;
	then = Date.now();
	startTime = then;
	/* console.log(startTime); */
	animate();
}

function animate() {
	// request another frame

	requestAnimationFrame(animate);

	// calc elapsed time since the last loop

	now = Date.now();
	elapsed = now - then;

	// if enough time has elapsed, draw the next frame

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);

		// draw animating object

		if (animationRunning) {
			cube.style.transform = "rotateY(" + x_axis + "deg) rotateX(" + y_axis + "deg)";
			x_axis += 0.05;
			y_axis += 0.05;
		}
		cube2.style.transform = "rotateY(" + x_axis2 + "deg) rotateX(" + y_axis2 + "deg)";
		x_axis2 += 0.05;
		y_axis2 += 0.05;

		// below code is used for testing, whether
		// the frame is animating at the specified fps

		var sinceStart = now - startTime;
		var currentFps = Math.round((1000 / (sinceStart / ++frameCount)) * 100) / 100;

		/* $results.text("Elapsed time= " + Math.round((sinceStart / 1000) * 100) / 100 + " secs @ " + currentFps + " fps."); */
	}
}
