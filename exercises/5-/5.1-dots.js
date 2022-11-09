"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//drawDots();
    //function drawDots(){
  //      for (let i = 0; i < 10000; i++){
 //           Utils.fillCircle(Math.random()*200,Math.random * height, 2);
 //       }  }

    drawDots();

function drawDots() {

    for (let i = 0; i < 80000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if  (x < width / 2){
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        Utils.fillCircle(x, y, 5);
    }
}
//(distance < 0 || distance > 300)