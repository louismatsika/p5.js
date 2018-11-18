
var cir = {
  x: 0,
  y: 0,
  diameter: 0,

};
var col = {
  r: 0,
  g: 0,
  b: 0,
  a: 0,

};

function setup() {
  createCanvas(600, 400);
  background(0, 0, 0);
}

function draw() {

  cir.x = random(0, width);
  cir.y = random(0, height);
  cir.diameter = random(0, 120);

  col.r = random(0, 255);
  col.g = map(mouseX, 0, width, 0, 255);
  col.b = random(0, 255);
  col.a = random(0, 255);

  noStroke();
  fill(col.r, col.g, col.b, col.a);
  ellipse(cir.x, cir.y, cir.diameter);



}
