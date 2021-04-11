class Superhero {
    constructor(x,y,r){
        var option={
            restitution:0.8,
            density:1
            

        }
        this.radius=r
        this.image=loadImage("superhero2.png")
        this.body=Bodies.circle(x,y,r,option)
        World.add(myworld,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        //rotate(this.body.angle)
        imageMode(CENTER)
        fill("black")
        image(this.image,0,0,400,200)
        pop()
    }
}