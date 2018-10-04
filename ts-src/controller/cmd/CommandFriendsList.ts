import Controller from "../Controller";

export default class CommandLogin{
	private _controller:Controller;
	 constructor(controller:Controller){
	 	this._controller = controller;
	 }

	 public execute(data:{}){
	 	this._controller.server.getFriendList(data, this.callback);
	 }

	 private callback(response)
	 {
	 	console.log(JSON.stringify(response));
	 }
}
