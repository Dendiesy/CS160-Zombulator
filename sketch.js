// Zombulator by Joshua Dendauw

var zombieY = 50;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieSize = 40;
var zombieColor;
var humanY = 50;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.8;
var humanSize = 40;
var humanColor;
var backgroundColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(0, 75, 95);
	zombieColor = color(50, 255, 120);
	humanColor = color(50, 120, 255);
}

function draw() {
	background(backgroundColor);
	noStroke();
	fill(zombieColor);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;
	if (zombieY + (zombieSize / 2) >= windowHeight) {
		zombieY = windowHeight - (zombieSize / 2);
		zombieV *= zombieDamping;
	}
	fill(humanColor);
	ellipse(windowWidth / 3, humanY, humanSize, humanSize);
	humanY += humanV;
	humanV += humanA;
	if (humanY + (humanSize / 2) >= windowHeight) {
		humanY = windowHeight - (humanSize / 2);
		humanV *= humanDamping;
	}
}