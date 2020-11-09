class Rope{
    constructor(bodyA,pointB){
        var options={
            stiffness:0.4,
            length:185,
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    attach(body){
        this.rope.bodyA=body;
    }

    fly(){
        this.rope.bodyA=null;
    }

    display(){
        push();
        if(this.rope.bodyA){
            stroke(255);
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            line(pointB.x,pointB.y,pointA.x,pointA.y);
        }
        pop();
    }
}