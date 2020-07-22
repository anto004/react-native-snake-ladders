export const MOVE_PLAYER = "move_player";
export const MOVE_PLAYER_TO_START = "move_player_to_start";
export const RESET_PLAYERS = "reset_players";

// Arguments fromPosition and toPosition
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

export const resetPlayers = () => ({
	type: RESET_PLAYERS,
});
