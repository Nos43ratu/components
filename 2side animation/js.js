var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on("mousemove", function (e) {
  xmouse = e.clientX || e.pageX;
  ymouse = e.clientY || e.pageY;
});

var ball = $("#ball");
var back = $("#backgground");

var x = 0;
var y = 0;

var halfSW = window.innerWidth / 2;
var halfSH = window.innerHeight / 2;
var timestamp = performance.now();
var minFrameDiff = 1000 / 45; // 30FPS

function followMouse(now) {
  var frameDiff = now - timestamp;

  if (
    frameDiff < minFrameDiff ||
    (Math.abs(xmouse - x) < 0.1 && Math.abs(ymouse - y) < 0.1)
  ) {
    requestAnimationFrame(followMouse);
    return;
  }

  timestamp = now;

  if (!x || !y) {
    console.log(x, y);
    x = xmouse;
    y = ymouse;
  } else {
    x += (xmouse - x) * 0.25;
    y += (ymouse - y) * 0.25;
    console.log("kek");
  }

  var speed = Math.min(Math.abs(x - xmouse), 100) / 100;

  back.style.width = 54 - x / (halfSW * 0.25) + "%";
  ball.style.transform = `translate(${x - halfSW}px, ${y - halfSH}px) scale(${
    0.5 + 0.5 * (1 - speed)
  })`;

  requestAnimationFrame(followMouse);
}

followMouse(timestamp);
