import * as PIXI from "pixi.js";
import Controller from "./controller/Controller";
import MainMenu from "./mainmenu/MainMenu";

export default class Canvas extends PIXI.Container {
	private _bg:PIXI.Sprite;
	private _controller:Controller;
	public ownerMainMenu:MainMenu;

	private _currentView:any;

	constructor(controller:Controller) {
		super();
		this._controller = controller;
		// this._bg = PIXI.Sprite.fromImage("../assets/bg.jpg");
		// this._bg.anchor.x = 0;
		// this._bg.anchor.y = 0;
		// this._bg.position.x = 450;
		// this._bg.position.y = 0;
		// this.addChild(this._bg);
		this.ownerMainMenu = new MainMenu(this._controller);
		//this._currentView = this.ownerMainMenu;
		this.addChild(this.ownerMainMenu);
	}
}
