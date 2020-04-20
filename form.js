class Form
{
    constructor()
    {
      this.name =createInput("")
      this.button = createButton('start')
      this.reset = createButton('reset')

    }

    hide()
    {
        this.name.hide();
        this.button.hide();
    }

    display()
    {
        this.name.position((displayWidth-60)/2,(displayHeight-170)/2)
        this.button.position((displayWidth-60)/2,displayHeight-400)
        this.reset.position(displayWidth-100,displayHeight-700)
        this.button.mousePressed(()=>
        {
            this.name.hide()
            this.button.hide();
            playerCount = playerCount+1
            player.index = playerCount    ;
            player.name = this.name.value();
            player.updatePlayerCount(playerCount)
            console.log(player.index)
            player.update();
            
            this.button.hide()
            
            
            
        })
             this.reset.mousePressed(()=>
             {
                 game.update(0)
                 player.updatePlayerCount(0)
                 database.ref('players').remove()
                 database.ref('bullet2').remove()
                 database.ref('bullet1').remove()
                 
             })                         
    }
}