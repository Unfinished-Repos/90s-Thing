#pragma strict
public var Winning : GameObject;
var Speed = .1;
private var isFalling = false;

function Start () {
	Winning.SetActive (false);
}

function Update() {
	//Computer Version
	if (Input.GetKey ("right")) {
		transform.Translate(Vector3.right * Speed * 2);
	}
	if (Input.GetKey ("left")) {
		transform.Translate(Vector3.right * (Speed * -2));
	}
	if (Input.GetKey ("up")) {
		transform.Translate(Vector3.forward * (Speed * 2));
	}
	if (Input.GetKey ("down")) {
		transform.Translate(Vector3.forward * (Speed * -2));
	}
	if (Input.GetKey ("space") && isFalling == false) {
		transform.Translate(Vector3.up * (Speed * 1));
	}
	//Phone Version
	transform.Translate(Vector3.right * Input.acceleration.x * .5);
	transform.Translate(Vector3.forward * -Input.acceleration.z * .5);
	//other stuff
	
}

function OnCollisionStay (){
	isFalling = false;
}

function OnGui () {
	GUI.skin.box.fontSize = Screen.width/80;
	GUI.Box (new Rect (0, 0, Screen.width/6, Screen.height/16), "Time Wasted: " + Time.timeSinceLevelLoad);
}