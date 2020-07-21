import React, { Component } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native-elements";
import Grid from "./Grid";
import Dice from "./Dice";
import Players from "./Players";
import Header from "./Header";
import { movePlayer1 } from "../actions";
import { getRandomInt } from "../utils/random";

const DICE_MAX = 3;
const SCREEN_WIDTH = Dimensions.get("window").width;

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: 0,
			dice: 3,
			numberPlayers: 1,
		};
	}

	movePlayerP1 = () => {
		// Update grid, dispatch action
		this.props.dispatchMovePlayer1(0, 2);
	};

	rollDice = () => {
		const random = getRandomInt(DICE_MAX);
		this.setState({ dice: random });
	};

	onChangePlayerNumbers = (n) => {
		if (!Number.isNaN(Number(n)) && Number(n) < 5) {
			this.setState({ numberPlayers: n });
		}
	};

	onStart = () => {
		// Get number of players
		// Add them to stack
		// Play each player's turn
		// Roll dice
		// Start until dice is 1
	};

	render() {
		const { dice, numberPlayers } = this.state;
		return (
			<View style={styles.gameContainer}>
				<Header />
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
					<TouchableOpacity onPress={this.movePlayerP1}>
						<Text>Move p1</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.movePlayerP2}>
						<Text>Move p2</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.bottomContainer}>
					<Players players={[1, 2, 3, 4]} />
					<Dice dice={dice} rollDice={this.rollDice} />
				</View>
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
		dispatchMovePlayer1: (fromPosition, toPosition) =>
			dispatch(movePlayer1(fromPosition, toPosition)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
