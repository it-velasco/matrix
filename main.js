
const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");

const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");

const fontSize = 20;
const columns = Math.floor(window.innerWidth / fontSize);
const charSet = "0123456789abcdefghijklmnopqrstuvwxyz!§$%&/()=?ßüäö+*~#'-_.:,;<>|"; //can expand this with more characters
const matrix = [];

function resizeCanvas() {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.font = fontSize + "px 'Courier New', monospace";
  ctx.fillStyle = "#0F0"; // Green text color

  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;

  //text 1
  var textSize = Math.round(canvas2.width / 35);
  ctx2.font = textSize + 'px "Courier New", monospace'; // Customize as per your need
  ctx2.fillStyle = 'white'; // Text color
  ctx2.fillText('Hello, World!', window.innerWidth * 0.1, canvas.height * 0.1); // Customize text and position

  //text 2
  var textSize = Math.round(canvas2.width / 25);
  ctx2.font = textSize + 'px "Courier New", monospace'; // Customize as per your need
  ctx2.fillStyle = 'white'; // Text color
  ctx2.fillText("I'm Jonathan Velasco!", window.innerWidth * 0.1, canvas.height * 0.30);
  ctx2.fillText("IT specialist", window.innerWidth * 0.1, canvas.height * 0.4);
  ctx2.fillText("Software Developer", window.innerWidth * 0.1, canvas.height * 0.5);
  ctx2.fillText("", window.innerWidth * 0.1, canvas.height * 0.6);



  // Email text details
  var emailText = 'jonathan@it-velasco.com';
  var textSize = Math.round(canvas2.width / 30);
  var textX = canvas2.width * 0.1;
  var textY = canvas2.height * 0.80;
  var isHovering = false; // Track hover state

  function drawEmailText(highlight) {
    ctx2.font = textSize + 'px "Courier New", monospace';
    ctx2.fillStyle = highlight ? 'blue' : 'white'; // Change color on hover
    ctx2.fillText(emailText, textX, textY);
  }

  // Initial drawing
  drawEmailText(false);

  // Measure text
  var textSizeMetrics = ctx2.measureText(emailText);
  var textWidth = textSizeMetrics.width;
  var textHeight = textSize;

  canvas2.addEventListener('mousemove', function (event) {
    var rect = canvas2.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Check if hover is within text boundaries
    if (x > textX && x < textX + textWidth && y > textY - textHeight && y < textY) {
      if (!isHovering) {
        isHovering = true;
        drawEmailText(true); // Highlight text
        canvas2.style.cursor = 'pointer'; // Change cursor to pointer
      }
    } else {
      if (isHovering) {
        isHovering = false;
        drawEmailText(false); // Revert to original style
        canvas2.style.cursor = 'default'; // Reset cursor to default
      }
    }
  });

  canvas2.addEventListener('click', function (event) {
    // Use the same logic to check click position
    if (isHovering) {
      window.location.href = 'mailto:jonathan@it-velasco.com'; // Open default mail client
    }
  });



}

//matrix
for (let i = 0; i < columns; i++) {
  matrix[i] = Math.floor(Math.random() * canvas.height);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#008000";

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


// Initial resize
resizeCanvas();

// Add event listener to resize canvas on window resize
window.addEventListener('resize', resizeCanvas);
