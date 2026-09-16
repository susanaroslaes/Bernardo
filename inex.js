const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let rightPress = false;
let leftPress = false;
let jumpPress = false;
let shiftPress = false;
let gravity = 0.4;
let ani;

const object = [
    {x: 0, y: 700, height: 300, width: 250}, {x: 450, y: 720, height: 25, width: 140},
    {x: 650, y: 670, height: 25, width: 60}, {x: 750, y: 630, height: 25, width: 90},
    {x: 870, y: 715, height: 25, width: 130}, {x: 1418, y: 660, height: 25, width: 100},
    {x: 1370, y: 600, height: 25, width: 80}, {x: 1418, y: 515, height: 25, width: 35},
    {x: 1300, y: 440, height: 120, width: 25}, {x: 1240, y: 440, height: 25, width: 85},
    {x: 1085, y: 515, height: 25, width: 35}, {x: 880, y: 565, height: 25, width: 100},
    {x: 820, y: 440, height: 25, width: 85}, {x: 650, y: 455, height: 25, width: 40},
    {x: 420, y: 436, height: 25, width: 60}, {x: 200, y: 365, height: 25, width: 45},
    {x: 340, y: 280, height: 25, width: 40}, {x: 180, y: 200, height: 25, width: 45},
    {x: 350, y: 155, height: 25, width: 100}, {x: 600, y: 270, height: 25, width: 40},
    {x: 800, y: 240, height: 25, width: 40}, {x: 970, y: 290, height: 25, width: 25},
    {x: 1130, y: 155, height: 25, width: 35}, {x: 1020, y: 125, height: 25, width: 50},
    {x: 1190, y: 115, height: 25, width: 300,}
]
const obstacles = [
    {x: 250, y: 778, height: 2, width: 1600,},
    {x: 870, y: 710, height: 4, width: 40},
    {x:800, y: 565, height: 4, width: 100},
    {x: 350, y: 152, height: 4, width: 35},
    {x: 1020, y: 125, height: 4, width: 50},
]

const start = document.getElementById('start');
const options = document.getElementById('options');
const box = document.getElementById('box');
const victoryScreen = document.getElementById('victoryScreen');


const startGame = document.getElementById('startG');

const backgroundImage = new Image();
backgroundImage.src = "background.png";
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveBernardo();
    bernardo.draw();
    addObjects();
    addObstacles();
    collisionObaracles(obstacles);

    addWin();
    ain = requestAnimationFrame(gameLoop);
    collisionWin();

}
function stopGame() {
    cancelAnimationFrame(ani);
}

function setVolume(sfx, volume) {
    const audioElements = document.querySelectorAll(`audio[src="${sfx}"]`);
    for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].volume = volume / 100;
    }
}

