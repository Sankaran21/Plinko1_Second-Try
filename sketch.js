var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800,800);
 
  
 engine=Engine.create();
 world=engine.world;

for(var k=0; k <=width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j =75;j <=width;j=j+50)
{
plinkos.push(new plinko(j,75));
}

for(var j=50; j <=width-10; j=j+50)
{
plinkos.push(new plinko(j,175));
}

for(var j =75;j <=width;j=j+50)
{
plinkos.push(new plinko(j,275));
}

for(var j =50;j <=width-10;j=j+50)
{
plinkos.push(new plinko(j,375));
}



  ground=new Ground(400,790,800,20);
  
}

function draw() {
  background("black");  
 textSize(20);
 text("Score: "+score,20,30);

 Engine.update(engine);
 ground.display();


  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
    score++;
    }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
divisions[k].display();
}
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
 
}