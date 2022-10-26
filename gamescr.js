class Object
{
    constructor(image, x, y, width = null, height = null)
    {
        this.x = x;
        this.y = y;
 
        this.image = new Image();
        
        this.image.src = image;

        if (width != null && height != null) {
            this.width = width;
            this.height = height;
        }
        else
        {
            this.width = image.width;
            this.height = image.height;
        }
    }
}

class Player
{
    constructor(image, x, y, width = null, height = null)
    {
        this.x = x;
        this.y = y;
 
        this.Sprite = new Sprite();
        
        this.image.src = image;

        if (width != null && height != null) {
            this.width = width;
            this.height = height;
        }
        else
        {
            this.width = image.width;
            this.height = image.height;
        }
    }
}






var canvas = document.getElementById("gameView");
var ctx = canvas.getContext("2d");

var sky = new Object("images/sky.png", 0, 0, 1280, 720);
var sun = new Object("images/sun.png", 1120, -40, 250, 250);

var playerSprite = new Image();
playerSprite.src = "images/char.png";

let gravity = 0.25;

let playerX = 298.5;
let playerY = 60;

let downY = 0;

var onGround = false;

var jetpack = false;

let playerGrav = 0;

let spriteOffset = 0;

let speed = 3;

let keyCodes = 0;

let movementX = 0;

let cameraX = 0;
let cameraY = 0;

setInterval(render, 1000 / 60);

function render() {

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Очистка холста от предыдущего кадра

    for(var i = 0; i < objects.length; i++)
    {
        ctx.drawImage(
            objects[i].image, //Изображение для отрисовки
            0, //Начальное положение по оси X на изображении
            0, //Начальное положение по оси Y на изображении
            objects[i].image.width, //Ширина изображения
            objects[i].image.height, //Высота изображения
            objects[i].x, //Положение по оси X на холсте
            objects[i].y, //Положение по оси Y на холсте
            objects[i].width, //Ширина изображения на холсте
            objects[i].height //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
        );
    }

    for(var i = 0; i < levelcolide.length; i++)
    {
        ctx.drawImage(
            levelcolide[i].image, //Изображение для отрисовки
            0, //Начальное положение по оси X на изображении
            0, //Начальное положение по оси Y на изображении
            levelcolide[i].image.width, //Ширина изображения
            levelcolide[i].image.height, //Высота изображения
            levelcolide[i].x, //Положение по оси X на холсте
            levelcolide[i].y, //Положение по оси Y на холсте
            levelcolide[i].width, //Ширина изображения на холсте
            levelcolide[i].height //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
        );
    }

    for(var i = 0; i < levelnoncolide.length; i++)
    {
        ctx.drawImage(
            levelnoncolide[i].image, //Изображение для отрисовки
            0, //Начальное положение по оси X на изображении
            0, //Начальное положение по оси Y на изображении
            levelnoncolide[i].image.width, //Ширина изображения
            levelnoncolide[i].image.height, //Высота изображения
            levelnoncolide[i].x, //Положение по оси X на холсте
            levelnoncolide[i].y, //Положение по оси Y на холсте
            levelnoncolide[i].width, //Ширина изображения на холсте
            levelnoncolide[i].height //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
        );
    }

    ctx.drawImage(
        playerSprite, //Изображение для отрисовки
        43 * spriteOffset, //Начальное положение по оси X на изображении
        66 * downY, //Начальное положение по оси Y на изображении
        43, //Ширина изображения
        66, //Высота изображения
        playerX, //Положение по оси X на холсте
        playerY, //Положение по оси Y на холсте
        43 * 1.5, //Ширина изображения на холсте
        66 * 1.5 //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
    );

    playerGrav += gravity;
    playerX += movementX * speed;
    playerY += playerGrav;

    let onGround2 = false;

    if (playerX < 60 + 15 * 75 && playerX > 60) {onGround2 = true;}

    if (playerY > 470 && playerY < 520 && onGround2) {
        playerY = 470;
        playerGrav = 0;
        onGround = true;
    } else {
        onGround = jetpack;
    }
}

var objects = 
[
    sky,
    sun
];

var levelnoncolide = 
[
        new Object("images/tree.png", 60 + 13 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 11 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 10 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 7 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 7 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 4 * 75, 355, 170, 210),
        new Object("images/tree.png", 60 + 1 * 75, 355, 170, 210)
];

var levelcolide = 
[
        new Object("images/grass.png", 60, 560, 75, 75),
        new Object("images/grass.png", 60 + 1 * 75, 560, 75, 75, 75),
        new Object("images/grass.png", 60 + 2 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 3 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 4 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 5 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 6 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 7 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 8 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 9 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 10 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 11 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 12 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 13 * 75, 560, 75, 75),
        new Object("images/grass.png", 60 + 14 * 75, 560, 75, 75)
];

function AnimationPeti() {
    if (movementX != 0 || onGround == false) {
        spriteOffset++;
        if (spriteOffset > 3) {
            spriteOffset = 0;
        }
    }
    else
    {
        spriteOffset = 0;
    }
}

setInterval(AnimationPeti, 1000 / 8);

function keydown(k)
{
    switch (k.key) {
        
        case "d":
            downY = 1;
            movementX = 1;
            break;
        case "a":
            downY = 0;
            movementX = -1;
            break;
        default:
            if (k.keyCode == 32 && onGround) {playerGrav = -4.5; if (jetpack) {playerGrav -= 1.5}}
            break;
    }
    switch (keyCodes) {
        case 0:
            if (k.key == "j") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 1:
            if (k.key == "e") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 2:
            if (k.key == "t") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 3:
            if (k.key == "p") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 4:
            if (k.key == "a") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 5:
            if (k.key == "c") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 6:
            if (k.key == "k") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 7:
            if (k.keyCode == 27) { keyCodes += 1;} else {keyCodes = 0;}
             break;
        
    }
    if (keyCodes == 8) {
        jetpack = true;
        alert("Вы получили джетпак! Используйте много раз прыжок для полёта!")
        keyCodes = 99;
    }
}

function keyup(k) {
    switch (k.key) {
        case "d":
            movementX = 0;
            break;
        case "a":
            movementX = 0;     
            break;
    }
}

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
