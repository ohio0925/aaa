ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py) {
      tail = MIN;
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py) {
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    count = 1;
  }
  if (bappleX == px && bappleY == py) {
    tail = tail + 2;
    count = 0;
    bappleX = Math.floor(Math.random()*canv.width/SIZE);
    bappleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  console.log(count);
  if(count == 1) {
    ctx.fillStyle = "blue";
    ctx.fillRect(bappleX*SIZE, bappleY*SIZE, SIZE-2, SIZE-2);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
}, 1000/FPS);
setInterval(function(){
  count = 0;
},7000);
