var img;
var back;
var back1;
var flower;
var r=8;
var x = new Array(1000);
var y = new Array(1000);
var speed = new Array(1000);

var x1 = new Array(1000);
var y1 = new Array(1000);
var speed1 = 1;
var mode = 1;

function preload() {
  img = loadImage("img.png");
  back = loadImage("background.jpg");
  back1 = loadImage("background1.jpg");
  flower = loadImage("flower.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  for (var i=0; i<1000; i++) {
    x[i] = random(width);
    y[i] = random(-2000, -1000);
    x1[i] = random(width);
    y1[i] = random(-2000, -1000);
    speed[i] = random(3, 5);
  }
}

function draw() {
  imageMode(CORNER);
  if(mode==1) {
  image(back,0,0);
  }
  else if(mode == -1) {
  image(back1,0,0);  
  }
  imageMode(CENTER);
  image(img, mouseX, height-180);  
  noStroke();
  for (var j=0; j<1000; j++) {
    for (var i=2; i<r; i++) {
      y[j] += speed[j];
      y1[j] += speed1;
      if (mode==1) {
        fill(50,100,100);
        ellipse(x[j], y[j]+i*4, i*2, i*2);
      } 
      if (mode==-1) {
        image(flower,x1[j],y1[j]);
      }
      if (y[j]>height + r*4) {
        y[j]=random(-2000, -1000);
      }
       if (y1[j]>height + r*4) {
        y1[j]=random(-2000, -1000);
      }
      if (y[j]>height-370 && x[j]>mouseX-110 && x[j]<mouseX+110) {
        y[j]=random(-2000, -1000);
      }
      if (y1[j]>height-370 && x1[j]>mouseX-110 && x1[j]<mouseX+110) {
        y1[j]=random(-2000, -1000);
      }
    }
  }
}

function keyPressed() {
  mode *= -1;
}
