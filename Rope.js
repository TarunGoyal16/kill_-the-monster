class Rope{
    constructor(body1,pointB){
        var option={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.1,
        }
        this.pointB=pointB
        this.rope=Constraint.create(option)
        World.add(myworld,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        strokeWeight(0)
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}