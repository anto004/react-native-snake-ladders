import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

// Todo: Create reusable buttons
function Timer({ seconds }) {
	return (
		<View style={styles.timerContainer}>
			<View style={styles.timerStyle}>
				<Text>{seconds}</Text>
			</View>
			<Text> Timer </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	timerContainer: {
		margin: 0,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	timerStyle: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Timer;
