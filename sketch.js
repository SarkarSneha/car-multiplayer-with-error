var database
var gamestate=0,playercount=0,form,player,game
var allPlayers

function setup(){
  createCanvas (400,400)
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()

  
}

function draw(){
  background("white");
  if(playercount===4){
    game.update(1)
  }
  if(gamestate===1){
    clear()
   game.play() 
  }
  
}

