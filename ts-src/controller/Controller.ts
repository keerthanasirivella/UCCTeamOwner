import Canvas from "../Canvas";
import Server from "../Server";
import CommandFriendsList from "./cmd/CommandFriendsList";
import CommandLogin from "./cmd/CommandLogin";


export default class Controller {
	private _parent:any;
	private _cmd:any;
	public canvas:Canvas;
	public server:Server;

	constructor(parent:any) {
		this._parent = parent;
	}

	public handleMainMenuButtons(buttonName : string, data:{}){
		console.log("name" + buttonName);
		console.log("data" + JSON.stringify(data));

		this._cmd = new CommandLogin(this);
		this._cmd.execute("Rajesh","123456");

		switch(buttonName){
			case "btnTeamRoaster" : 
				//code...
				break;
			case "btnTournament" : 
				//code...
				break;
			case "btnInvites" : 
				this._cmd = new CommandFriendsList(this);
				this._cmd.execute(data);
				break;
			case "btnStats" : 
				//code...
				break;
			case "btnAuction" : 
				//code...
				break;
		}
	}
}