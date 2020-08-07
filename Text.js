class Buttons {
    constructor(){
        this.email = createInput('Your email');
    }
    hide(){
        this.email.hide();
    }
    display(){
        this.email.position(50,1000);
        value = this.email.value();
        
    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
}
