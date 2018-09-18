// let social = document.getElementById("socialmedialinks");
// social.addEventListener('mouseover', function () {
//   this.classlist.add('shake');
// });

$(document).ready(function() {
  $('#socialmedialinks').hover(function(){
      $('.fab').addClass('shake');
  });
  $('#socialmedialinks').mouseout(function(){
    $('.fab').addClass('shake');
});
});
var canvas = $("canvas");

var ctx = canvas[0].getContext("2d"),
  width = $(document).width(),
  height = $(document).height(),
  a = 0, b = 0;
let hue = 0;

canvas.attr("width", width);
canvas.attr("height", height);
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

canvas[0].addEventListener("click", draw);
function draw(e) {
  let randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      drawCircle(e);
      break;
    case 1:
      drawRectangle(e);
      break;
    default:
      alert('Its not you, Its us.');
      break;
  }
}

function drawCircle(e) {
  // debugger;
  ctx.globalAlpha = 0.5; // set global alpha
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 70, 0, 2 * Math.PI, false);
  ctx.fillStyle = "red";
  ctx.fill();
};

function drawRectangle(e) {
  ctx.globalAlpha = 0.5; // set global alpha
  ctx.beginPath();
  ctx.rect(e.clientX, e.clientY, 100, 50);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'green';
  ctx.stroke();
};

//MAIN PART
function simulate(e) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
  canvas[0].dispatchEvent(evt);
}

$("body > div").each(function () {
  this.addEventListener("click", simulate);
});
