import React, { Component } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Button,
} from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native-elements";
import Grid from "./Grid";
import Dice from "./Dice";
import Players from "./Players";
import Header from "./Header";
import { movePlayer, movePlayerToStart, resetPlayers } from "../actions";
import { getRandomInt } from "../utils/random";
import { GREEN } from "../reducers";

const DICE_MAX = 3;
const SCREEN_WIDTH = Dimensions.get("window").width;
const PLAYER_COLORS = ["red", "green", "blue", "yellow"];

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: 0,
			dice: 3,
			numberPlayers: 1,
			winner: "yellow",
			players: [{ player: "red", position: 0 }],
			redTurn: false,
			greenTurn: false,
			blueTurn: false,
			yellowTurn: false,
			currentPlayerIndex: 0,
		};
	}

	movePlayerP1 = () => {
		// Update grid, dispatch action
		this.props.dispatchMovePlayer1(0, 2);
	};

	onChangePlayerNumbers = (n) => {
		const copy = [];
		if (!Number.isNaN(Number(n)) && Number(n) < 5) {
			this.setState({ numberPlayers: n });

			// Save players to state by color and position 0
			for (let i = 0; i < n; i++) {
				const player = {
					player: PLAYER_COLORS[i],
					position: 0,
				};
				copy.push(player);
			}
			this.setState({ players: copy });
		}
	};

	rollDice = () => {
		const random = getRandomInt(DICE_MAX);
		this.setState({ dice: random });

		this.moveCurrentPlayer(random);
	};

	// TODO:
	// Check winner reaches exactly cell id 15

	moveCurrentPlayer = (toPosition) => {
		const { players, dice, currentPlayerIndex } = this.state;
		const { dispatchMovePlayer } = this.props;

		const currentPlayerObj = this.getCurrentPlayer();
		console.log("currentPlayerObj", currentPlayerObj);
		const currentPlayer = currentPlayerObj.player;
		const fromPosition = currentPlayerObj.position;

		toPosition = fromPosition + toPosition;

		if (fromPosition === 0) {
			// Move only when dice returns 1
			if (dice === 1) {
				dispatchMovePlayer(currentPlayer, fromPosition, toPosition);
			} else {
				// Try again
				// Set next player as current player
				this.setCurrentPlayer();
				return;
			}
		} else {
			dispatchMovePlayer(currentPlayer, fromPosition, toPosition);
		}

		// Update current player position to toPosition
		const copy = players.map((player, index) => {
			if (index === currentPlayerIndex) {
				player.position = toPosition;
				return player;
			}
			return player;
		});

		console.log("new Position: ", copy);
		this.setState({ players: copy });

		// Set next player as current player
		this.setCurrentPlayer();
	};

	getCurrentPlayer() {
		const { players, currentPlayerIndex } = this.state;

		// Return first player
		if (currentPlayerIndex > players.length - 1) {
			return players[0];
		}
		return players[currentPlayerIndex];
	}

	setCurrentPlayer() {
		const { players, numberPlayers, currentPlayerIndex } = this.state;
		if (players.length === 1) {
			return;
		}

		// Start Over with player 1
		if (currentPlayerIndex === players.length - 1) {
			this.setState({ currentPlayerIndex: 0 });
			return;
		}

		// Move to next player
		this.setState({ currentPlayerIndex: this.state.currentPlayerIndex + 1 });
	}

	onStart = () => {
		// Get number of players
		const { players, numberPlayers } = this.state;
		const { dispatchMovePlayerToStart } = this.props;

		// Place all players on Start
		players.map((player) => {
			dispatchMovePlayerToStart(player.player, 0, 0);
		});

		// Pop item when timer runs out
		// Call clearTimout when a player moves before timer runs out

		// Play each player's turn
		// Dispatch action to reducer
		// Test Move Player

		// Roll dice
		// Start until dice is 1
	};

	onReset = () => {
		const { dispatchResetPlayers } = this.props;

		// Reset all players
		dispatchResetPlayers();

		this.setState({ numberPlayers: 1 });
	};

	render() {
		const { players, dice, numberPlayers, winner } = this.state;
		console.log("currentPlayer: ", this.state.currentPlayerIndex);
		return (
			<View style={styles.gameContainer}>
				<Header onStart={this.onStart} onReset={this.onReset} />
				<View>
					<View style={styles.numberPlayersContainer}>
						<Text style={styles.numberPlayerTextStyle}>
							Select Number of Players(1-4)
						</Text>
						<TextInput
							style={styles.inputStyle}
							value={numberPlayers.toString()}
							onChangeText={(text) => this.onChangePlayerNumbers(text)}
						/>
					</View>
				</View>
				<View style={styles.gridContainer}>
					<Grid />
				</View>

				<View style={styles.bottomContainer}>
					<Players players={players} playersTurn="yellow" />
					{winner !== "" && <Text>{`Hurray! ${winner} is the winner`}</Text>}
					<Dice dice={dice} rollDice={this.rollDice} />
				</View>
				{/*<Button
					type="outline"
					title="Move Current Player"
					onPress={this.moveCurrentPlayer}
				/>*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gameContainer: {
		flex: 1,
		//justifyContent: "center",
		//alignItems: "center",
	},
	gridContainer: {
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	bottomContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: SCREEN_WIDTH,
		marginTop: 10,
		padding: 25,
		backgroundColor: "yellow",
	},

	numberPlayersContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	numberPlayerTextStyle: {
		fontSize: 17,
		marginRight: 5,
	},
	inputStyle: {
		height: 30,
		width: 30,
		borderWidth: 1,
		textAlign: "center",
	},
});

const mapStateToProps = (state) => {
	return {
		data: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchMovePlayerToStart: (player, fromPosition, toPosition) =>
			dispatch(movePlayerToStart(player, fromPosition, toPosition)),

		dispatchMovePlayer: (player, fromPosition, toPosition) =>
			dispatch(movePlayer(player, fromPosition, toPosition)),

		dispatchResetPlayers: () => dispatch(resetPlayers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
