let canva = document.getElementById("canvas");
console.log(canva);
let ctx = canva.getContext("2d");

// rectengle
ctx.fillStyle = "green";
ctx.fillRect(10,10,200,200);

//circle
ctx.strokeStyle = "red";
ctx.strokeRect(10,10,200,200);
ctx.arc(300,200,50,0,2*Math.PI);
ctx.strokeStyle = "black";
ctx.fill();
ctx.stroke();

//line
ctx.moveTo(300,300);
ctx.lineTo(300,400);
ctx.lineTo(400,400);
ctx.lineTo(300,300);
ctx.strokeStyle = "red";
ctx.stroke();

// font 
let font = document.getElementById("text");
console.log(font);
let t = font.getContext("2d");
t.font = "50px arial";
t.fillStyle = "Green";
t.fillText("Learn For Canvas API" ,50,300);
t.strokeStyle = "black";
t.strokeText("Learn For Canvas API" ,50,300);

// linear gradient
let gradient = t.createLinearGradient(100,50,500,0);
gradient.addColorStop(0,"red");
gradient.addColorStop(1,"orange");
t.strokeStyle = gradient;
t.strokeRect(200,50,200,200);

t.fillStyle = gradient;
t.font = "25px arial";
t.fillText("Hello World!!",230,170);

// radial gradient
let gradient1 = t.createRadialGradient(40,40,10,55,50,50);
gradient1.addColorStop(0,"orange");
gradient1.addColorStop(0.9,"red");
gradient1.addColorStop(1,"white");

t.fillStyle = gradient1;
t.fillRect(0,0,200,200);

// Emoji 
  var c = document.getElementById("emoji");
  var context = c.getContext("2d");
 
  context.beginPath();
  context.arc(250, 250, 200,0,Math.PI*2, true);
  context.fillStyle = "yellow";
  context.fill();

  context.beginPath();
  context.arc(200,200,30,0,2*Math.PI,true);
  context.arc(300,200,30,0,2*Math.PI,true);
  context.fillStyle = '#000000';
  context.fill();

  context.beginPath();
  context.arc(250,290,100,0,1*Math.PI,false);
  context.stroke();  
    
