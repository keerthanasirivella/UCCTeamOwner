import Controller from "./controller/Controller";
import * as GSBridge from "./lib/GS_SDK_Bridge";


export default class Server{
	
	private _controller:Controller;
	private _sessionId:string;

	constructor(controller:Controller) {
		this._controller = controller;
		GSBridge.GS_SDK_Init((response)=>{this.cb(response)}, (response)=>{this.cbOnMessage(response)});
	}

	public login(username:string, password:string, cb:Function){
		GSBridge.loginEvent(password, username, (response)=>{cb(response)});
	}

	public register(username:string, password:string, confirmPassword:string, referralCode:string, cb:Function){
		GSBridge.registrationEvent(username, username, password, {"appVersion": "1.1.1", "redeemcode":referralCode},(response)=>{cb(response)});
	}

	public getFriendList(data:object, cb:Function)
	{
		GSBridge.GS_Log_Event(data, (response)=>{cb(response)} );
	}

	private cb(response){
		console.log('init response');
		console.log(JSON.stringify(response));
	}

	private cbOnMessage(message){
		switch(message['@class']){
			case '.AuthenticatedConnectResponse':
				if(message['sessionId'] != undefined){
					this._sessionId = message['sessionId'];
					this._controller.canvas.init();
				}
				break;
			default:
				console.log('other response');
				console.log(JSON.stringify(message));
				break;
		}
	}
}