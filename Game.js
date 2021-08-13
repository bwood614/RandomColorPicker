let canvas = document.getElementById("myCanvas");

function getRandInt(limit) {
  return Math.floor(Math.random() * limit);
}

let balls = [];

function createBalls(count, radius, speed) {
  balls = [];
  const num_balls = count;

  for (let i = 0; i < num_balls; i++) {
    balls.push(
      new Ball(
        canvas,
        getRandInt(canvas.width),
        getRandInt(canvas.height),
        radius,
        speed
      )
    );
  }
}

function updateScreen() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = 0; j < balls.length; j++) {
      if (i !== j) {
        if (isCollidingWith(balls[i], balls[j])) {
          balls[i].color = balls[j].color;

          // balls[0].color = "red";
          // balls[1].color = "blue";
        }
      }
    }
  }

  balls.forEach((ball) => {
    ball.update();
  });
}

function drawScreen() {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    ball.draw();
  });
}

let gameLoop = null;

function startGame(count, radius, speed) {
  if (gameLoop) {
    clearInterval(gameLoop);
  }
  createBalls(count, radius, speed);
  gameLoop = setInterval(() => {
    updateScreen();
    drawScreen();
  }, 50 - speed / 2);
}
