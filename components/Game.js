import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Grid from "./Grid";

class Game extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		position: 0,
	};

	movePlayer = () => {
		this.setState({ position: 1 });

		// Update grid, dispatch action
	};

	render() {
		return (
			<View style={styles.gameContainer}>
				<Text>Game Component</Text>
				<Grid />
				<TouchableOpacity onPress={this.movePlayer}>
					<Text>Move</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gameContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Game;
