var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(150, 150);
ctx.moveTo(0,150);
ctx.lineTo(150, 0);
ctx.closePath();
ctx.stroke();


let home = document.getElementById('home');
let boundindRect = home.getBoundingClientRect();
console.log(boundindRect);


canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message;
        if(mousePos.y > 0 && mousePos.y > mousePos.x && mousePos.y > -mousePos.x){
          message = "haut";
        } else if(mousePos.x > 0 && mousePos.x > mousePos.y && mousePos.x > -mousePos.y){
          message = "droite";
        } else if(mousePos.y < 0 && mousePos.y < mousePos.x && mousePos.y < -mousePos.x){
          message = "bas";
        } else{
          message = "gauche";
        }
        console.log(message);
      }, false);

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left - 75,
          y: -evt.clientY + rect.top + 75
        }
}