// Preferenses
let val = 0;
let	timeup = 20;
const scale = 1;	// Minimum 1

// Code
let
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	xi = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#ff0000';
ctx.fillStyle = '#222222';

function reset() {
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	xi = 0
}

setInterval(function() {
	ctx.lineTo(xi, val * scale);
	ctx.stroke();
	(xi < canvas.width ? xi++ : reset());
}, timeup);

// Event to update value <val>
// They can be different, absolutely any.
// For example, any of your programs that puts in <val> any computations
// 
// For example:
canvas.addEventListener('mousemove', function(e) {
	val = e.clientY;
});