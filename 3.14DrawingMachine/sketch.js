let array = []

function setup() {
  createCanvas(600, 600);
  background('#50006B');

  strokeWeight(5);
  drawGrid();
  noFill();
 
}

function draw() {
  if (mouseIsPressed) {
    //background('#9054A4');
    stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  } 
}

function keyTyped(){

if (key === 's'){
// save this image
saveCanvas('fileName','png');
} else if (key === 'd'){
  //image display

  beginShape();
  for(let i = 0; i < array.length - 1; i++){
    //line(array [i] [0], array [0] [1], array [i + 1] [0], array [i + 1] [1]);
  curveVertex(array[i][0], array [i][1])
  }
  endShape();
}
return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = 200
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}