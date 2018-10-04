import Controller from "../Controller";


export default class CommandLogin {
	private _controller:Controller;
	constructor(controller:Controller) {
		this._controller = controller;
	}

	public execute(username:string, password:string){
		this._controller.server.login(username, password, this.callback);
	}

	private callback(response){
		console.log(JSON.stringify(response));
	}
}