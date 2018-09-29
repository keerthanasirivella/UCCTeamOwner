import * as PIXI from "pixi.js";
import Canvas from "./Canvas";
import Controller from "./controller/Controller";


var _canvas:Canvas;
var _controller:Controller;

window.onload = function(){
	
	var app = new PIXI.Application(1280, 720, {backgroundColor : 0xffffff});
	document.body.appendChild(app.view);
	_controller = new Controller(this);
	_canvas = new Canvas(_controller);
	_controller.canvas = _canvas;
	app.stage.addChild(_canvas);
}
