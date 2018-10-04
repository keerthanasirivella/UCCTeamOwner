import * as PIXI from "pixi.js";
import * as GSBridge from "../lib/GS_SDK_Bridge";
import Controller from "../controller/Controller";

export default class Roster extends PIXI.Container{
	private _controller : Controller;
	private _bg : PIXI.Sprite;
	private _panel : PIXI.Sprite;
	private _panelHeader : PIXI.Sprite;
	private _bgHeader : PIXI.Sprite;
	private _homeIcon : PIXI.Sprite;
	private _text : PIXI.Text;
	private _headerContentConfig : Array<object> = [
		{
			"name" : "PLAYER NAME",
			"x" : 150,
			"y" : 30
		},
		{
			"name" : "M",
			"x" : 550,
			"y" : 30
		},
		{
			"name" : "W",
			"x" : 620,
			"y" : 30
		},
		{
			"name" : "D",
			"x" : 690,
			"y" : 30
		},
		{
			"name" : "L",
			"x" : 760,
			"y" : 30
		},
		{
			"name" : "COINS",
			"x" : 830,
			"y" : 30
		}
	];
	constructor(controller : Controller){
		super();
		this.name = "teamRoster";
		this._controller = controller;
		this.drawBg();
		this.addBgHeader();
		this.addPanel();

	}

	private drawBg(){
		this._bg = PIXI.Sprite.fromImage("../../assets/bg.jpg");
		this._bg.x = 500;
		/*this._bg.y = 0;*/
		this.addChild(this._bg);
	}

	private addBgHeader()
	{
		this._bgHeader = PIXI.Sprite.fromImage("../../assets/AllTournament/SPR_Header.png");
		this._bgHeader.scale.set(0.375,0.4);
		this._bgHeader.position.x = 0;
		this._bgHeader.position.y = -17;
		this._homeIcon = PIXI.Sprite.fromImage("../../aasets/AllTournament/SPR_HomeIcon.png");
		this._homeIcon.position.x = 20;
		var _clubIcon = PIXI.Sprite.fromImage("../..assets/TeamLeaderboard/SPR_MonthlyGoldTournamentIcon.png");
		_clubIcon.position.x = 70;
		this._bgHeader.addChild(this._homeIcon);
		this._bgHeader.addChild(_clubIcon);
		var _clubName = new PIXI.Text("Fans Club", {fontFamily : 'Arial', fontSize: 35, fill : 'yellow', align : 'center'});
		this._bgHeader.addChild(_clubName);
		this._bg.addChild(this._bgHeader);
	}

	private addPanel(){
		this._panel = PIXI.Sprite.fromImage("../../assets/AllTournament/BKG_ListPanel.png");
		// this._panel.scale.x = this._bg.scale.x-10;
		// this._panel.scale.y = this._bg.scale.y-10;
		this._panel.scale.set(0.375,0.375);
		
		this._panelHeader = PIXI.Sprite.fromImage("../../assets/TeamLeaderboard/SPR_PopUpHeader.png");
		this._panelHeader.position.x = 28;
		this._panelHeader.position.y = 198;
		this.drawHeaderContent();
		this._panel.addChild(this._panelHeader);
		
		//this.addChild(this._panel);
		this._bg.addChild(this._panel);
	}

	private drawHeaderContent(){
		for(var i=0; i<this._headerContentConfig.length; i++)
		{
			this._text = new PIXI.Text(this._headerContentConfig[i]["name"], {fontFamily : 'Arial', fontSize: 35, fill : 'yellow', align : 'center'});
			this._text.x = this._headerContentConfig[i]["x"];
			this._text.y = this._headerContentConfig[i]["y"];
			this._panelHeader.addChild(this._text);
		}
	}
}