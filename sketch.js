 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;
 
 var score;

 var again, ground, over, player, star;
 var againImg, groundImg, overImg, playerImg, starImg;

 var enemy, monster, bullet, fire;
 var enemiesGroup, enemyImg, monsterImg, monstersGroup, bulletImg, fireImg;
 
 function preload(){
 
  groundImg = loadImage("ground.jpeg");
  enemyImg = loadImage("enemy.png");
  monsterImg = loadImage("monster.png");
  againImg = loadImage("again.png");
  overImg = loadImage("over.png");
  playerImg = loadImage("player.png");
  starImg = loadImage("star.png");
  bulletImg = loadImage("bullet.png");
  fireImg = loadImage("fire.png");


 }

 function setup() {
 createCanvas(1145,550);

 ground = createSprite(500,200,20,20);
 ground.addImage("ground",groundImg);
 ground.scale = 2;

 player = createSprite(550,450,20,20);
 player.addImage("player",playerImg);
 player.scale=0.4;

 over = createSprite(550,300,20,20);
 over.addImage("over",overImg);
 over.scale=1.4;
 over.visible=false;

 again = createSprite(350,250,20,20);
 again.addImage("again",againImg);
 again.scale=1.5;
 again.visible=false;

 


enemiesGroup=new Group();

 }

 function draw() {
 background(0);

 if(gameState === PLAY){

 ground.velocityY = 3;

 if (ground.y > 400){
 ground.y = ground.height/2;
 }

 player.x = World.mouseX;

 if (keyDown("space")) {
    createBullet();
    
  }

  
 }
 
 spawnEnemies();
 drawSprites();
 }

 function spawnEnemies() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var enemy = createSprite(500,300,40,10);
      enemy.y = Math.round(random(100,220));
      enemy.addImage(enemyImg);
      enemy.scale = 0.5;
      enemy.velocityY = 3;
      
       //assign lifetime to the variable
      enemy.lifetime = 300;
      
      //adjust the depth
      enemy.depth = player.depth;
      enemy.depth = player.depth+1;
      
      //add each cloud to the group
     enemiesGroup.add(enemy);
    }
    
  }
 

 function createBullet(){
    var bullet= createSprite(500, 100, 60, 10);
    bullet.addImage(bulletImg);
    bullet.y = 360;
    bullet.x=player.x;
    bullet.velocityY = -4;
    bullet.lifetime = 100;
    bullet.scale = 0.3;
 }

 function enemy(){
    var enemy = createSprite(0,Math.round(random(20, 370)), 10, 10);
    enemy.addImage(enemyImg);
    enemy.velocityY = 3;
    enemy.lifetime = 150;
    enemy.scale = 0.1;

 }