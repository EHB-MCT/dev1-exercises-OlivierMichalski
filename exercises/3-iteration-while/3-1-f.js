"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 1;
    while (i < 7) {
        context.strokeRect(50 + i * 25, 50 + i * 25, 125, 125);
        i += 1;
    }
}