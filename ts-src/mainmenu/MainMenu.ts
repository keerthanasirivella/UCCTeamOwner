import * as PIXI from "pixi.js";
import * as PixiTextInput from "../lib/PixiTextInput.js";
import Controller from "../controller/Controller";
import Button from "../common/Button";

export default class MainMenu extends PIXI.Container {
	private _controller : Controller;
	private _bg : PIXI.Sprite;
	private _text : PixiTextInput;
	//private _teamRoster : PixiTextInput;
	// private _tournament : PixiTextInput;
	// private _stats : PixiTextInput;
	// private _invites : PixiTextInput;
	// private _auction : PixiTextInput;
	private _buttons : Array<Button>;

	private _btnConfig : Array<object> = [
		{
			"name" : "btnTeamRoaster",
			"description" : "TeamRoster",
			"bgPath" : "../../assets/OwnerMainMenu/BTN_LargeButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_TeamRosterIcon.png",
			"data" : {},
			"position" : {"x" : 1.8, "y" : 165}
		},
		{
			"name" : "btnTournament",
			"description" : "Tournament",
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_TournamentIcon.png",
			"data" : {},
			"position" : {"x" : 0.3, "y" : 350}
		},
		{
			"name" : "btnInvites",
			"description" : "Invites",
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_InvitesIcon.png",
			"data" : {},
			"position" : {"x" : 190, "y" : 350}
		},
		{
			"name" : "btnStats",
			"description" : "Stats",
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_StastsIcon.png",
			"data" : {},
			"position" : {"x" : 0.5, "y" : 520}
		},
		{
			"name" : "btnAuction",
			"description" : "Auction",
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_AcutionIcon.png",
			"data" : {},
			"position" : {"x" : 190, "y" : 520}
		}



		/*,
		{
			"name" : "btnTournament",
			"path" : "../../assets/OwnerMainMenu/SPR_TournamentIcon.png",
			"data" : {},
			"position" : {"x" : 11, "y" : 20}
		},
		{
			"name" : "btnInvites",
			"path" : "../../assets/OwnerMainMenu/SPR_InvitesIcon.png",
			"data" : {},
			"position" : {"x" : 1.5, "y" : 1.5}
		},
		{
			"name" : "btnStats",
			"path" : "../../assets/OwnerMainMenu/SPR_StastsIcon.png",
			"data" : {},
			"position" : {"x" : 0, "y" : 225}
		},
		{
			"name" : "btnAuction",
			"path" : "../../assets/OwnerMainMenu/SPR_AcutionIcon.png",
			"data" : {},
			"position" : {"x" : 0, "y" : 275}
		}*/
	];

	// constructor(controller:Controller)
	// {
	// 	super();
	// 	console.log("creating buttons");
	// 	this._controller = controller ;

	// 	this._bg = PIXI.Sprite.fromImage("../../assets/bg.jpg");
	// 	this.addChild(this._bg);

	// 	this._buttons = [];

	// 	for(var i=0; i<this._btnConfig.length; i++)
	// 	{
	// 		var button : Button;
	// 		button = new Button(this._btnConfig[i]["name"], this._btnConfig[i]["path"], (name, data)=>{this.callback(name, data)}, this._btnConfig[i]["data"]);
	// 		button.x = this._btnConfig[i]["position"]["x"];
	// 		button.y = this._btnConfig[i]["position"]["y"];

	// 		this._buttons.push(button);
	// 		this.addChild(button);
	// 	}

	// }

	


	constructor(controller:Controller)
	{
		super();
		console.log("Creating main menu");
		this.name = "ownerMainMenu";
		this._controller = controller;
		this.drawButtons();
		//this.drawContent();
	}

	private drawButtons()
	{
		this._bg = PIXI.Sprite.fromImage("../../assets/bg.jpg");
		this._bg.position.x = 450;
		this._bg.position.y = 0;
		//this.addChild(this._bg);
		for(var i=0; i<this._btnConfig.length; i++)
		{
			var button : Button;
			button = new Button(this._btnConfig[i]["name"], this._btnConfig[i]["bgPath"], this._btnConfig[i]["originalPath"], (name, data)=>{this.callback(name,data)}, this._btnConfig[i]["data"]);
			button.x = this._btnConfig[i]["position"]["x"];
			button.y = this._btnConfig[i]["position"]["y"];
			this.drawContent(button , this._btnConfig[i]["description"]);
			this._bg.addChild(button);
		}
		this.addChild(this._bg);
	}

	private drawContent(button : Button , name : String){
		console.log("In draw content");
		this._text = new PixiTextInput(name, {fontFamily : 'Arial', fontSize: 18, fill : 0xffffff, align : 'center'});
		this._text.background = false;
		this._text.width = 300-60;
		this._text.x = 45+70;
		this._text.y = 150-20;
		button.addChild(this._text);
	}
	private callback(name:string, data:object){
		this._controller.handleMainMenuButtons(name, data);
	}

}
