import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function Row({ column }) {
	return (
		<View style={styles.rowStyle}>
			{column.map((data, index) => (
				<Cell key={data.id} data={data} />
			))}
		</View>
	);
}

// Add a player circle at the top right
// p1 - red, p2 - green, p3 - blue p4 - yellow
function Cell({ data }) {
	return (
		<View style={styles.cellStyle}>
			<Text>{data.id}</Text>
			{data.p1 && <Text>p1</Text>}
		</View>
	);
}

class Grid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<View style={styles.gridContainer}>
				{data.map((column, index) => (
					<Row key={index} column={column} />
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gridContainer: {
		width: 220,
	},
	rowStyle: {
		// flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	cellStyle: {
		flex: 1,
		margin: 10,
	},
});
const mapStateToProps = (state) => {
	return {
		data: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
