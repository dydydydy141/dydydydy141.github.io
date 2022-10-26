function openGame(val) {
    switch (val) {
        case 1:
            platformerRegister();
            break;
    }
}

function platformerRegister() {
    var platformerWin = window.open("about:blank", "windowPlatformer", "width=1280,height=720,resizable=no,left=60px,top=60px");

    platformerWin.document.title = "Страшно очень страшно...";

    platformerWin.document.location.href = "file:///C:/Users/Виталий/Desktop/KospoApps/Д.З.%20По%20комп%20графике/Сайт%20%231/game.html"; 
}