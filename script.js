const canvas = document.getElementById("canvas");
const body = document.querySelector('body');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let theColor = '';
let lineW = 5;
let prevX = null;
let prevY = null;
let draw = false;

body.style.backgroundColor = "#FFFFFF";
let input = document.getElementById("favColor");

input.addEventListener("input", function(){
    theColor = input.value;
    body.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;



