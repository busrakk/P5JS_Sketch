var x=0;
var y=0;
var targetx=0;
var targety=0;

function setup() {
 createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  
  var h = map(mouseX,0,width,0,360);
  background(h,100,100);
  // background(50);
  
  fill('#222222');
  ellipse(x,y,40,40);
  fill('rgb(100%,0%,10%)');
  ellipse(x,y,30,30);
  
  var easing=0.15;
  var diffx=targetx-x;
  x+=diffx*easing;
  
  var diffy=mouseY-y;
  y+=diffy*easing;
 
 if ((mouseX <= 200) && (mouseY <= 200)) { //sol üst
    for(var a=20;a<=100;a+=15){
    fill(random(a+20, a+50), random(a+20, a+200),360);
    ellipse(mouseX, mouseY+a, 15, 15);
    ellipse(mouseX+a, mouseY, 15, 15);
    ellipse(mouseX+a, mouseY+a, 15, 15);
    ellipse(mouseX, mouseY, 15, 15);
    
    }
}
   else if ((mouseX > 250) && (mouseY <= 250)) { // sağ üst
    for(var b=20;b<=100;b+=15){
    fill(random(b+20, b+200), random(b, b), 0);
    ellipse(mouseX, mouseY+b, 15, 15);
    ellipse(mouseX-b, mouseY, 15, 15);
    ellipse(mouseX-b, mouseY+b, 15, 15);
    ellipse(mouseX, mouseY, 15, 15); //orta tek
    }
  }
 else if ((mouseX <= 250) && (mouseY > 250)) { // aşağı sol
   for(var c=20;c<=100;c+=15){
    fill(random(-c+40, c-80), random(c, c+120), 30,260);
    ellipse(mouseX, mouseY-c, 15, 15);
    ellipse(mouseX+c, mouseY, 15, 15);
    ellipse(mouseX+c, mouseY-c, 15, 15);
    ellipse(mouseX, mouseY, 15, 15); //orta tek
    }
  }
 else { // aşağı sağ
   for(var d=20;d<=100;d+=15){
    fill(random(d+20, d-50), random(d+100, d),80);
    ellipse(mouseX, mouseY-d, 15, 15);
    ellipse(mouseX-d, mouseY, 15, 15);
    ellipse(mouseX-d, mouseY-d, 15, 15);
    ellipse(mouseX, mouseY, 15, 15); //orta tek
    }
  }
}

function mousePressed(){
  targetx=mouseX;
  targety=mouseY;
}