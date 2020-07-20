import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Grid from "./Grid";
import { movePlayer1 } from "../actions";

class Game extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		position: 0,
	};

	movePlayerP1 = () => {
		// Update grid, dispatch action
		this.props.dispatchMovePlayer1(0, 2);
	};

	render() {
		return (
			<View style={styles.gameContainer}>
				<Text>Game Component</Text>
				<Grid />
				<TouchableOpacity onPress={this.movePlayerP1}>
					<Text>Move p1</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.movePlayerP2}>
					<Text>Move p2</Text>
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
