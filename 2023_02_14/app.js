const canvas = document.querySelector('canvas');
const contextCanvas = canvas.getContext('2d');

canvas.width = canvas.height = 600;

const CELL_SIZE = 30;
const PLAY_WIDTH = Math.floor(canvas.width / CELL_SIZE);
const PLAY_HEIGHT = Math.floor(canvas.height / CELL_SIZE);

const MOVE_INTERNAL = 300;
const FOOD_INTERVAL = 2000;

let input;
let snake;
let foods;
let foodSpawnElipsed;
let end;
let score;

function reset() {
input = {} ;

snake = {
    moveElipsed:0,
    lenght:4,
    parts: [{
        x:0,
        y:0
    }],
    dir: null,
    newDir:{
        x:1,
        y:0
    }

}
foods [ {
    x:10,
    y:0
    }
];

foodSpawnElipsed = 0;
end = false;
score = 0;
}

function render () {
    contextCanvas.textAlign = 'center';
    contextCanvas.textBaseline ='middle';
    contextCanvas.clearRect(0,0,canvas.width,canvas.height);
    contextCanvas.fillStyle = 'black';
        snake.parts.forEach( ({x, y},index) => {
            if (index === 0) {
                contextCanvas.fillStyle = 'black';
            }
            else {
                contextCanvas.fillStyle = '#444';
            }
        });
        contextCanvas.fillRect(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        
        contextCanvas.fillStyle = 'red';
        food.forEach(({x,y}) => {
            contextCanvas.fillRect(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        });    
}



document.addEventListener('keydown', function (event) {
        input[event.key] = true;
    });

document.addEventListener('keyup', function (event) {
        input[event.key] = false;
    });

