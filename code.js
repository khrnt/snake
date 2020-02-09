const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "imgs/field.png";

const foodImg = new Image();
foodImg.src = "imgs/carrot.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

function drawGame() {
  ctx.drawImage(ground, 0, 0);

///тут рисуем морковку
  ctx.drawImage(foodImg, food.x, food.y);
///тут рисуем змейку
///for -  цикл, i < snake.lenght - переменная меньше кол-ва эл-ов внутри массива snake, i++ - увеличивает каждый раз на +1
  for(let i = 0; i < snake.lenght; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(snake[i].x, snake)
  }
}

let game = setInterval(drawGame, 100);
