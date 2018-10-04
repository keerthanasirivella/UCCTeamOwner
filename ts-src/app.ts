import * as PIXI from "pixi.js";
import Canvas from "./Canvas";
import Controller from "./controller/Controller";
import Server from "./Server";


var _canvas:Canvas;
var _controller:Controller;
var _server:Server;

window.onload = function(){
	
	var app = new PIXI.Application(1280, 720, {backgroundColor : 0xffffff});
	document.body.appendChild(app.view);
	_controller = new Controller(this);
	_canvas = new Canvas(_controller);
	_controller.canvas = _canvas;
	app.stage.addChild(_canvas);
	_server = new Server(_controller);
	_controller.server = _server;
}
