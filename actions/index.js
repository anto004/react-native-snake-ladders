export const MOVE_PLAYER = "move_player";
export const MOVE_PLAYER_1 = "move_player_1";

// TODO:
// Two arguments fromPosition and toPosition
// toPosition is the sum of the fromPosition and the dice output
export const movePlayer = (position) => ({
	type: MOVE_PLAYER,
	position,
});

export const movePlayer1 = (fromPosition, toPosition) => ({
	type: MOVE_PLAYER_1,
	fromPosition,
	toPosition,
});
