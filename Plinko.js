class plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.r=10;
      this.body=Bodies.circle(x,y,this.r,options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.r,this.r);
    }
  };