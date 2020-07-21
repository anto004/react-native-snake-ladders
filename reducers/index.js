import { MOVE_PLAYER_1 } from "../actions/index";

const initialState = [
	[
		{ id: 15, p1: false, p2: false, p3: false, p4: false },
		{ id: 14, p1: false, p2: false, p3: false, p4: false },
		{ id: 13, p1: false, p2: false, p3: false, p4: false },
		{ id: 12, p1: false, p2: false, p3: false, p4: false },
	],
	[
		{ id: 11, p1: false, p2: false, p3: false, p4: false },
		{ id: 10, p1: false, p2: false, p3: false, p4: false },
		{ id: 9, p1: false, p2: false, p3: false, p4: false },
		{ id: 8, p1: false, p2: false, p3: false, p4: false },
	],
	[
		{ id: 7, p1: false, p2: false, p3: false, p4: false },
		{ id: 6, p1: false, p2: false, p3: false, p4: false },
		{ id: 5, p1: false, p2: false, p3: false, p4: false },
		{ id: 4, p1: false, p2: false, p3: false, p4: false },
	],
	[
		{ id: 0, p1: true, p2: true, p3: true, p4: true },
		{ id: 1, p1: false, p2: false, p3: false, p4: false },
		{ id: 2, p1: false, p2: false, p3: false, p4: false },
		{ id: 3, p1: false, p2: false, p3: false, p4: false },
	],
];

export default game = (state = initialState, action) => {
	// Move player from last row to 1st row in 1 2 3 4 5  ... sequence
	const direction = [
		//{ row: 3, col: 0 },
		//{ row: 3, col: 1 },
		//{ row: 3, col: 2 },
		//{ row: 3, col: 3 },

		//{ row: 2, col: 3 },
		//{ row: 2, col: 2 },
		//{ row: 2, col: 1 },
		//{ row: 2, col: 0 },

		//{ row: 1, col: 3 },
		//{ row: 1, col: 2 },
		//{ row: 1, col: 1 },
		//{ row: 1, col: 0 },

		//{ row: 0, col: 3 },
		//{ row: 0, col: 2 },
		//{ row: 0, col: 1 },
		//{ row: 0, col: 0 },

		// Test values
		{ row: 0, col: 0 },
		{ row: 0, col: 1 },
		{ row: 0, col: 2 },
		{ row: 0, col: 3 },
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

		default:
			return state;
	}
};
