class Ground {
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(myworld,this.body)
    }
    display(){
        rectMode(CENTER)
        fill("skyblue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}