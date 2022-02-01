canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
rover_height=90;
var roverx=400;
var rovery=300;
var backgroundIMG="mars.jpg";
var roverimage="rover.png";

function add(){
    background_img=new Image();
background_img.onload=uploadBackground;
background_img.src=backgroundIMG;

rover_image=new Image();
rover_image.onload=uploadroverimage;
rover_image.src=roverimage;
}

function uploadBackground(){
    ctx.drawImage(background_img,0,0,800,600)
}
function uploadroverimage(){
    ctx.drawImage(rover_image,roverx,rovery,roverwidth,rover_height);
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed="38"){
        up();
    }

    if(keypressed="39"){
        right();
    }

    if(keypressed="37"){
        left();
    }

    if(keypressed="40"){
        down();
    }
}

function up(){
    if (rovery>=0){
        rovery=rovery-10;
        console.log(roverx,rovery)
        uploadBackground();
        uploadroverimage();
    }
}

function down(){
    if (rovery<=500){
        rovery=rovery+10;
        console.log(roverx,rovery)
        uploadBackground();
        uploadroverimage();
    }
}

function right(){
    if (roverx<=700){
        roverx=roverx+10;
        console.log(roverx,rovery)
        uploadBackground();
        uploadroverimage();
    }
}

function left(){
    if (roverx>=0){
        roverx=roverx-10;
        console.log(roverx,rovery)
        uploadBackground();
        uploadroverimage();
    }
}