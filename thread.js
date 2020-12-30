class Thread{
    constructor(bodyA,pointB){
      var options = {
          bodyA : bodyA,
          pointB : pointB,
          length : 20,
          stiffness : 0.08
      }
      this.pointB = pointB;
         this.thread = Constraint.create(options)
         World.add(world,this.thread)
    }

    
    
    display(){
      

      
      var pointA = this.sling.bodyA.position
      var pointB = this.pointB
        strokeWeight(5)
        fill("yellow")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
      
    }
}
