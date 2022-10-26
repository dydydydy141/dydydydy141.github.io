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

class Tile
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






var canvas = document.getElementById("gameView");
var ctx = canvas.getContext("2d");

var sky = new Object("images/sky.png", 0, 0, 1280, 720);
var sun = new Object("images/sun.png", 1120, -40, 250, 250);

let cameraX = 0;
let cameraY = 0;

setInterval(render, 1000 / 60)

function render() {

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

    for(var z = 0; i < level.length; i++)
    {
        ctx.drawImage(
            level[z].image, //Изображение для отрисовки
            0, //Начальное положение по оси X на изображении
            0, //Начальное положение по оси Y на изображении
            level[z].image.width, //Ширина изображения
            level[z].image.height, //Высота изображения
            level[z].x, //Положение по оси X на холсте
            level[z].y, //Положение по оси Y на холсте
            level[z].width, //Ширина изображения на холсте
            level[z].height //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
        );
    }
}

var objects = 
[
    sky,
    sun,
    new Object("images/tree.png", 10, 10, 145, 145)
];

var level = 
[
    new Object("images/tree.png", 10, 10, 145, 145)
];