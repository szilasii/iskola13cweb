const canvas = document.querySelector('canvas');
const contextCanvas = canvas.getContext('2d');

canvas.width = canvas.height = 600;

canvas.style.width = '600px';
canvas.style.height = '600px';
canvas.style.border = '1px solid #000';


const CELL_SIZE = 30;
const WORLD_WIDTH = Math.floor(canvas.width / CELL_SIZE);
const WORLD_HEIGHT = Math.floor(canvas.height / CELL_SIZE);

const MOVE_INTERVAL = 300;
const FOOD_SPAWN_INTERVAL = 1500;

let input;
let snake;
let foods;
let foodSpawnElapsed;
let end;
let score;

function reset() {
    input = {} ;

    snake = {
        moveElapsed:0,
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
    };

    foods =  [ {
        x:10,
        y:0} ];

    foodSpawnElapsed = 0;
    end = false;
    score = 0;
}

function update(delta) {
    if (end) {
        if (input[' ']) {
            reset();
        }
        return;
    }

    if (input.ArrowLeft && snake.dir.x !== 1) {
        snake.newDir = { x: -1, y: 0 };
      } else if (input.ArrowUp && snake.dir.y !== 1) {
        snake.newDir = { x: 0, y: -1 };
      } else if (input.ArrowRight && snake.dir.x !== -1) {
        snake.newDir = { x: 1, y: 0 };
      } else if (input.ArrowDown && snake.dir.y !== -1) {
        snake.newDir = { x: 0, y: 1 };
      }
    
      snake.moveElapsed += delta;
    
      if (snake.moveElapsed > MOVE_INTERVAL) {
        snake.dir = snake.newDir;
        snake.moveElapsed -= MOVE_INTERVAL;
        const newSnakePart = {
          x: snake.parts[0].x + snake.dir.x,
          y: snake.parts[0].y + snake.dir.y
        };
        snake.parts.unshift(newSnakePart);
    
        if (snake.parts.length < snake.length) {
          snake.parts.pop();
        }
    
        const head = snake.parts[0];
        const foodEatenIndex = foods.findIndex(f => f.x === head.x && f.y === head.y);
        if (foodEatenIndex >= 0) {
          snake.length++;
          score++;
          foods.splice(foodEatenIndex, 1);
        }
    
        const worldEdgeIntersect = head.x < 0 || head.x >= WORLD_WIDTH || head.y < 0 || head.y >= WORLD_HEIGHT;
        if (worldEdgeIntersect) {
          end = true;
          return;
        }
    
        const snakePartIntersect = snake.parts.some((part, index) => index !== 0 && head.x === part.x && head.y === part.y);
        if (snakePartIntersect) {
          end = true;
          return;
        }
    }
    
      foodSpawnElapsed += delta;
      if (foodSpawnElapsed > FOOD_SPAWN_INTERVAL) { 
        foodSpawnElapsed -= FOOD_SPAWN_INTERVAL;
        foods.push({
          x: Math.floor(Math.random() * WORLD_WIDTH),
          y: Math.floor(Math.random() * WORLD_HEIGHT)
        });
        }
    }

function render () {
    contextCanvas.textAlign = 'center';
    contextCanvas.textBaseline ='middle';
    contextCanvas.clearRect(0,0,canvas.width,canvas.height);
    contextCanvas.fillStyle = 'black';
        snake.parts.forEach( ({x, y}, index) => {
            if (index === 0) {
                contextCanvas.fillStyle = 'black';
            }
            else {
                contextCanvas.fillStyle = '#555';
            }
            contextCanvas.fillRect(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        });
        
        
        contextCanvas.fillStyle = 'orange';
        foods.forEach(({x,y}) => {
            contextCanvas.fillRect(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        });    
        contextCanvas.fillStyle = 'green';
        contextCanvas.font = '20px Arial';    
        contextCanvas.fillText(`Pont: ${score}`,canvas.width / 2, CELL_SIZE / 2 )
        if (end) {
           contextCanvas.fillStyle = 'red';
           contextCanvas.font = '60px Arial';
           contextCanvas.fillText('Játék vége!',canvas.width / 2, canvas.height / 2)     

           contextCanvas.fillStyle = 'Black';
           contextCanvas.font = '20px Arial';
           contextCanvas.fillText('Nyomd meg a Space-t az ujrakezdéshez',canvas.width / 2, canvas.height / 2 + 40)
        }
    }
let lastLoopTime = Date.now();

function gameLoop () {
    const now = Date.now();
    const delta = now-lastLoopTime;
    lastLoopTime = now;

    update(delta);
    render();
    
    window.requestAnimationFrame(gameLoop);
}


reset();
gameLoop();

window.addEventListener('keydown',(event) => {
        input[event.key] = true;
    });

window.addEventListener('keyup', (event) => {
        input[event.key] = false;
    });

