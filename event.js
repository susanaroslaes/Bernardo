option.addEventListener('click', () =>{
menubar.style.display ="block";
box.style.display = "none";
back.style.display = "block";
});

start.addEventListener('click', () =>{
    startGame.onplay();
    box.style.display= "none";
    backGame.style.display = "block";
    requestAnimationFrame(gameLoop);
});

backGame.addEventListener('click', () => {
    backGame.style.display = "none";
    victoryScreen.style.display = "none";
    canvas.style.display = "block";
    box.style.display = "block";
    cancelAnimationFrame(ani);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.Width, canvas.height);
    gameOver();
    
});

back.addEventListener('click', () =>{
    back.style.display = "none";
    menu.style.display = "none";
    box.style.display = "block";
});

document.addEventListener("keydown", (event) =>{
    if(event.code === "ArrowRight"){
        rightPress = true;
    }
    if (event.code === "ArrowLeft"){
        leftPress = true;
    }
    if(event.code === "Space"){
        jumpPress = true;

    }
    if (event.code === "shift"){
        shiftPress = true;
    }
});

document.addEventListener("keyup", (event) =>{
    if (event.code === "arrowRight"){
        rightPress = false;
    }
    if (event.code === "ArrowLeft"){
        leftPress = false;
    }
    if( event.code === "Space"){
        jumpPress = false;
    }
    if (event.code === "Shift"){
        shiftPress = false;
    }
})