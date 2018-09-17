animatecolor = () => setInterval(changeColor, 2000);
// Selects a background color from a set of random colors at intervals
changeColor = () => {
  let rainbowText = document.getElementsByClassName('rainbow');
  let bgcolors1 = ['#fd3', '#f0532c', '#3db161', '#e8c0ff'];
  let bgcolors2 = ['#FF00FF', '#000080', '#008080', '##00FFFF'];
  let bgcolors3 = ['#000000', '#808000', '#FF5733', '#bd9986'];
  let bgcolor1 = bgcolors1[Math.floor(Math.random() * bgcolors1.length)];
  let bgcolor2 = bgcolors2[Math.floor(Math.random() * bgcolors2.length)];
  let bgcolor3 = bgcolors3[Math.floor(Math.random() * bgcolors3.length)];
    // document.body.style.background = bgcolor;

    rainbowText[0].style.color = bgcolor1;
    rainbowText[1].style.color = bgcolor2;
    rainbowText[2].style.color = bgcolor3;
    rainbowText[3].style.color = bgcolor2;
    rainbowText[4].style.color = bgcolor1;
    rainbowText[5].style.color = bgcolor3;
    rainbowText[6].style.color = bgcolor2;
    rainbowText[7].style.color = bgcolor1;
    rainbowText[8].style.color = bgcolor3;
    rainbowText[9].style.color = bgcolor2;
}
animatecolor();



const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 10 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
