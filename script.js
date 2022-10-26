let keyCodes = 0;

let procentX = 50;
let procentY = 50;

let movementX = 0;
let movementY = 0;

var img = document.getElementById("img");

let speed = 10;

function keydown(k)
{
    switch (k.key) {
        case "w":
            movementY = -1;
            break;
        case "s":
            movementY = 1;
            break;
        case "d":
            movementX = 1;
            break;
        case "a":
            movementX = -1;     
            break;
    }
    switch (keyCodes) {
        case 0:
            if (k.key == "g") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 1:
            if (k.key == "a") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 2:
            if (k.key == "m") {keyCodes += 1;} else {keyCodes = 0;}
            break;
        case 3:
            if (k.key == "e") {keyCodes += 1;} else {ckeyCodes = 0;}
            break;
        
    }
    if (keyCodes > 3) {
        document.location.href = "https://dydydydy141.github.io/gameLoader.html";
    }
}

function keyup(k) {
    switch (k.key) {
        case "w":
            movementY = 0;
            break;
        case "s":
            movementY = 0;
            break;
        case "d":
            movementX = 0;
            break;
        case "a":
            movementX = 0;     
            break;
    }
}

function update()
{
    procentX += movementX * speed;
    procentY += movementY * speed;

    img.style.position = "absolute"
    img.style.top = procentY + "px"
    img.style.left = procentX + "px"
}

document.addEventListener("keydown",keydown)
document.addEventListener("keyup",keyup)

setInterval(update, 1000 / 60);
