const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var myengine,myworld;
var ground,rope,superhero;
var b=[],b1=[],b2=[]
var bgimage,monster,rope1

function preload(){
  bgimage=loadImage("gamingbackground2.png")
}
function setup (){
  createCanvas(1200,800)
  myengine=Engine.create()
  myworld=myengine.world

  

 for(var i=740;i>380;i=i-60){
   b.push(new Block(560,i,60,60))
 }

 for(var i=740;i>280;i=i-60){
   b1.push(new Block(640,i,60,60))
 }

 for(var i=740;i>180;i=i-60){
  b2.push(new Block(720,i,60,60))
} 

monster=new Monster(900,400)
rope1=new Rope(monster.body,{x:900,y:50})
ground=new Ground(600,780,1200,20)
  superhero=new Superhero(400,400,40)
  rope=new Rope(superhero.body,{x:400,y:50})
   
 
}
function draw(){
  Engine.update(myengine)
  background(bgimage)
  monster.display()
  rope1.display()
  ground.display()
  superhero.display()
  rope.display()
  
  
   
  for(var j=0;j<b.length;j=j+1){
    b[j].display()
  }

  for(var j=0;j<b1.length;j=j+1){
    b1[j].display()
  }
  for(var j=0;j<b2.length;j=j+1){
    b2[j].display()
  }
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}