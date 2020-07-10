let angle=0;
let totalPts =500;
let steps = totalPts +100;

function setup() {
  createCanvas(500, 500);
  background(0);
  colorMode(HSB,255,255,255,200);
}

function draw() {
      //background(0)
    
translate(width/2,height/2);
  
  let x=random(-10,30);
  let y=random(-10,30);
  
  let px=mouseX;
  let py=mouseY;
  
let hue=random(0,255);
 
    for (let i=0;i<steps;i+=0.4){
    
      
      rotate(60);
  
      strokeWeight(10);
      push();
      scale(-1,1);
      fill(hue,255,255,255);
      triangle(x,y,y,x, px, py);
     //pop();
      point((width / 2) * i, (height / 2) * i);
      pop();
      
      
      push();
      strokeWeight(100);
      scale(-100,100);
      rotate(100);
      point((width / steps) * i, (height / steps) * i + random(px, py));
      pop();
    }

  }
