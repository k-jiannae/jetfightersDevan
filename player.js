class Player
{
    constructor()
    {
        this.index = 0
        this.name = null
        this.bullet = 0
        this.xp = displayWidth/2


     

    }
    getPlayerCount()
    {
        var pcRef = database.ref('pc')
        pcRef.on("value",(data)=>{
            playerCount = data.val()
        })
    }

    updatePlayerCount(count)
    {
        database.ref('/').update({
            pc:count 
        })
    }

    update()
    {
        var pi = "players/player"+this.index  ;
        database.ref(pi).set({
            name:this.name,index:this.index , xp:this.xp  , bullet:this.bullet
        })
    }

    static getPlayerInfo()
    {
    var pl = database.ref('players')
    pl.on("value",(data)=>
    {
        allPlayers = data.val()
    })
    }
    
}