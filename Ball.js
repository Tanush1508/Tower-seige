class Ball{
    constructor(x,y,r)
      {
          var options = { 
              isStatic:false,
              density: 5
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var ballPos=this.body.position;		
              push()
              translate(ballPos.x, ballPos.y-100);
              rectMode(CENTER)
              fill("red")
              pop()
              
      }
  }