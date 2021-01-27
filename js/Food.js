class Food{
    constructor(x,y){
        var lastFed;
        var Foodstock;
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y,options);
      
      this.image=loadImage("Milk.png");
      
      World.add(world, this.body);
    }

    getFoodstock(){
        var foodRef = database.ref('playerCount');
        foodRef.on("value",(data)=>{
          food = data.val();
        })
      }
      updateFoodstock(count){
        database.ref('/').update({
          food: count
        });
      }
      update(){
       
        database.ref(foods).set({
          food:this.food,
          
        });
      }
      display(){
          fill(255,255,254);
          textSize(15);
          if(lastFed>=12){
              text("Last Feed:"+lastFed%12+"PM",350,30);
    
          }else if(lastFed===0){
              text("Last Feed:12 AM",350,30);
          }else {
              text("Last Feed:"+lastFed+"AM",350,30)
          }

          var x=80;
          var y=100;

          imageMode(CENTER);
          image(this.image,720,220,70,70);

          if(this.Foodstock!=0){
              for(var i=0;i<this.Foodstock;i++){
                  if(i%10==0){
                      x=80;
                      y=y+50;
                  }
                  image(this.image,x,y,50,50);
                  x=x+30;
              }
          }

      }
}