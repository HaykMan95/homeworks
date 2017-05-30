/**
 * Created by rips on 28.05.2017.
 */

'use strict';

var bool = document.getElementsByClassName("bool")[0];
var first = document.getElementsByClassName("first-player")[0];
var second = document.getElementsByClassName("second-player")[0];
var isPlay = false;

console.log(first.height);

var FPS_COUNT = 50;
var Plaer = function(top) {
    this.top = top;
    this.height = 200;
    this.width = 50;
    this.step = 5;
    this.victory = 0;
}

Plaer.prototype.toUp = function() {
    if(this.top - this.step > 0) {
        this.top -= this.step ;
    }
}

Plaer.prototype.toDown = function() {
    if(this.top + this.height + this.step < GameView.height) {
        this.top += this.step;
    }
}

var PingBool = function() {
    this.top = 0;
    this.left = 425;
    this.direction = 45;
    this.fast = 250;
    this.dir = true;
    this.topStep = 0;
    this.leftStep = 0;
    this.isUp = 1;
    this.width = 50;
}

PingBool.prototype.step = function() {
    this.topStep = this.isUp*this.fast/FPS_COUNT ;
    this.leftStep = this.fast*Math.sin(this.direction)/FPS_COUNT;
    console.log(this.fast*Math.sin(this.direction)/FPS_COUNT)
    if(Math.abs(this.fast*Math.sin(this.direction)/FPS_COUNT) <= 2) {
        this.direction += getRand();
        this.step();
    }
}

PingBool.prototype.replay = function() {
    this.top = 0;
    this.left = 425;
    this.direction += getRand();
    this.dir = true;
}

PingBool.prototype.render = function() {
    if(this.dir) {
        this.step();
        this.dir = false;
    }

    this.top += this.topStep;
    this.left += this.leftStep;
}


var GameView = {
    height: 700,
    width: 900,
}

var pingBool = new PingBool();
var firstPlaer = new Plaer(0);
var secondPlaer = new Plaer(0);
function playGame() {
    if(isPlay) {
        clearInterval(interval);
    } else {
        isPlay = true;
        var interval = setInterval(render, 1000/FPS_COUNT)
    }
}

document.addEventListener("keydown", eventGame, false);



function eventGame(ev) {
    if(isPlay) {
        switch (ev.keyCode) {
            case 87 ://w
                firstPlaer.toUp();
                break;
            case 83://s
                firstPlaer.toDown();
                break;
            case 104://8
                secondPlaer.toUp();
                break;
            case 98://2
                secondPlaer.toDown();
                break;
        }
    }
}

function render() {

    if(pingBool.left < -50) {
        secondPlaer.victory ++;
        reloadVictory();
    } else if(pingBool.left > 425 + 425 + 50) {
        firstPlaer.victory ++;
        reloadVictory();
    } else if(pingBool.top < 0) {
        pingBool.dir = true;
        pingBool.isUp = 1;
        pingBool.render();
    } else if(pingBool.top + pingBool.width > 700) {
        pingBool.dir = true;
        pingBool.isUp = -1;
        pingBool.render();
    } else {
        pingBool.render();
    }
    isOnDiv();

    first.style.top = firstPlaer.top +"px";
    second.style.top = secondPlaer.top +"px";
    bool.style.left = pingBool.left +"px";
    bool.style.top = pingBool.top +"px";
}

function isOnDiv() {
    if(pingBool.left <= 50 && pingBool.left >= 10 && (pingBool.top >= firstPlaer.top && pingBool.top <= firstPlaer.top + firstPlaer.height )) {
        pingBool.direction += getRand();
        pingBool.dir = true;
    } else if( pingBool.left >= 800 && pingBool.left <= 840 && (pingBool.top >= secondPlaer.top && pingBool.top <= secondPlaer.top + firstPlaer.height ) ) {
        pingBool.direction += getRand();
        pingBool.dir = true;
    }
}

function getRand() {
    return Math.random() * (90 - 10) + 10;
}
function reloadVictory() {
    document.getElementsByClassName("count-victory")[0].innerHTML  = firstPlaer.victory + ' - ' + secondPlaer.victory;
    pingBool.replay()
}