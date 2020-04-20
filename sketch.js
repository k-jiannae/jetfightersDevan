var database;


//game, form and player variables

var game,form,player;
var playerCount=0,gameState=0,check=0,bulletCount=0,enemyBulletCount=0,pi,ei,enemyBulletGroup;

var bullet;

//image variables
var j1,j2,bg;


//sprite variables
var jet1,jet2;
var playerJet,Enemy;


function preload()
{
  j1=loadImage("images/Picture4.png")
  j2=loadImage("images/Picture2.gif")
  bg=loadImage("images/wae.jpg")
}

function setup()
{
  createCanvas(displayWidth-30,displayHeight-170);
  database=firebase.database();
  
  enemyBulletGroup=new Group();
  game=new Game();
  game.getState();
  player=new Player();
  player.getPlayerCount();
  player.getBulletCount();
  form=new Form();
  form.display();


  for(var i=0;i<50;i++)
  {
     enemyBulletGroup.add(createSprite())
  }
  enemyBulletGroup.setVisibleEach(false);
}



function draw()
{
  background(bg);


  if(playerCount==2 && check==0)
  {
    
    if(player.index==1)
    {
        playerJet=createSprite(displayWidth/2,200);
        Enemy=createSprite(displayWidth/2,400);
        playerJet.addImage("1",j1);
        Enemy.addImage("1",j2);
        playerJet.scale=0.1;
        Enemy.scale=0.18;
        playerJet.rotation=-90;
        Enemy.rotation=180;
        database.ref('players/player2/xp').on("value",(data)=>{
            Enemy.x=data.val();
        })
        pi=1;
        ei=2;

      }
    else
    if(player.index==2)
    {
        Enemy=createSprite(displayWidth/2,200);
        playerJet=createSprite(displayWidth/2,400);
        Enemy.addImage("1",j1);
        playerJet.addImage("1",j2);
        Enemy.scale=0.1;
        playerJet.scale=0.18;
        Enemy.rotation=90;
        database.ref('players/player1/xp').on("value",(data)=>{
            Enemy.x=data.val();
        })
        pi=2;
        ei=1;
}
      
    playerJet.y=displayHeight-250
    Enemy.y=100;
    form.hide();
    game.update(1); 
    check=1
    
  }

  if(gameState==1)
  {
    
    if(keyDown(LEFT_ARROW))
    {
        playerJet.x=playerJet.x-5;
        player.xp=playerJet.x;
        player.update();
    }
    if(keyDown(RIGHT_ARROW))
    {
        playerJet.x=playerJet.x+5;
        player.xp=playerJet.x;
        player.update();
    }

    if(keyWentDown("space"))
    {
        bullet=createSprite(playerJet.x,playerJet.y,5,20);
        bullet.velocityY=-10
        bulletCount++;
        player.bulletCount=bulletCount;
        player.update();
    }

    if(bullet!==undefined)
    {
      player.updateBulletPosition(bullet.x,bullet.y);
    }
    
    if(check==1)
    {
        var index="bullet"+ei;
        database.ref(index).on("value",(data)=>
        {
            enemyBulletCount=data.val();
            console.log(enemyBulletCount);
        }
        )
        check=2;

    }
   var index=0;
    for(var i in enemyBulletCount)
    {
        
      var s=enemyBulletGroup.get(index);
      s.visible=true;
      s.x=enemyBulletCount[i].x;
      s.y=(displayHeight-170)-enemyBulletCount[i].y;
      s.width=5;
      s.height=20;
      index++;
    }
    drawSprites();

  }

  }