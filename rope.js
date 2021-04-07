class Rope{
    constructor(body1,point){
      
    var options={
        bodyA:body1,
        pointB:point,
        stiffness:1.2,
        length:1050
    }
   this.pointB=point;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }

    display()
    {
        if(this.rope.bodyA)
        {
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(2);
        stroke("skyblue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}