let array = []

function setup() {
  createCanvas(600, 600);
  background('#01002D');
  //head
  ellipse(300, 170, 200, 200);
  //body
  ellipse(300, 400, 200, 300);
  strokeWeight(5);
  stroke(frameCount %360, 75, 100);
  
 
}

function draw() {

  if (mouseIsPressed) {
    //background('#01002D');
    stroke(frameCount %360, 75, 100);

    //mouse movement and symmetry
    x = mouseX;
    y = mouseY;
    px = pmouseX;
    py = pmouseY;
  
    //line(mouseX, mouseY, pmouseX, pmouseY);
  {line(x, y, px, py);
  line(width - x, y, width - px, py);
    array.push([mouseX, mouseY]);}

    frameRate(20); //body color
    //head
    ellipse(300, 170, 200, 200);
    fill(random(225), random (225), random(225))
  //body
  ellipse(300, 400, 200, 300);
  } 
}


function keyTyped(){

if (key === 's'){
// save this image
saveCanvas('MyCreature','png');
} else if (key === 'd') {
  //image display
  background('#01002D');
  //head
ellipse(300, 170, 200, 200);
fill(random(225), random (225), random(225))
//body
ellipse(300, 400, 200, 300);


  beginShape();
  for(let i = 0; i < array.length - 1; i++){
    //line(array [i] [0], array [0] [1], array [i + 1] [0], array [i + 1] [1]);
  curveVertex(array[i][0], array [i][1]);
  }
  endShape();
}

else if (key === 'c') {
  //image displayc
clear();
array = [];
background('#01002D');
//head
ellipse(300, 170, 200, 200);
fill(random(225), random (225), random(225))
//body
ellipse(300, 400, 200, 300);
}
return false;

}