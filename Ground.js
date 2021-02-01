class Ground {
    constructor() {
      var ground_options = {
          isStatic: true
      }
      this.ground= Bodies.rectangle(450,390,900,20,body_options);
      World.add(world, this.body);
    }
    display(){
    noStoke();
      rectMode(CENTER);
      fill("188,67,67");
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  }
