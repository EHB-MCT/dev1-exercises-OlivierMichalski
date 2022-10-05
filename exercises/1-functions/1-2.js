"use strict";

drawName();

function drawName() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
   
//BOX

   context.lineWidth = 5;
   context.strokeStyle = 'black';
   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(250, 50);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = 'black';
   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(50, 250);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = 'black';
   context.beginPath();
   context.moveTo(50, 250);
   context.lineTo(250, 250);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = 'black';
   context.beginPath();
   context.moveTo(250, 50);
   context.lineTo(250, 250);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(50, 250);
   context.lineTo(250, 50);
   context.stroke(); 

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(250, 250);
   context.lineTo(50, 50);
   context.stroke(); 
}

