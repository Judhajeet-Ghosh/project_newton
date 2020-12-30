class Ball {
    constructor(x,y){
      var   options = {
          isStatic : false,
          'restitution' : 0.3,
          'friction' : 0.5,
          'density' : 0.7,
          
        }

        this.body = Bodies.circle(x,y,15,options)
        World.add(world,this.body)
        
    }
    display(){
      
      push();
      
      
      ellipseMode(RADIUS);
      fill("purple")
      ellipse(200,500,50,50)
      ellipse(300,500,50,50)
      ellipse(400,500,50,50)
      ellipse(500,500,50,50)
      ellipse(600,500,50,50)

      


      
      
      pop();
    }
    
}