class Form {
    constructor(){
        this.title=createElement('h2')
      this.input = createInput("name")
      this.button = createButton("play")
      this.greeting = createElement('h3')
    }
    hide(){
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
    }
display(){
  
   this. title.html("car racing game")
    this.title.position(130,0)
  
    this.input.position(130,160)
    this.button.position(250,200)
    this.button.mousePressed(()=>{
       this. input.hide()
        this.button.hide()
      //  var name=input.value()
      player.name=this.input.value()
      playercount=playercount+1
        player.index=playercount
        player.update()
        player.updateCount(playercount)
       this. greeting.html("Hello!"+player.name)
       this. greeting.position(130,160)
        
        
    })
}
}