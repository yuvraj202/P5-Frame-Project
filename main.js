function preload()
{
    
}
function setup()
{
    Canvas=createCanvas(1000,700);
    Canvas.position(350,180);
    Video=createCapture(VIDEO);
    Video.hide();
}
function draw()
{
    image(Video,330,230,300,300);

    fill(255,0,0);
    stroke(255,0,0);
    circle(220,210,80)
    
    fill(255,0,0);
    stroke(255,0,0);
    rect(250,200,460,20)
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(740,210,80)
    
    fill(255,0,0);
    stroke(255,0,0);
    rect(730,179,20,400)
    
    fill(255,0,0);
    stroke(255,0,0);
    rect(210,179,20,400)
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(220,540,80)
    
    fill(255,0,0);
    stroke(255,0,0);
    rect(250,540,460,20)
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(740,540,80)
}

function take_snapshot()
{
    save("Pick 1.png");
}






