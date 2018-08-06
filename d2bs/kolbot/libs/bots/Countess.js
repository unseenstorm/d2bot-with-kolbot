/**
*	@filename	Countess.js
*	@author		kolton//unseen
*	@desc		kill The Countess and clear tower depending on config cleartype and skip immune. insead of crash when it don't find countess it clears the level.
*/

function Countess() {
				Town.doChores();
				Pather.useWaypoint(6, true);
				Precast.doPrecast(true);
				Pather.moveToExit([20, 21, 22, 23 ,24 ,25], true, Config.ClearType);
				Precast.doPrecast(true);
				Attack.clearLevel();

	return true;
}
