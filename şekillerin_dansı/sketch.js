//rotate()
//translate()


let angle = 1.2;
let theta;
function setup() {
  createCanvas(400, 400,WEBGL);
  //createCanvas(windowWidth,windowHeight);
   strokeWeight(1.5);
   song = loadSound('music.mp3');
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
  
}

function draw() {
  background(0);
  
  //image(img, -250, 100);
  
  translate(0,-50,-50);
  push();
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.09);
  torus(50, 30);
  pop();
  rotate(angle);
  noFill()
  stroke(random(255),random(255),random(255))
  
  translate(-150,-50,-50);
  push();
  rotateZ(frameCount * 0.09);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.09);
  torus(40, mouseY);
  pop();
  rotate(angle);
  noFill()
  stroke('PURPLE')
  
  translate(200,20,20);
  push();
  rotateZ(frameCount * 0.09);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  torus(50,40);
  pop();
  rotate(angle);
  noFill()
  stroke('green')
  
  translate(-250,-50,100);
  push();
  rotateZ(frameCount * 0.09);
  rotateX(frameCount * 0.09);
  rotateY(frameCount * 0.1);
  torus(50,40);
  pop();
  rotate(angle);
  noFill()
  stroke('orange')

  
  translate(180,20,20);
  push();
  rotateZ(frameCount * 0.07);
  rotateX(frameCount * 0.09);
  rotateY(frameCount * 0.1);
  torus(60,40);
  pop();
  rotate(angle);
  noFill()
  stroke('pink')
  
  translate(130,150,-300);
  push();
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.09);
  torus(60,40);
  pop();
  rotate(angle);
  noFill()
  stroke('red')
  
  translate(-300,120,80);
  push();
  rotateZ(frameCount * 0.09);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  torus(60,40);
  pop();
  rotate(angle);
  noFill()
  stroke(100,100,200,300)
  
}
