export const gamesparks = new GameSparks();

var userName;
var pass;
var _cb;
var _cbOnMessage;

//our Gmesparks Account credentials
var key = "F347674wxuDW",
	secret = "EeF1Nc32zdhqC8389nwu9P2rjWfFeza9",
	credential = "debug";

export function GS_SDK_Init(cb, cbOnMessage){
	_cb = cb;
	_cbOnMessage = cbOnMessage;
	gamesparks.initPreview({
		key: key, 
		secret: secret,
		credential: credential,
		onNonce: onNonce,
		onInit: onInit,
		onMessage: onMessage,
		logger: logger,
	});
}

function logger(){

}

//Callback to handle when the SDK is initialised and ready to go
function onInit() {
	console.log("Initialised");
}

//Callback function to hmac sha256 a nonce with the secret. It's assumed you will have your own method of securing the secret;
function onNonce(nonce) {
	return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, secret));
}

//Callback to handle async messages from the gamesparks platform
function onMessage(message) {
	/*console.log("onMessage");
	console.log(message);*/
	setTimeout( ()=>{_cbOnMessage(message)}, 2000);
}

export function onResponse(response){
	/*console.log('onResponse');
	console.log(JSON.stringify(response));*/
	_cb(response);
}

export function GS_Log_Event(eventJson, cb){
	gamesparks.sendWithData(
		"LogEventRequest", 
    	eventJson, 
    	function(response){
    		console.log(JSON.stringify(response));
    		cb(response);
    	}
	);
}

export function registrationEvent( displayName, userName, password, scriptData, callbackFunctiontoTS ){
	/*console.log("GS_SDK_Bridge :: registrationEvent");
	console.log("displayName: " + displayName);
	console.log("userName: " + userName);
	console.log("password: " + password);
	console.log("scriptData: " + JSON.stringify(scriptData));*/
	_cb = callbackFunctiontoTS;
	gamesparks.registrationRequest( displayName, password, userName, scriptData, onResponse, gamesparks );
}

export function loginEvent(pass, userName, callbackFunctiontoTS){
	_cb = callbackFunctiontoTS;
	gamesparks.authenticationRequest(pass, userName, onResponse, gamesparks);
}