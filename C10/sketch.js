
var trex ,trex_running,edges,ground_img;
function preload(){
trex_running=loadAnimation('trex1.png','trex3.png','trex4.png')
ground_img=loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,50,50)
trex.addAnimation('running',trex_running)
trex.scale=0.5
edges=createEdgeSprites()
ground=createSprite(200,180,400,20)
ground.addImage('ground',ground_img)
  //create a trex sprite
}

function draw(){
  background("black")
  ground.velocityX=-2
  console.log(trex.y) 
  if(ground.x<0){
ground.x=ground.width/2



  }
  



if(keyDown('space')){
trex.velocityY=-10
}
trex.velocityY=trex.velocityY+0.5        
trex.collide(ground)
//trex.collide(edges[2])


  drawSprites()
  

}
