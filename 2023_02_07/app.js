const width = 500;
const height = 500;

canvas = document.getElementById("canvas");
contextCanvas = canvas.getContext("2d"),
document.addEventListener('keydown',handleKeyDown);
canvas.addEventListener('mousemove',handleMouseMove);
function handleMouseMove(event) {
    if (event.buttons == 1) {
    contextCanvas.clearRect(0,0,width,height);
    golyo.x = event.offsetX;
    golyo.y = event.offsetY;
    golyo.rajzol();
    }
}



function handleKeyDown(event) {
    contextCanvas.clearRect(0,0,width,height);
    if (event.keyCode == 40){
        golyo.y++;
        golyo.rajzol();
    }
    if (event.keyCode == 38){
        golyo.y--;
        golyo.rajzol();
    }
    
    if (event.keyCode == 37){
        golyo.x--;
        golyo.rajzol();
    }
    if (event.keyCode == 39){
        golyo.x++;
        golyo.rajzol();
    }
    console.log(`keyDown: ${event.keyCode}`);
}

golyo = {};

golyo = {
    x:width/2,
    y:height/2,
    r:10,
    rajzol: function() {
        contextCanvas.beginPath();
        contextCanvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        contextCanvas.stroke();
    }    
}

function drag(event) {
    event.dataTransfer.setData("text",event.target.id);
}

function allowDrop(event) { 
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

contextCanvas.clearRect(0,0,width,height);
golyo.rajzol();

