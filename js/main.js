
$(document).ready(function () {
    'use strict'

    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));
    //todo
    // var c
    // for (var x = 25 ; x < 400 ; x += 50){
    //     for (var y = 25 ; y < 400 ; y += 50){
    //         c= Shape.Circle(x,y,20);
    //         c.fillColor = 'green';
    //     }
    // }

    // var tool = new Tool();
    //
    // tool.onMouseDown = function (event) {
    //     var c = Shape.Circle(event.point.x,event.point.y,20);
    //     c.fillColor = 'green';
    // }


    var c = Shape.Circle(200,200,80);
    c.fillColor = 'black';

    var text = new PointText(200,200);
    text.justification = "center";
    text.fillColor = "white"
    text.fontSize = "20";
    text.content = "hello world"

    paper.view.draw();

    console.log("main.js loaded");

    // sayhello();
    const f = sayhello;
    f();
    var o = {
        message: "init"
    }
    fobject(o);

    console.log("after fobject: o.message:=" + o.message);

});

function sayhello() {
    /**
     * 弹出对话框
     */
    alert(getGreeting());
    console.log("sayhello");
}

function getGreeting() {
    return "Hello world " + avg(3,5);
}

/**
 * 定义函数
 * @param a
 * @param b
 */
function avg(a,b) {
    return (a + b) / 2;
}

function fobject(o) {
    o.message = "fobject";
}

