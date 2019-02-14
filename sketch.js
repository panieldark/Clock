function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(8);
  noFill();

  //seconds arc
  let endSec = map(sec, 0, 60, 0, 360);
  stroke(250,6,130);
  arc(0,0,300,300,0,endSec);

  //seconds ticker
  push(); //necessary to reset rotation and stroke
  rotate(endSec);
  stroke(250,6,130);
  line(0,0,100,0);
  pop();

  //minutes arc
  let endMin = map(min, 0, 60, 0, 360);
  stroke(0,63,250);
  arc(0,0,280,280,0,endMin);

  //minutes ticker
  push(); //necessary to reset rotation and stroke
  rotate(endMin);
  stroke(0,63,250);
  line(0,0,75,0);
  pop();

  let endHour = map(hr % 12, 0, 12, 0, 360);
  stroke(6,250,80);
  arc(0,0, 260, 260, 0, endHour)

  //hours ticker
  push(); //necessary to reset rotation and stroke
  rotate(endHour);
  stroke(6,250,80);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);
}
