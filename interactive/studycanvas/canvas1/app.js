const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 50, 50); // x:10, y:10, w:50, h:50

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50); // x:30, y:30, w:50, h:50

ctx.strokeRect(100, 100, 20, 20); // 윤곽선
ctx.clearRect(35, 35, 20, 20); // 삭제

ctx.fillStyle = "rgb(200,0,0)";
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.closePath();
ctx.stroke();
// ctx.fill();

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.stroke();

console.log(Math.PI);

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
    ctx.beginPath();
    var x = 25 + j * 50; // x 좌표
    var y = 25 + i * 50; // y 좌표
    var radius = 20; // 반지름
    var startAngle = 0; // 시작 각도
    var endAngle = Math.PI + (Math.PI * j) / 2; // 끝 지점
    var anticlockwise = i % 2 == 0 ? false : true; // 방향

    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}

ctx.lineWidth = 10;
ctx.fillStyle = "rgb(0,0,0)";

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
