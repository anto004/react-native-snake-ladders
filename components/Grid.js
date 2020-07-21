import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import Player from "./Player";

function RenderPlayers({ column }) {
	const players = Object.entries(column).map(([key, value]) => {
		if (key === "p1" && column[key]) {
			return <Player key={key} color="red" />;
		}
		if (key === "p2" && column[key]) {
			return <Player key={key} color="green" />;
		}
		if (key === "p3" && column[key]) {
			return <Player key={key} color="blue" />;
		}
		if (key === "p4" && column[key]) {
			return <Player key={key} color="yellow" />;
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
		<View style={styles.cellContainer}>
			<View style={styles.cellPlayerContainer}>
				<RenderPlayers column={column} />
			</View>
			<View style={styles.cellIdStyle}>
				<Text h4 style={styles.textIdStyle}>
					{column.id}
				</Text>
			</View>
		</View>
	);
}

class Grid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { grid } = this.props;
		return (
			<View style={styles.gridContainer}>
				{grid.map((row, index) => (
					<Row key={index} row={row} />
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gridContainer: {
		width: 300,
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
		backgroundColor: "purple",
	},
	cellPlayerContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
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
