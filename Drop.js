class Drop {

    constructor(x,y) {

        var options ={

            restitution : 0.1,
            friction : 0.01

        }

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain);

    }

    updateFunction() {

        if(this.rain.position.y > height) {

            Matter.Body.setPosition(this.rain,{rain : random(0,400), y : random(0,400)});

        }

    }

    showDrops() {

        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);

    }

}