var x=0,y=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(218,160,221);
  
// rect(width/2,height/2,20,20); // sbt
  
  fill(100,0,200); //icini doldurma
  stroke(250,250,255);  // kenar cizgi
  strokeWeight(2); //cizgi boyutu
  translate(width/2,width/2)
  
  for(var i=0;i<=20 ;i+=10){
     for(var a=10; a<=180; a+=18){
  
  ellipse(width/i,y+a,a,a);
  ellipse(width/i,y-a,a,a);
  ellipse(x-a,width/i,a,a);
  ellipse(x+a,width/i,a,a);
    
      y=y-0.25;
      x=x-0.25;

     }
  }
  if(x<0 || y<0){
    y=width/2;
    x=width/2;
  }
     }