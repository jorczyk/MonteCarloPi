const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;
const center = new Point(canvasWidth/2, canvasHeight/2);
const side = 500;
const radius= side/2;

const boundaries = new Boundaries(side, side, center);
const smartPoints = []
const piValues = []
const numberOfPoints = 40000;
console.log(boundaries)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  setStyleForText();
  drawText();
  setStyleForBackgound();
  rect(center.x-side/2, center.y-side/2, side, side);
  ellipse(center.x, center.y, side, side);
  if(smartPoints.length < numberOfPoints) {
    getNextPoint();
  }
  drawPoints(smartPoints);

}


function getNextPoint() {
  var dumbPoint = getRandomPoint(boundaries);
  var smartPoint = new SmartPoint(dumbPoint, center, radius);
  smartPoints.push(smartPoint);
}

function drawText() {
  textSize(32);
  text('Estimated pi value: ', 10, 30);
  text(calculatePi(smartPoints), 10, 80);
  text('"Real" pi value: ', 10, 130);
  text('3.14159265358979323846264338327950288419716939937510582097', 10, 180);
  text('Iterations: ', 10, 230);
  text(smartPoints.length, 10, 280);
}

function drawPoints(points) {
  // console.log(points.length)

  for (let i = 0; i < points.length; i++) {
    var point = points[i];
    if(point.isInside) {
      setStyleForInsidePoints();
    } else {
      setStyleForOutsidePoints();
    }
    rect(point.x, point.y, point.side, point.side);
  } 
}

function calculatePi(smartPoints) {
  var insideNumber = smartPoints.filter(point => typeof point.isInside !== "undefined" && point.isInside).length;
  var value = (insideNumber*4)/smartPoints.length;
  piValues.push(value);
  return value
}

function setStyleForBackgound() {
  var c = color(255, 255, 255);
  fill(c);
  stroke(0);
}

function setStyleForText() {
  var c = color(0, 0, 0);
  fill(c);
  noStroke();
}

function setStyleForOutsidePoints() {
  var c = color(235, 52, 97);
  fill(c);
  noStroke();
}

function setStyleForInsidePoints() {
  var c = color(52, 235, 150);
  fill(c);
  noStroke();
}