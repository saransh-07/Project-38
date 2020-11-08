class Game{
    constructor(){

    }
    getState(){
   var stateRef = database.ref("GameState");
   stateRef.on("value",function(data){
      gameState = data.val();
   });
    }
    update(state){
        database.ref('/').update({
          'GameState':state
        });
    }
    async start(){
        
        
        if(gameState===0){
            player = new Player();
            var playerCountRef  = await database.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
      

        cyclist1 = createSprite(342,displayHeight);
        cyclist1.addImage("cyclist1",cyclistA);

        cyclist2 = createSprite(342*3,displayHeight);
        cyclist2.addImage("cyclist2",cyclistB);

        cyclists = [cyclist1,cyclist2];

        starS = createSprite(-100,-100);
        starS.addImage("star",star);
    }
    play(){
       
            form.hide();
        Player.getPlayerInfo();
       player.getRank();
        if(playerArray!==undefined){
            background(0,255,0);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
    
            var y;
            var index = 0;
                for(var plr in playerArray){
                index=index+1;
                
               
                y = displayHeight  - playerArray[plr].score;
                if(cyclists[index-1]===undefined){
                    cyclists[index-1]={};
                }
               
                 cyclists[index-1].y = y;
              
                 if(index === player.index){
                    starS.x=cyclists[index-1].x;
                        starS.y=cyclists[index-1].y;
                        starS.depth = cyclists[index-1].depth -1;
                    camera.position.x = displayWidth/2;
                    camera.position.y = cyclists[index-1].y;
                    
                    }
            }
            
                
        }
        if(keyIsDown(UP_ARROW) && player.index!==undefined){
            player.score +=10;
            player.updateInfo();
            }
            if(player.score > 4000){
                gameState=2;
                
                player.rank+=1;
                Player.updateRank(player.rank);
              
            }
       // console.log(player.name);
           
           
            drawSprites();
           /* if(index!==undefined){
                console.log(index);
                
            }*/
            
}
end(){
   
console.log("Game Ended");
}
}

