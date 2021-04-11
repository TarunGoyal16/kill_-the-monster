class Block {
    constructor(x,y,w,h){
        var option={
            restitution:0.08,
            density:1.2
        }
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(myworld,this.body)
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("green")
        strokeWeight(2)
        stroke("orange")
       rect(0,0,this.width,this.height)
       pop()
    }
}