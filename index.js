let animationRunning = true;

let cube = document.querySelector(".cube");
let cube2 = document.querySelector(".cube2");
let container = document.querySelector("#content-container");
let navbar = document.querySelector("nav");
/* let navButtons = document.querySelector(".btn-"); */
let isMouseOver = false;

let section_top = document.getElementById("sectiontop");
let section_bottom = document.getElementById("sectionbottom");
let section_front = document.getElementById("sectionfront");
let section_back = document.getElementById("sectionback");
let section_right = document.getElementById("sectionright");
let section_left = document.getElementById("sectionleft");

/* cube.classList.add("rotate");
 */
let x_axis = 0;
let y_axis = 0;
let x_axis2 = 0;
let y_axis2 = 0;

let btn_top = document.querySelector("#btn-top");
let btn_bottom = document.querySelector("#btn-bottom");
let btn_front = document.querySelector("#btn-front");
let btn_back = document.querySelector("#btn-back");
let btn_right = document.querySelector("#btn-right");
let btn_left = document.querySelector("#btn-left");

let activeButton = btn_top;
let visibleSection = section_top;
let cubeColor = "plain";
const scaleOnHover = "scale(1.2) ";
const cubeTransition = "transform 1s";
const showTop = scaleOnHover + "rotateY(" + 20 + "deg) rotateX(" + -90 + "deg)";
const showBottom = scaleOnHover + "rotateY(" + -7 + "deg) rotateX(" + 95 + "deg)";
const showFront = scaleOnHover + "rotateY(" + 10 + "deg) rotateX(" + 10 + "deg)";
const showBack = scaleOnHover + "rotateY(" + 350 + "deg) rotateX(" + 180 + "deg)";
const showRight = scaleOnHover + "rotateY(" + -95 + "deg) rotateX(" + 10 + "deg)";
const showLeft = scaleOnHover + "rotateY(" + 95 + "deg) rotateX(" + 10 + "deg)";

/* window.setInterval(() => {
	// updateUI();
	//animate();
}, 1000 / 60); */
/* 
function repeatOften() {
	animate();
	globalID = requestAnimationFrame(repeatOften);
}

let globalID = requestAnimationFrame(repeatOften);
 */
/* function animate() {
	if (animationRunning) {
		cube.style.transform = "rotateY(" + x_axis + "deg) rotateX(" + y_axis + "deg)";
		x_axis += 0.05;
		y_axis += 0.05;
	}
	cube2.style.transform = "rotateY(" + x_axis2 + "deg) rotateX(" + y_axis2 + "deg)";
	x_axis2 += 0.05;
	y_axis2 += 0.05;
} */

function selectSection(section) {
	console.log("🧿 ~ selectSection ~ section", section);
	if (section) {
		/* visibleSection.classList.add("hidden"); */
		/* section.classList.remove("hidden"); */
		/* visibleSection = section; */
		if (visibleSection) visibleSection.style.display = "none";
		section.style.display = "flex";
		visibleSection = section;
	}
}
/* INITIALIZE FIST SECTION */
selectSection(visibleSection);
/* ======================= */
function resetCube() {
	animationRunning = true;
	cube.style.transition = "transform 0.51s";
	cube.style.transform = "scale(1.0)";
	tintCube(cubeColor);
	/* x_axis = 0.0;
	y_axis = 0.0; */

	container.classList.remove("hidden");
	document.querySelector("#wraper").classList.remove("focus");
}
function mouseOver() {
	container.classList.add("hidden");
	document.querySelector("#wraper").classList.add("focus");
}
navbar.onmouseover = function () {
	/* container.classList.add("hidden");
	document.querySelector("#wraper").classList.add("focus"); */
};
navbar.onmouseleave = function () {
	/* container.classList.remove("hidden");
	document.querySelector("#wraper").classList.remove("focus"); */
};

function selectMenuItem(item) {
	activeButton.classList.remove("active");
	item.classList.add("active");
	activeButton = item;
}

function cubeMenuAction(cube_side) {
	animationRunning = false;
	cube.style.transition = cubeTransition;
	mouseOver();
	switch (cube_side) {
		case "top":
			cube.style.transform = showTop;
			tintCube("plain");

			break;
		case "bottom":
			cube.style.transform = showBottom;
			tintCube("purple");

			break;
		case "front":
			cube.style.transform = showFront;
			tintCube("blue");

			break;
		case "back":
			cube.style.transform = showBack;
			tintCube("green");

			break;
		case "right":
			cube.style.transform = showRight;
			tintCube("yellow");

			break;
		case "left":
			cube.style.transform = showLeft;
			tintCube("red");

			break;
		default:
			console.log("Sorry, no such cube side " + cube_side + ".");
	}
}

function tintCube(color) {
	cube2.querySelectorAll(".face").forEach((element) => {
		element.classList.remove(element.className.split(" ")[3]);
		element.classList.add(color);
	});
}

// let btn_top = document.querySelector("#btn-top");
btn_top.onclick = function () {
	selectMenuItem(this);
	selectSection(section_top);
	cubeColor = "plain";
	resetCube();
};
btn_top.onmouseover = function () {
	cubeMenuAction("top");
};
btn_top.onmouseleave = function () {
	resetCube();
};

// let btn_bottom = document.querySelector("#btn-bottom");
btn_bottom.onclick = function () {
	selectMenuItem(this);
	selectSection(section_bottom);
	cubeColor = "purple";
	resetCube();
};
btn_bottom.onmouseover = function () {
	cubeMenuAction("bottom");
};
btn_bottom.onmouseleave = function () {
	resetCube();
};

// let btn_front = document.querySelector("#btn-front");
btn_front.onclick = function () {
	selectMenuItem(this);
	selectSection(section_front);
	cubeColor = "blue";
	resetCube();
};
btn_front.onmouseover = function () {
	cubeMenuAction("front");
};
btn_front.onmouseleave = function () {
	resetCube();
};

// let btn_back = document.querySelector("#btn-back");
btn_back.onclick = function () {
	selectMenuItem(this);
	selectSection(section_back);
	cubeColor = "green";
	resetCube();
};
btn_back.onmouseover = function () {
	cubeMenuAction("back");
};
btn_back.onmouseleave = function () {
	resetCube();
};

// let btn_right = document.querySelector("#btn-right");
btn_right.onclick = function () {
	selectMenuItem(this);
	selectSection(section_right);
	cubeColor = "yellow";
	resetCube();
};
btn_right.onmouseover = function () {
	cubeMenuAction("right");
};
btn_right.onmouseleave = function () {
	resetCube();
};

// let btn_left = document.querySelector("#btn-left");
btn_left.onclick = function () {
	selectMenuItem(this);
	selectSection(section_left);
	cubeColor = "red";
	resetCube();
};
btn_left.onmouseover = function () {
	cubeMenuAction("left");
};
btn_left.onmouseleave = function () {
	resetCube();
};
