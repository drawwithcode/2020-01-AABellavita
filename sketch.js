tripgoing = true;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  translate(width/2,height/2);

  let angle = sin(frameCount) * 300;
  let rotateV = 200*cos(frameCount*0.5);

  background(0,20);

  strokeWeight(1.5);
  colorMode(HSB, 100);
  noFill();

  push()
    textSize(25);
    textAlign(CENTER);
    textFont('sans-serif');
    fill(255);
    text('Move the cursor to change colors,\nclick to stop it or make it move again', -750, 0);
  pop()

  push()
    textSize(25);
    textAlign(CENTER);
    textFont('sans-serif');
    fill(255);
    text('Press S to save a picture', +750, 0);
  pop()

  push();

  rotate(rotateV);

  stroke(100*mouseX/windowWidth, 100, 100);
    polygon(0,0,angle-300,6);
    polygon(0,0,angle-150,3);
    polygon2(0,0,angle+150,6);
    polygon2(0,0,angle,3);

  stroke(100*mouseY/windowHeight, 100, 100);
    polygon(0,0,angle+150,3);
    polygon2(0,0,angle+225,3);
    ellipse(0,0,angle-600);
    ellipse(0,0,angle-300);
    ellipse(0,0,angle-900);

  pop();

}

function polygon(x, y, radius, npoints) {
  var angleS = 360 / npoints;
  beginShape();
  for (var a = 0; a < 360; a += angleS) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function polygon2(x, y, radius, npoints) {
  var angleS = 360 / npoints;
  beginShape();
  for (var a = 0; a < 360; a += angleS) {
    var sx = x - cos(a) * radius;
    var sy = y - sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  if (tripgoing == true) {
    tripgoing = false;
    frameRate(0);
  } else if (tripgoing == false){
    frameRate(30);
    tripgoing = true;
  }
}

function keyTyped() {
  if (key == 's' || key == 'S') {
    save('Trip.png');
  }
}
