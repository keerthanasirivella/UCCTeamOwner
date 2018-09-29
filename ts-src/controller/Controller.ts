import Canvas from "../Canvas";

export default class Controller {
	private _parent:any;
	private _cmd:any;
	public canvas:Canvas;

	constructor(parent:any) {
		this._parent = parent;
	}

	public handleMainMenuButtons(buttonName : string, data:{}){
		console.log("name" + buttonName);
		console.log("data" + JSON.stringify(data));
	}
}