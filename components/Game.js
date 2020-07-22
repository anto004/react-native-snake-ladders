import React, { Component } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	TextInput,
	ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native-elements";
import timer from "react-native-timer";
import Grid from "./Grid";
import Dice from "./Dice";
import Players from "./Players";
import Header from "./Header";
import Timer from "./Timer";
import { movePlayer, movePlayerToStart, resetPlayers } from "../actions";
import { getRandomInt } from "../utils/random";
import { RED } from "../reducers";

const DICE_MAX = 3;
const SCREEN_WIDTH = Dimensions.get("window").width;
const PLAYER_COLORS = ["red", "green", "blue", "yellow"];

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dice: 3,
			numberPlayers: 2,
			winner: "",
			players: [
				{ player: "red", position: 0 },
				{ player: "green", position: 0 },
			],
			currentPlayerIndex: 0,
			playersTurn: "",
			seconds: 5,
			gameOnGoing: false,
			gameOver: false,
		};
	}

	componentWillUnmount() {
		timer.clearInterval(this);
	}

	onChangePlayerNumbers = (n) => {
		const { gameOnGoing } = this.state;
		const copy = [];

		if (gameOnGoing) {
			return;
		}

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
		const { gameOnGoing, gameOver } = this.state;
		const random = getRandomInt(DICE_MAX);
		this.setState({ dice: random });

		if (!gameOnGoing) {
			ToastAndroid.show("Press start", ToastAndroid.SHORT);
			return;
		}

		if (gameOver) {
			ToastAndroid.show(
				"Game Over! Reset and Start New Game",
				ToastAndroid.SHORT
			);
			return;
		}

		this.moveCurrentPlayer(random);

		// Reset clock
		this.setState({ seconds: 5 });
	};

	moveCurrentPlayer = (dice) => {
		const { players, currentPlayerIndex } = this.state;
		const { dispatchMovePlayer, dispatchMovePlayerToStart } = this.props;

		const currentPlayerObj = this.getCurrentPlayer();
		const currentPlayer = currentPlayerObj.player;
		const fromPosition = currentPlayerObj.position;
		let toPosition = fromPosition + dice;

		if (toPosition > 15) {
			return;
		}

		// We have a winner
		if (toPosition === 15) {
			this.setState({
				winner: currentPlayer,
				gameOver: true,
			});

			//Stop Timer
			timer.clearInterval(this);
		}

		//Move up the ladder
		if (fromPosition === 7) {
			toPosition = 12;
		}

		//Swallowed by snake
		if (fromPosition === 14) {
			toPosition = 3;
		}

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
		const { players, numberPlayers, gameOnGoing } = this.state;
		const { dispatchMovePlayerToStart } = this.props;

		if (gameOnGoing) {
			ToastAndroid.show("A Game is in progress", ToastAndroid.SHORT);
			return;
		}

		// Place all players on Start cell
		players.map((player) => {
			dispatchMovePlayerToStart(player.player, 0, 0);
		});

		// Red is the first player
		this.setState({ playersTurn: RED });

		this.setState({ gameOnGoing: true });

		timer.setInterval(
			this,
			"displaySeconds",
			() => {
				if (this.state.seconds === 0) {
					// Player ran out of time
					// Roll dice explicitly
					this.rollDice();
					this.setState({ seconds: 5 });
					return;
				}
				this.setState({ seconds: this.state.seconds - 1 });
			},
			1000
		);
	};

	onReset = () => {
		const { dispatchResetPlayers } = this.props;

		// Reset all players
		dispatchResetPlayers();

		this.setState({
			dice: 3,
			numberPlayers: 2,
			winner: "",
			players: [
				{ player: "red", position: 0 },
				{ player: "green", position: 0 },
			],
			currentPlayerIndex: 0,
			playersTurn: "",
			seconds: 5,
			gameOnGoing: false,
			gameOver: false,
		});

		timer.clearInterval(this);
	};

	componentDidUpdate(prevProps, prevState) {
		// Show Player's turn arrow
		if (this.state.currentPlayerIndex !== prevState.currentPlayerIndex) {
			const currentPlayer = this.getCurrentPlayer();
			this.setState({ playersTurn: currentPlayer.player });
		}
	}

	render() {
		const {
			players,
			dice,
			numberPlayers,
			playersTurn,
			winner,
			seconds,
		} = this.state;

		return (
			<View style={styles.gameContainer}>
				<Header onStart={this.onStart} onReset={this.onReset} />
				<View>
					<View style={styles.numberPlayersContainer}>
						<Text style={styles.numberPlayerTextStyle}>
							Select Number of Players(2-4)
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
					<Timer seconds={seconds} />
				</View>

				<View style={styles.bottomContainer}>
					<Players players={players} playersTurn={playersTurn} />
					{winner !== "" && (
						<Text
							style={styles.winnerTextStyle}
						>{`Hurray! ${winner.toUpperCase()} is the winner`}</Text>
					)}
					<Dice dice={dice} rollDice={this.rollDice} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gameContainer: {
		flex: 1,
	},
	gridContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	bottomContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: SCREEN_WIDTH,
		padding: 25,
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
	winnerTextStyle: {
		fontSize: 20,
		fontWeight: "bold",
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
