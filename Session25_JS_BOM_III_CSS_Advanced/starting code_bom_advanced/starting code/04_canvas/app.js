document.getElementById("canvas");

const ctx = canvas.getContext('2d');

// fillRect x y width heigth ..
ctx.fillStyle = 'blue';
ctx.fillRect(20, 20, 100, 200);
ctx.fillStyle = 'red';
ctx.fillRect(200, 20, 100, 200);

