import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

// Todo: Create reusable buttons
function Header({ onStart, onReset }) {
	return (
		<View style={styles.headerContainer}>
			<Button type="outline" raised={true} title="Reset" onPress={onReset} />
			<Text h4> Snake and Ladders </Text>
			<Button type="outline" raised={true} title="Start" onPress={onStart} />
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		marginTop: 10,
		marginBottom: 15,
		paddingTop: 30,
		justifyContent: "space-evenly",
		backgroundColor: "yellow",
	},
});

export default Header;
