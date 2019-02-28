angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;
var scaleF = 2.6;//scale factor
var posX = width/2;

var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function() {
    //draw sun rays
    for(var i = 0; i < 360; i+= 30){
        pushMatrix();
        translate(200,200);
        rotate(i);
        drawSunRay();
        popMatrix();
    }
    
    //draw center of sun
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(posX, posX, sunDiameter, sunDiameter);
};

//draw background
background(backgroundColor);

//draw sun
pushMatrix();
translate(200 - posX*scaleF, 200 - posX*scaleF );
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(235,254);
drawCloud();
popMatrix();
