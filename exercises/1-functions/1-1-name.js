"use strict";

drawName();

function drawName() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
   
//letter O

   context.lineWidth = 5;
   context.strokeStyle = '#0B2027';
   context.beginPath();
   context.moveTo(100, 100);
   context.lineTo(300, 100);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#0B2027';
   context.beginPath();
   context.moveTo(100, 100);
   context.lineTo(100, 300);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#0B2027';
   context.beginPath();
   context.moveTo(100, 300);
   context.lineTo(300, 300);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#0B2027';
   context.beginPath();
   context.moveTo(300, 100);
   context.lineTo(300, 300);
   context.stroke(); 

   //letter L

   context.lineWidth = 5;
   context.strokeStyle = '#646B6E';
   context.beginPath();
   context.moveTo(350, 100);
   context.lineTo(350, 300);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#646B6E';
   context.beginPath();
   context.moveTo(500, 300);
   context.lineTo(350, 300);
   context.stroke(); 

   //letter I

   context.lineWidth = 5;
   context.strokeStyle = '#40798C';
   context.beginPath();
   context.moveTo(550, 300);
   context.lineTo(550, 100);
   context.stroke(); 

   //letter V

   context.lineWidth = 5;
   context.strokeStyle = '#70A9A1';
   context.beginPath();
   context.moveTo(700, 300);
   context.lineTo(600, 100);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#70A9A1';
   context.beginPath();
   context.moveTo(700, 300);
   context.lineTo(800, 100);
   context.stroke(); 

//letter I

   context.lineWidth = 5;
   context.strokeStyle = '#CFD7C7';
   context.beginPath();
   context.moveTo(850, 300);
   context.lineTo(850, 100);
   context.stroke(); 

//letter E

   context.lineWidth = 5;
   context.strokeStyle = '#F6F1D1';
   context.beginPath();
   context.moveTo(900, 100);
   context.lineTo(900, 300);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#F6F1D1';
   context.beginPath();
   context.moveTo(900, 300);
   context.lineTo(1050, 300);
   context.stroke(); 
   
   context.lineWidth = 5;
   context.strokeStyle = '#F6F1D1';
   context.beginPath();
   context.moveTo(900, 200);
   context.lineTo(1050, 200);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#F6F1D1';
   context.beginPath();
   context.moveTo(900, 100);
   context.lineTo(1050, 100);
   context.stroke(); 

   //letter R

   context.lineWidth = 5;
   context.strokeStyle = '#FFF6BC';
   context.beginPath();
   context.moveTo(1100, 100);
   context.lineTo(1100, 300);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#FFF6BC';
   context.beginPath();
   context.moveTo(1100 ,100); 
   context.lineTo(1250, 150);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = '#FFF6BC';
   context.beginPath();
   context.moveTo(1100, 200); 
   context.lineTo(1250 ,150);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = '#FFF6BC';
   context.beginPath();
   context.moveTo(1100 ,200); 
   context.lineTo(1250, 300);
   context.stroke(); 
}


