var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["63707277-5cbd-4343-80ec-f51954cc72e5","31c6f68d-a331-45e2-aaf9-a0fb4061922c"],"propsByKey":{"63707277-5cbd-4343-80ec-f51954cc72e5":{"name":"red striker","sourceUrl":null,"frameSize":{"x":228,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"ylniuKVuAJf3WAtCK5gCg7ZjxxX.ahWb","loadedFromSource":true,"saved":true,"sourceSize":{"x":228,"y":225},"rootRelativePath":"assets/63707277-5cbd-4343-80ec-f51954cc72e5.png"},"31c6f68d-a331-45e2-aaf9-a0fb4061922c":{"name":"golfball","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1=createSprite(200,28,200,20);
goal1.shapeColor="yellow";
var goal2=createSprite(200,372,200,20)
 goal2.shapeColor="yellow";
var playermallet = createSprite(184,350,60,15);
playermallet.setAnimation("red striker");
playermallet.scale=0.3
playermallet.shapeColor="black";
var compmallet=createSprite(189,47,60,15);
compmallet.shapeColor="black";
compmallet.setAnimation("red striker");
compmallet.scale=0.3
var ball=createSprite(200,200,20,20);
ball.setAnimation("golfball");
ball.scale=0.1
 var wall1,wall2,wall3,wall4,wall5,wall6
 wall1=createSprite(380,200,10,400)
 wall1.shapeColor="white"
 wall2=createSprite(20,200,10,400)
 wall2.shapeColor="white"
 wall3=createSprite(200,380,400,10)
 wall3.shapeColor="white"
 wall4=createSprite(200,20,400,10)
 wall4.shapeColor="white"
 wall5=createSprite(200,125,400,10)
 wall5.shapeColor="white"
 wall6=createSprite(200,275,400,10);
 wall6.shapeColor="white";
var compscore=0;
var playerscore=0;
var gameState="serve";
function draw(){ 
  background("green");

  if (keyDown("enter")&&(gameState="serve")){
    ball.velocityY=3;
    ball.velocityX=4;
    gameState="play";
  }
   if (ball.bounceOff(goal1)) {
        playerscore=playerscore+1;
        ball.x=200;
        ball.y=200;
         gameState="serve";
      }
      if (ball.bounceOff(goal2)) {
        compscore=compscore+1;
        ball.x=200;
        ball.y=200;
       ball.velocityY=0;
       ball.velocityX=0;
       gameState="serve";
      }
  if (gameState==="serve") {
    textSize(18);
    
  fill("white");
      text("Press enter to serve",202,158);
  }
    if(gameState=="play"){
    
    fill("white");
    textSize(25);
    text(compscore,50,190);
    text(playerscore,50,230);
  } 
   if(gameState=="over" && keyDown("r")){
    
    compscore = 0;
    playerscore = 0;
    gameState="serve";
  }
 compmallet.x=ball.x;
stroke("blue");
textSize(17);
text("Computer:"+compscore, 32, 177);
stroke("blue");
textSize(17);
text("You:"+playerscore, 32, 197);

   if(gameState=="over"){
    fill("white");
    textSize(30);
    text("U LOSE!Game Over",120,150);
    textSize(20)
    text("Press r to Restart",75,250);
    
  }
 if (ball.isTouching(playermallet)||ball.isTouching(compmallet)) 
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3");
 
  if (compscore==5||playerscore==5){
  gameState="over";
  }

 
  
  createEdgeSprites();
  playermallet.bounceOff(wall2);
  playermallet.bounceOff(wall1);
compmallet.bounceOff(wall6)||compmallet.bounceOff(wall2)||compmallet.bounceOff(wall3)||compmallet.bounceOff(wall5);

compmallet.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall1);
ball.bounceOff(playermallet);
ball.bounceOff(compmallet);
ball.bounceOff(edges);
if (keyDown("right")) {
  playermallet.x=playermallet.x+10;
}
if (keyDown("LEFT")) {
  playermallet.x=playermallet.x-10;
}


  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
