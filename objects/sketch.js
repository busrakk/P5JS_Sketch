let s1, s2,s3,s4,s5,s6,s7,s8,s9,s10;

let gravity = 9.0;
let mass = 2.0;

function setup() {
  createCanvas(720, 400);
  fill('purple');
  // Inputs: x, y, mass, gravity
  
  s1 = new Spring2D(0.0, width /4, mass, gravity);
  s2 = new Spring2D(0.0, width / 4, mass, gravity);
  s3 = new Spring2D(0.0, width / 4, mass, gravity);
  s4 = new Spring2D(0.0, width / 4, mass, gravity);
  s5 = new Spring2D(0.0, width / 4, mass, gravity);
  s6 = new Spring2D(0.0, width / 4, mass, gravity);
  s7 = new Spring2D(0.0, width / 4, mass, gravity);
  s8 = new Spring2D(0.0, width /4, mass, gravity);
  s9 = new Spring2D(0.0, width / 4, mass, gravity);
  s10 = new Spring2D(0.0, width / 4, mass, gravity);
}

function draw() {
  background(0);
  
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  fill('purple');
  
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);

  s3.update(s2.x, s2.y);
  s3.display(s2.x, s2.y);
  
  s4.update(s3.x, s3.y);
  s4.display(s3.x, s3.y);
  
  s5.update(s4.x, s4.y);
  s5.display(s4.x, s4.y);
  
  s6.update(s5.x, s5.y);
  s6.display(s5.x, s5.y);
  
  s7.update(s6.x, s6.y);
  s7.display(s6.x, s6.y);
  
  s8.update(s7.x, s7.y);
  s8.display(s7.x, s7.y);
  
  s9.update(s8.x, s8.y);
  s9.display(s8.x, s8.y);
  
  s10.update(s9, s9);
  s10.display(s9, s9);
  //fill('white');

}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 100;
  this.stiffness =0.7;
  this.damping = 0.25;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    strokeWeight(4);
    stroke('pink');
    ellipse(this.x, this.y, 40, 40);
    
    strokeWeight(1);
    stroke('pink');
    
    for(var i=-300 ; i<=300 ;i+=100){
      for(var j=-300; j<=300 ; j+=100){
    line(this.x, this.y, i*nx, j*ny);
      }
    }
 
  }
}