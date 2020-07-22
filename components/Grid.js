import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Player from "./Player";
import { RED, GREEN, BLUE, YELLOW } from "../reducers/index";

function RenderPlayers({ column }) {
	const players = Object.entries(column).map(([key, value]) => {
		if (key === RED && column[key]) {
			return <Player key={key} color="red" />;
		}
		if (key === GREEN && column[key]) {
			return <Player key={key} color={GREEN} />;
		}
		if (key === BLUE && column[key]) {
			return <Player key={key} color={BLUE} />;
		}
		if (key === YELLOW && column[key]) {
			return <Player key={key} color={YELLOW} />;
		}
	});
	return players;
}

function Row({ row }) {
	return (
		<View style={styles.rowStyle}>
			{row.map((column, index) => (
				<Cell key={column.id} column={column} />
			))}
		</View>
	);
}

function Cell({ column }) {
	return (
		<View key={column.id} style={styles.cellContainer}>
			<View style={styles.iconWithPlayersStyle}>
				{column.id === 14 && (
					<FontAwesome5 name="stumbleupon" size={15} color="black" />
				)}
				{column.id === 7 && (
					<FontAwesome name="level-up" size={15} color="black" />
				)}
				<View style={styles.cellPlayerContainer}>
					<RenderPlayers column={column} />
				</View>
			</View>

			<View style={styles.cellIdStyle}>
				{column.id === 0 && <Text h4>Start</Text>}
				{column.id === 15 && <Text h4>Win</Text>}
				{column.id !== 0 && column.id !== 15 && (
					<Text h4 style={styles.textIdStyle}>
						{column.id}
					</Text>
				)}
			</View>
		</View>
	);
}

function Grid({ grid }) {
	return (
		<View style={styles.gridContainer}>
			{grid.map((row, index) => (
				<Row key={index} row={row} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	gridContainer: {
		width: 300,
		marginTop: 5,
		marginRight: 10,
		marginLeft: 10,
		backgroundColor: "white",
	},
	rowStyle: {
		// flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	cellContainer: {
		flex: 1,
		height: 60,
		borderWidth: 1,
	},
	cellPlayerContainer: {
		flexDirection: "row",
	},
	iconWithPlayersStyle: {
		flexDirection: "row",
	},
	cellIdStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 4,
	},
	textIdStyle: {
		margin: 0,
	},
});

const mapStateToProps = (state) => {
	return {
		grid: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
