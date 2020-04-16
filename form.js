class Form
{
    constructor()
    {
      this.name =createInput("")
      this.button = createButton('start')
      this.reset = createButton('reset')

    }

    display()
    {
        this.name.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth-300,displayHeight-500)
        this.reset.position(displayWidth-500,displayHeight-400)
        this.button.mousePressed(()=>{
            this.name.hide()
            this.button.hide();
            playerCount = playerCount+1
            player.index = playerCount    ;
            player.name = this.name.value();
            player.updatePlayerCount(playerCount)
             console.log(playerCount)
            player.update();
            
            this.button.hide()
            
            
            
                                      })
             this.reset.mousePressed(()=>{
                 game.update(0)
                 player.updatePlayerCount(0)
                 database.ref('players').remove()
                 
             })                         
    }
}