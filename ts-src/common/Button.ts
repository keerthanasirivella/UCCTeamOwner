import * as PIXI from "pixi.js";

export default class Button extends PIXI.Container{
	private _bg : PIXI.Sprite;
	private _originalImage : PIXI.Sprite;
	private _data : object;

	constructor( name : string, bgPath : string, originalPath : string, cb : Function, data : {}){
		super();
		this._bg = PIXI.Sprite.fromImage(bgPath);
		this.addChild(this._bg);
		this._originalImage = PIXI.Sprite.fromImage(originalPath);
		this._bg.addChild(this._originalImage);
		this._bg.name = name;
		this.name = name;
		this._data = data;
		this._bg.scale.set(0.375,0.4);
		this._bg.on('pointerdown' , (event) => {
			cb(event.target.name , this._data);
		});
		this.enable();
	}


	public setData(data:object)
	{
		this._data = data;
	}

	public enable(){
		this._bg.interactive = true;
		this._bg.buttonMode = true;
	}

	public disable(){
		this._bg.interactive = false;
		this._bg.buttonMode = false;
	}
}