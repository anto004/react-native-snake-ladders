export const MOVE_PLAYER = "move_player";
export const MOVE_PLAYER_1 = "move_player_1";
export const MOVE_PLAYER_2 = "move_player_2";
export const MOVE_PLAYER_TO_START = "move_player_to_start";

// TODO:
// Two arguments fromPosition and toPosition
// toPosition is the sum of the fromPosition and the dice output
export const movePlayer = (player, fromPosition, toPosition) => ({
	type: MOVE_PLAYER,
	player,
	fromPosition,
	toPosition,
});

export const movePlayerToStart = (player, fromPosition, toPosition) => ({
	type: MOVE_PLAYER_TO_START,
	player,
	fromPosition,
	toPosition,
});

export const movePlayer1 = (fromPosition, toPosition) => ({
	type: MOVE_PLAYER_1,
	fromPosition,
	toPosition,
});

export const movePlayer2 = (fromPosition, toPosition) => ({
	type: MOVE_PLAYER_2,
	fromPosition,
	toPosition,
});
