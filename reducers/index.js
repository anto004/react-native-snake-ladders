import {
	MOVE_PLAYER,
	MOVE_PLAYER_1,
	MOVE_PLAYER_2,
	MOVE_PLAYER_TO_START,
	RESET_PLAYERS,
} from "../actions/index";

export const RED = "red";
export const GREEN = "green";
export const BLUE = "blue";
export const YELLOW = "yellow";
//const initialState = [
//	[
//		{ id: 15, p1: false, p2: false, p3: false, p4: false },
//		{ id: 14, p1: false, p2: false, p3: false, p4: false },
//		{ id: 13, p1: false, p2: false, p3: false, p4: false },
//		{ id: 12, p1: false, p2: false, p3: false, p4: false },
//	],
//	[
//		{ id: 11, p1: false, p2: false, p3: false, p4: false },
//		{ id: 10, p1: false, p2: false, p3: false, p4: false },
//		{ id: 9, p1: false, p2: false, p3: false, p4: false },
//		{ id: 8, p1: false, p2: false, p3: false, p4: false },
//	],
//	[
//		{ id: 7, p1: false, p2: false, p3: false, p4: false },
//		{ id: 6, p1: false, p2: false, p3: false, p4: false },
//		{ id: 5, p1: false, p2: false, p3: false, p4: false },
//		{ id: 4, p1: false, p2: false, p3: false, p4: false },
//	],
//	[
//		{ id: 0, p1: true, p2: true, p3: true, p4: true },
//		{ id: 1, p1: false, p2: false, p3: false, p4: false },
//		{ id: 2, p1: false, p2: false, p3: false, p4: false },
//		{ id: 3, p1: false, p2: false, p3: false, p4: false },
//	],
//];

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

export default game = (state = initialState, action) => {
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

		// Test values
		//{ row: 0, col: 0 },
		//{ row: 0, col: 1 },
		//{ row: 0, col: 2 },
		//{ row: 0, col: 3 },
	];

	const { player, fromPosition, toPosition } = action;
	const newPosition = direction[toPosition];
	const oldPosition = direction[fromPosition];

	switch (action.type) {
		case MOVE_PLAYER_1:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				p1: true,
			};

			state[oldPosition.row][oldPosition.col] = {
				...state[oldPosition.row][oldPosition.col],
				p1: false,
			};

			return [...state];

		case MOVE_PLAYER_2:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				p2: true,
			};

			state[oldPosition.row][oldPosition.col] = {
				...state[oldPosition.row][oldPosition.col],
				p2: false,
			};

			return [...state];

		case MOVE_PLAYER:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				[player]: true,
			};

			state[oldPosition.row][oldPosition.col] = {
				...state[oldPosition.row][oldPosition.col],
				[player]: false,
			};
			//console.log("state: ", state);
			return [...state];

		case MOVE_PLAYER_TO_START:
			state[newPosition.row][newPosition.col] = {
				...state[newPosition.row][newPosition.col],
				[player]: true,
			};
			//console.log("state", state);
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
