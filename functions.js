function addObjects() {
    ctx.fillStyle = "black";
    objects.forEach((object) => {
        ctx.fillRect(object.x, object.y, object.width, object.height);
    });
}

function addObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

    function addWin() {
        win.draw();
        // ctx.fillStyle = 'yellow';
        // ctx.fillRect(win.x, win.y, win.width, win.height);
    }

    function moveBernardo() {
        if (shiftPress) {
            bernardo.speed = 10;
        }
        if(rightPress && bernardo.x < canvas.width - bernardo.width) {
            bernardo.x += bernardo.speed;
        }
        if(leftPress && bernardo.x > 0) {
            bernardo.x -= bernardo.speed;
        }
        if(jumpPress && !bernardo.jumping) {
            bernardo.yVelocity = -Math.sqrt(2 * gravity * bernardo.JHeight);
            bernardo.jumping = true;
        }

        bernardo.yVelocity += gravity;
        bernardo.y += bernardo.yVelocity;

        if(bernardo.y > canvas.height - bernardo.height) {
            bernardo.y = canvas.height - bernardo.height;
            bernardo.jumping = false;
            bernardo.yVelocity = 0;
        }
        console.log(bernardo.yVelocity);
    }

    function collision(object){
        let colliding = false;
        object.forEach((object) => {
            if(bernardo.x + bernardo.width >= object.x && bernardo.x <= object.width + object.x&&bernardo.y + bernardo.height >= object.y && bernardo.y <= object.y + object.height) {
            console.log('colliding');
            colliding = true;
            detection(object);
            }
        });
        return colliding;
    }

    function collisionObaracles(obstacles){
        let colliding = false;
        obstacles.forEach((obstacle) => {
            if(bernardo.x + bernardo.width >= obstacle.x && bernardo.x <= obstacle.width + obstacle.x&&bernardo.y + bernardo.height >= obstacle.y && bernardo.y <= obstacle.y + obstacle.height) {
            console.log('colliding');
            colliding = true;
            detection(obstacle);
            }
        });
        return colliding;
    }

    function collisionWin(){
        let colliding = false;
        if(bernardo.x + bernardo.width >= win.x && bernardo.x <= win.width + win.x&&bernardo.y + bernardo.height >= win.y && bernardo.y <= win.y + win.height) {
            console.log('colliding');
            colliding = true;
            victoryScreen.style.display = 'block';
            cancelAnimationFrame(ani);
        }
        return colliding;
    }

    function dectection(object) {
        let top = Math.abs(bernardo.y - (object.y + object.height));
        let right = Math.abs((bernardo.x + bernardo.width)- object.x);
        let left = Math.abs ((bernardo.x-(object.x+object.eidth)));
        let bottom = Math.abs ((bernardo.y + bernardo.height)- object.y);

        if ((bernardo.y <= object.y + object.height && bernardo.y + bernardo.height > object.y + object.height) && (top < right&& top < left)){
            bernardo.y = object.y + object.height;
            bernardo.yVelocity = 0;
        }

        if ((bernardo.y + bernardo.height >= object.y && bernardo.y < object.y) && (bottom < right && bottom < left)){
            bernardo.y= object.y - bernardo.height;
            bernardo.jumping = false;
            bernardo.yVelocity = 0;
        }

        if ((bernardo.x + bernardo.width >= object.x && bernardo.x < object.x) && (right < top && right < bottom)){
            bernardo.x = object.x - bernardo.width;
        }
        if((bernardo.x <= object.x + object.width && bernardo.x + bernardo.width > object.x + object.width) && (left < top && left < bottom)){
            bernardo.x = object.x + object.width;
        }
    }
    
    function detectObstacle(object){
        console.log('game over');
        gameOver();
    }

    function dectectWin(win){
        winGame();
    }

    function winGame(){
        stopGameLoop(ani);
        end.play();
        ctx.clearRect(0, 0, cabvas.width, canvas.height);
        canvas.style.display = "none";
        victoryScreen.style.display = "block";

    }

    function gameOver(){
        bernardo.x = 0;
        bernardo.y = 680;
        bernardo.jumping = false;
        bernardo.yVelocity = 0;
    }
