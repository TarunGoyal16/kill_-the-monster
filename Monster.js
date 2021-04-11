class Monster  {
    constructor(x, y){
        var option={restitution:0.1}

      this.image = loadImage("monster1.png");
      this.body  =Bodies.rectangle(x,y,50,50,option)
      World.add(myworld,this.body)
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
         push()
     imageMode(CENTER) 
     image(this.image, this.body.position.x, this.body.position.y,100,150);
        pop()
     }
     else{
       World.remove(myworld, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
     imageMode(CENTER)
       image(this.image, this.body.position.x, this.body.position.y,100,150 );
       pop();
     }
    }
  };