/*const bernardo = {
x: 0, // x and y starting position on canvas
y: 680,
height: 40,
width: 30,
speed: 5,
jumping: false,
yVelocity: 0, // bernardo's jump speed
JHeight: 90, // jump height 
};
*/

class Bernardo {
    constructor() {
        this.x = 0;
        this.y = 680;
        this.height = 40;
        this.width = 50;
        this.speed = 5;
        this.jumping = false;
        this.yVelocity = 0;
        this.JHeight = 90;
        this.bernardo = new Image();
        this.bernardo.src = "bernardo.png";
    }
    draw() {
        ctx.drawImage(
        this.bernardo, 
        this.x, 
        this.y, 
        this.width, 
        this.height
    );
}
}

const bernardo = new Bernardo();
class Win {
    constructor() {
        this.x = 1330;
        this.y = 40;
        this.width = 100;
        this.height = 100;
        this.win = new Image();
        this.win.src = "win.png";
    }
    draw() {
        ctx.drawImage(
        this.win, 
        this.x, 
        this.y, 
        this.width, 
        this.height
    );
}
draw() {
    ctx.drawImage(
        this.win,
        this.x,
        this.y,
        this.width,
        this.height
    );
}
}

const win = new Win();