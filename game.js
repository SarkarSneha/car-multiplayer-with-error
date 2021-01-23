class Game{
    constructor(){

    }
    getState(){
        var gamestateRef=database.ref('gamestate').on("value",(data)=>{
            gamestate=data.val()
        })
    }
    update (state){
        database.ref('/').update({
            gamestate:state
        })
    }
    start(){
    if (gamestate===0)
    {
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()

        
        
    }
    }
    play(){
        form.hide()
        text("GAME START",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var displayPos=130
            for(var i in allPlayers){
                if(i==="player"+player.index){
                    fill("red")
                }
                else{fill("black")}
            }
            displayPos=displayPos+20
            textSize(20)
            text(allPlayers[i].name+":"+allPlayers [i].distance,120 ,displayPos)

        }
        if(keyDown(UP_ARROW )&&player.index!==null){
       player.distance=player.distance+50
       player.update()
        }
    }
}