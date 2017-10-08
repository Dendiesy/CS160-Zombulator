// Zombulator by Joshua Dendauw

var zombieX = 50;
var humanX = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(148, 181, 1);
	ellipse(zombieX, 50, 80, 80);
	fill(0, 150, 200);
	ellipse(humanX, 100, 80, 80);
	zombieX = zombieX + 1;
	humanX = humanX + 3;
	if (zombieX >= 800) {
		zombieX = 0;
	}
	if (humanX >= 800) {
		humanX = 0;
	}
}