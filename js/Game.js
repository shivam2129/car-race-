class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("c1",car1img)
    car2 = createSprite(300,200);
    car2.addImage("c2",car2img)
    car3 = createSprite(500,200);
    car3.addImage("c3",car3img)
    car4 = createSprite(700,200);
    car4.addImage("c4",car4img)
    cars = [car1, car2, car3, car4];



  }

  play(){
    form.hide();
   // textSize(30);
   // text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      background(groundimg)
      image(trackimg, 0,-displayHeight*5, displayWidth, displayHeight*5.5)

     var index = 0
     var x = 180;
     var y = 0
      for(var plr in allPlayers){
        index=index+1
        x=x+250;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

        if (index === player.index){
          fill(random(0,255),random(0,255),random(0,255));
          ellipse(x,y,100,100);
       
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y
      }
    

        
        

        //display_position+=20;
       
        
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance > 5200){
      gameState = 2;
    }
    drawSprites();
  }
  end(){
    console.log("Game End");
  }
 
}
