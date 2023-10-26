const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fontSize = 20;
const columns = Math.floor(window.innerWidth / fontSize);
const charSet = "0123456789abcdefghijklmnopqrstuvwxyz!§$%&/()=?ßüäö+*~#'-_.:,;<>|"; //can expand this with more characters
const matrix = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = fontSize + "px 'Courier New', monospace";
ctx.fillStyle = "#0F0"; // Green text color

for (let i = 0; i < columns; i++) {
  matrix[i] = Math.floor(Math.random() * canvas.height);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";

  for (let i = 0; i < columns; i++) {
    const text = charSet[Math.floor(Math.random() * charSet.length)];
    ctx.fillText(text, i * fontSize, matrix[i] * fontSize);

    if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    } else {
      matrix[i]++;
    }
  }
}

function update() {
  draw();
  requestAnimationFrame(update);
}

update();


setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}