class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction : 0.5,
          density : 1.2  
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.img =loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.img,pos.x, pos.y, this.radius*2,this.radius*2);
    }
  };