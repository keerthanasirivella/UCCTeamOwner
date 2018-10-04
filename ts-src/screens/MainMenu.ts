import * as PIXI from "pixi.js";
//import * as PixiTextInput from "../lib/PixiTextInput.js";
import Controller from "../controller/Controller";
import Button from "../common/Button";

export default class MainMenu extends PIXI.Container {
	private _controller : Controller;
	private _bg : PIXI.Sprite;
	//private _text : PixiTextInput;
	private _text : PIXI.Text;
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
			"descriptionPosition" : {"x" : 250 , "y" : 130},
			"bgPath" : "../../assets/OwnerMainMenu/BTN_LargeButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_TeamRosterIcon.png",
			"data" : {},
			"position" : {"x" : 1.8, "y" : 165}
		},
		{
			"name" : "btnTournament",
			"description" : "Tournament",
			"descriptionPosition" : {"x" : 100 , "y" : 130},
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_TournamentIcon.png",
			"data" : {},
			"position" : {"x" : -10, "y" : 350}
		},
		{
			"name" : "btnInvites",
			"description" : "Invites",
			"descriptionPosition" : {"x" : 140 , "y" : 130},
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_InvitesIcon.png",
			"data" : {
				"eventKey": "GetFriendsData",
  				"gameCode": "Cricket"
			},
			"position" : {"x" : 190, "y" : 350}
		},
		{
			"name" : "btnStats",
			"description" : "Stats",
			"descriptionPosition" : {"x" : 155 , "y" : 130},
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_StastsIcon.png",
			"data" : {},
			"position" : {"x" : -10, "y" : 520}
		},
		{
			"name" : "btnAuction",
			"description" : "Auction",
			"descriptionPosition" : {"x" : 140 , "y" : 130},
			"bgPath" : "../../assets/OwnerMainMenu/BTN_SmallButtonPanel.png",
			"originalPath" : "../../assets/OwnerMainMenu/SPR_AcutionIcon.png",
			"data" : {},
			"position" : {"x" : 190, "y" : 520}
		}
	];


	constructor(controller:Controller)
	{
		super();
		console.log("Creating main menu");
		this.name = "ownerMainMenu";
		this._controller = controller;
		this.drawBg();
		this.drawButtons();
	}

	private drawBg(){
		this._bg = PIXI.Sprite.fromImage("../../assets/bg.jpg");
		this._bg.position.x = 450;
		this._bg.position.y = 0;
		this.addChild(this._bg);
	}

	private drawButtons()
	{
		for(var i=0; i<this._btnConfig.length; i++)
		{
			var button : Button;
			button = new Button(this._btnConfig[i]["name"], this._btnConfig[i]["bgPath"], this._btnConfig[i]["originalPath"], (name, data)=>{this.callback(name,data)}, this._btnConfig[i]["data"]);
			button.x = this._btnConfig[i]["position"]["x"];
			button.y = this._btnConfig[i]["position"]["y"];
			this.drawContent(button , this._btnConfig[i]["description"], this._btnConfig[i]["descriptionPosition"]);
			this._bg.addChild(button);
		}
		this.addChild(this._bg);
	}

	private drawContent(button : Button , name : string , position : object){
		console.log("In draw content");
		this._text = new PIXI.Text(name, {fontFamily : 'Arial', fontSize: 18, fill : 0xffffff, align : 'center'});
		this._text.x = position["x"];
		this._text.y = position["y"];
		button.addChild(this._text);
	}
	private callback(name:string, data:object){
		this._controller.handleMainMenuButtons(name, data);
	}

}
