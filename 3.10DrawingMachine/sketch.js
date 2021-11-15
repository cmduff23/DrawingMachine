let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(600, 600);
  background(163, 105, 182);
 
}

function draw() {
 
    background(163, 105, 182, 5);
    strokeWeight(strokeWidth);

noiseOffset = noiseOffset + 0.05;
strokeWidth = noise(noiseOffset) * 20;


    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    //array.push([mouseX, mouseY]);

}

function keyTyped(){

if (key === 's'){
// save this image
saveCanvas('fileName','png');
} else if (key === 'c'){
  //image clear
 clear();
 
return false;
}
}