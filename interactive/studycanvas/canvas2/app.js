const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";

let xPos = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 전체 지우기
  ctx.beginPath(); //새로 그리기~
  ctx.fillRect(xPos, 75, 6, 6);
  ctx.fill();
  xPos += 3;
  if (xPos >= 330) {
    xPos = 10;
  }
  requestAnimationFrame(draw); //루프를 통해 매번 새로그림
}
draw();
