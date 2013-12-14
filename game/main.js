function init() {
	//Globals
	STAGE_WIDTH = 800;
	STAGE_HEIGHT = 600;

	var canvas = document.getElementById("game");
	stage = new createjs.Stage(canvas);

	level = levelTools.create(); 
	player = createPlayer();

	// Draw any updates that have happened
	createjs.Ticker.addEventListener("tick", update);
	// Listen to any inputs
	playerMovement(stage, level);
}

function update(event)
{
	//TODO:Player access index.
	stage.removeAllChildren();
	draw.update();
	stage.update();
}
