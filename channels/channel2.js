//JV1.01
const canvas3 = document.getElementById("canvas3");
const canvas4 = document.getElementById("canvas4");

const ctx3 = canvas3.getContext("2d");
const ctx4 = canvas4.getContext("2d");


const charSet = "0123456789abcdefghijklmnopqrstuvwxyz!§$%&/()=?ßüäö+*~#'-_.:,;<>|"; //can expand this with more characters
const fontSize = 20;
var columns = Math.floor(window.innerWidth / fontSize);
var matrix = [];

function resizeCanvas3() {

  columns = Math.floor(window.innerWidth / fontSize);
  matrix = [];

  canvas3.width = window.innerWidth;
  canvas3.height = window.innerHeight;
  ctx3.font = fontSize + "px 'Courier New', monospace";
  ctx3.fillStyle = "#000"; // Green text color

  canvas4.width = window.innerWidth;
  canvas4.height = window.innerHeight;

  //text 1
  var textSize = Math.round(canvas4.width / 25);
  ctx4.font = textSize + 'px "Courier New", monospace'; // Customize as per your need
  ctx4.fillStyle = 'white'; // Text color
  ctx4.fillText('Info:', window.innerWidth * 0.1, canvas3.height * 0.1); // Customize text and position

  //text 2
  var textSize = Math.round(canvas4.width / 25);
  ctx4.font = textSize + 'px "Courier New", monospace'; // Customize as per your need
  ctx4.fillStyle = 'white'; // Text color
  ctx4.fillText("This site is", window.innerWidth * 0.1, canvas3.height * 0.30);
  ctx4.fillText("", window.innerWidth * 0.1, canvas3.height * 0.4);
  ctx4.fillText("    ...for testing only.", window.innerWidth * 0.1, canvas3.height * 0.5);
  ctx4.fillText("                 bye bye!", window.innerWidth * 0.1, canvas3.height * 0.6);



  // Email text details ***********************************
  var emailText = 'E-mail';
  var textSize = Math.round(canvas4.width / 15);
  var textX = canvas4.width * 0.1;
  var textY = canvas4.height * 0.80;
  var isHovering = false; // Track hover state

  function drawEmailText(highlight) {
    ctx4.font = textSize + 'px "Courier New", monospace';
    ctx4.fillStyle = highlight ? 'green' : 'white'; // Change color on hover
    ctx4.fillText(emailText, textX, textY);
  }

  // Initial drawing
  drawEmailText(false);

  // Measure text
  var textSizeMetrics = ctx4.measureText(emailText);
  var textWidth = textSizeMetrics.width;
  var textHeight = textSize;

  canvas4.addEventListener('mousemove', function (event) {
    var rect = canvas4.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Check if hover is within text boundaries
    if (x > textX && x < textX + textWidth && y > textY - textHeight && y < textY) {
      if (!isHovering) {
        isHovering = true;
        drawEmailText(true); // Highlight text
        canvas4.style.cursor = 'pointer'; // Change cursor to pointer
      }
    } else {
      if (isHovering) {
        isHovering = false;
        drawEmailText(false); // Revert to original style
        canvas4.style.cursor = 'default'; // Reset cursor to default
      }
    }
  });

  canvas4.addEventListener('click', function (event) {
    // Use the same logic to check click position
    if (isHovering) {
      window.location.href = 'mailto:jonathan@it-velasco.com'; // Open default mail client
    }
  });

  // Channel text details ***********************
  var channelText = 'Ch. 1';
  var channelSize = Math.round(canvas4.width / 25);
  var chTextX = canvas4.width * 0.7;
  var chTextY = canvas4.height * 0.10;
  var chIsHovering = false; // Track hover state

  function drawchannelText(highlight) {
    ctx4.font = channelSize + 'px "Courier New", monospace';
    ctx4.fillStyle = highlight ? 'blue' : 'white'; // Change color on hover
    ctx4.fillText(channelText, chTextX, chTextY);
  }

  // Initial drawing
  drawchannelText(false);

  // Measure text
  var channelSizeMetrics = ctx4.measureText(channelText);
  var channelTextWidth = channelSizeMetrics.width;
  var channelTextHeight = channelSize;

  canvas4.addEventListener('mousemove', function (event) {
    var rect = canvas4.getBoundingClientRect();
    var xCh = event.clientX - rect.left;
    var yCh = event.clientY - rect.top;

    // Check if hover is within text boundaries
    if (xCh > chTextX && xCh < chTextX + channelTextWidth && yCh > chTextY - channelTextHeight && yCh < chTextY) {
      if (!chIsHovering) {
        chIsHovering = true;
        drawchannelText(true); // Highlight text
        canvas4.style.cursor = 'pointer'; // Change cursor to pointer
      }
    } else {
      if (chIsHovering) {
        chIsHovering = false;
        drawchannelText(false); // Revert to original style
        canvas4.style.cursor = 'default'; // Reset cursor to default
      }
    }
  });

  canvas4.addEventListener('click', function (event) {
    // Use the same logic to check click position
    if (chIsHovering) {
      window.location.href = '../index.html'; // Open default mail client
    }
  });

  var img = new Image();
img.src = './oldtv.png';
img.onload = function() {
  ctx3.drawImage(img, 0, 0, canvas3.width, canvas3.height);
};

}


function update() {
  requestAnimationFrame(update);
}

update();

// Initial resize
resizeCanvas3();

// Add event listener to resize canvas on window resize
window.addEventListener('resize', resizeCanvas3);
