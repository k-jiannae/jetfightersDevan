class Game
{
    constructor()
    {


    }


    update(plr)
    {
       database.ref('/').update({
           gs:plr
       })
    }

    getState()
    {
        database.ref('gs').on("value",(data)=>{
            gameState = data.val()
        })
    }
}


