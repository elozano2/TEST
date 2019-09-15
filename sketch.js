function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      fill(0);   // Black
    }
    else if (mouseButton == RIGHT) {
      fill(255); // White
    }
  }
  else {
    fill(126);   // Gray
  }
  rect(40, 20, 40, 60);
}