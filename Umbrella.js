class Umbrella{
  constructor(x,y){
      var options={
          isStatic: true
      }
      this.image = loadImage("walking_1.png");
      this.x=x;
      this.y=y;
      this.radius=60;
      this.body=Bodies.circle(x,y,60,options);
      World.add(world,this.body);
  }  

  display(){
    push();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    imageMode(CENTER);
    //image(this.image,pos.x,pos.y+70,300,300);
    image(this.image, 0,0, 250, 250);
    this.visibility=0;
    pop();
  }
}