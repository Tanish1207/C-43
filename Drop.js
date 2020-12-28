class Drop{
  constructor(x,y){
     var options={
     isStatic : false,
     friction: 0.1,
     restitution: 0.1
     }
      this.body=Bodies.circle(x,y,10,options);
      //this.radius = 5;
      World.add(world, this.body);
  }

  update(){ 
      if(this.body.position.y>height){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
  }

  display(){
      
      var pos = this.body.position; 
      fill(0,102,204);
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,5,5);
      pop();

  }

  //showDrop(){
      //fill("lightblue");
      //ellipseMode(RADIUS);
      //ellipse(this.rain.position.x,this.rain.position.y);
  //}

}