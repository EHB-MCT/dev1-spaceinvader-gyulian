"use strict";

spacelnvader();

function spacelnvader() {
   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

    context.fillStyle = 'black';
    context.fillRect(50,50,300,300) ;


    context.fillStyle = 'green';
    context.fillRect(175,125,50,50);

    context.fillStyle = 'green';
    context.fillRect(125,75,50,50);

    context.fillStyle = 'green';
    context.fillRect(225,75,50,50);

    context.fillStyle = 'green';
    context.fillRect(175,175,50,50);

    context.fillStyle = 'green';
    context.fillRect(175,175,50,50);

    context.fillStyle = 'green';
    context.fillRect(175,225,50,50);

    context.fillStyle = 'green';
    context.fillRect(125,225,50,50);

    context.fillStyle = 'green';
    context.fillRect(225,225,50,50);

    context.fillStyle = 'green';
    context.fillRect(125,175,50,50);

    context.fillStyle = 'green';
    context.fillRect(225,175,50,50);
     
    context.fillStyle = 'green';
    context.fillRect(75,175,50,50);

    context.fillStyle = 'green';
    context.fillRect(275,175,50,50);

    context.fillStyle = 'green';
    context.fillRect(75,275,50,50);

    context.fillStyle = 'green';
    context.fillRect(275,275,50,50);

    context.fillStyle = 'green';
    context.fillRect(125,275,50,50);

    context.fillStyle = 'green';
    context.fillRect(225,275,50,50);
}