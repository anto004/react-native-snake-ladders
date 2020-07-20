import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function Row({ column }) {
	return (
		<View style={styles.rowStyle}>
			{column.map((data, index) => (
				<Cell key={data} data={data} />
			))}
		</View>
	);
}

function Cell({ data }) {
	return (
		<View style={styles.cellStyle}>
			<Text>{data}</Text>
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
					<Row key={column} column={column} />
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

const dispatchStateToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, dispatchStateToProps)(Grid);
