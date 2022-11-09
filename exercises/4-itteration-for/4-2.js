"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubbles();

function drawBubbles(){
    for(let i = 0; i < 100; i++){
        context.beginPath();
        let r = Math.floor(Math.random *225);
        let g = Math.floor(Math.random *225);
        let b = Math.floor(Math.random *225);
        let color = "rgb(" + r + "," + g + "," + b + ")";
        let x = (Math.random()) * (width);
        let y = (Math.random())  * (height);
        let radius = Math.random() * 50;
        context.fillStyle = color;
        context.ellipse(x,y,radius,radius,0,0,360);
        context.fillStyle = color;
        context.fill();
    }


}


