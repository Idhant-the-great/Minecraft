var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function image_update(fetch_image) {
    fabric.Image.fromURL(fetch_image, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        image_update("wall.jpg");
    }
    if (keyPressed == '71') {
        image_update("ground.png");
    }
    if (keyPressed == '76') {
        image_update("light_green.png");
    }
    if (keyPressed == '84') {
        image_update("trunk.jpg");
    }
    if (keyPressed == '82') {
        image_update("roof.jpg");
    }
    if (keyPressed == '89') {
        image_update('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68') {
        image_update('dark_green.png');
        console.log("d");
    }
    if (e.shiftKey == true && keyPressed == "68") {
        image_update('delete.png');
        console.log("delete");
    }
    if (keyPressed == '67') {
        image_update('cloud.jpg');
        console.log("c");
    }
} 
function up()
{
if(player_y>=0)
{
    player_y=player_y-block_image_height;
    console.log("block image height"+block_image_height);
    console.log("When up arrow is clicked,X="+player_x+",Y="+player_y);
    canvas.remove(player_object);
    player_update();

}
}

function down()
{
if(player_y<=570)
{
    player_y=player_y+block_image_height;
    console.log("block image height"+block_image_height);
    console.log("When down arrow is clicked,X="+player_x+",Y="+player_y);
    canvas.remove(player_object);
    player_update();

}
}

function left()
{
if(player_x>=0)
{
    player_x=player_x-block_image_width;
    console.log("block image width"+block_image_width);
    console.log("When left arrow is clicked,X="+player_x+",Y="+player_y);
    canvas.remove(player_object);
    player_update();

}
}

function right()
{
if(player_x<=970)
{
    player_x=player_x+block_image_width;
    console.log("block image width"+block_image_width);
    console.log("When right arrow is clicked,X="+player_x+",Y="+player_y);
    canvas.remove(player_object);
    player_update();

}
}