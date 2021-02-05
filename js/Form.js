class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton("Reset")
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-120,displayHeight/2-275);
    

    this.input.position(displayWidth/2-100,displayHeight/2-200);
    this.button.position(displayWidth/2+24,displayHeight/2-179);
    this.reset.position(displayWidth-140,20)
    
    
    this.reset.mousePressed(()=>{
     player.updateCount(0)
     game.update(0)
     database.ref('/').update({
      
      players : null

     })
    });

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-100,displayHeight/2);
    });

  }
}
