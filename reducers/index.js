import {
	MOVE_PLAYER,
	MOVE_PLAYER_TO_START,
	RESET_PLAYERS,
} from "../actions/index";

export const RED = "red";
export const GREEN = "green";
export const BLUE = "blue";
export const YELLOW = "yellow";

const initialState = [
	[
		{ id: 15, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 14, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 13, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 12, RED: false, GREEN: false, BLUE: false, YELLOW: false },
	],
	[
		{ id: 11, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 10, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 9, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 8, RED: false, GREEN: false, BLUE: false, YELLOW: false },
	],
	[
		{ id: 7, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 6, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 5, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 4, RED: false, GREEN: false, BLUE: false, YELLOW: false },
	],
	[
		{ id: 0, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 1, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 2, RED: false, GREEN: false, BLUE: false, YELLOW: false },
		{ id: 3, RED: false, GREEN: false, BLUE: false, YELLOW: false },
	],
];

const game = (state = initialState, action) => {
	// Move player from last row to 1st row in 1 2 3 4 5  ... sequence
	const direction = [
		{ row: 3, col: 0 },
		{ row: 3, col: 1 },
		{ row: 3, col: 2 },
		{ row: 3, col: 3 },

		{ row: 2, col: 3 },
		{ row: 2, col: 2 },
		{ row: 2, col: 1 },
		{ row: 2, col: 0 },

		{ row: 1, col: 3 },
		{ row: 1, col: 2 },
		{ row: 1, col: 1 },
		{ row: 1, col: 0 },

		{ row: 0, col: 3 },
		{ row: 0, col: 2 },
		{ row: 0, col: 1 },
		{ row: 0, col: 0 },
	];

	const { player, fromPosition, toPosition } = action;
	const newPosition = direction[toPosition];
	const oldPosition = direction[fromPosition];

	switch (action.type) {
		case MOVE_PLAYER:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				[player]: true,
			};

			state[oldPosition.row][oldPosition.col] = {
				...state[oldPosition.row][oldPosition.col],
				[player]: false,
			};

			return [...state];

		case MOVE_PLAYER_TO_START:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				[player]: true,
			};

			return [...state];

		case RESET_PLAYERS:
			return state.map((rows, row) =>
				rows.map((cell, column) => {
					const obj = state[row][column];
					obj[RED] = false;
					obj[GREEN] = false;
					obj[BLUE] = false;
					obj[YELLOW] = false;
					return obj;
				})
			);

		default:
			return state;
	}
};

export default game;
