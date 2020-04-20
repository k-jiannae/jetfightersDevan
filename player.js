class Player
{
    constructor()
    {
        this.index = 0
        this.name = null
        this.bulletCount=0
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
            name:this.name,index:this.index , xp:this.xp  , bullet:this.bulletCount
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


    getBulletCount()
    {
        var index="players/player"+this.index+"bullet"
        var bcRef = database.ref(index)
        bcRef.on("value",(data)=>{
            bulletCount = data.val()
        })
    }

 
    updateBulletPosition(bpx,bpy)
    {
      var index="bullet"+this.index;

      var updates={}
      updates[index+"/"+this.bulletCount+"/x"]=bpx;
      updates[index+"/"+this.bulletCount+"/y"]=bpy;
      
      database.ref('/').update(updates);
      
    }


    
}

