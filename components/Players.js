import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Pass an array of players
function Players({ players }) {
	const playerColor = ["red", "green", "blue", "yellow"];
	return (
		<View style={styles.playersContainer}>
			{players.map((player, index) => (
				<View
					style={[styles.playerStyle, { backgroundColor: playerColor[index] }]}
					key={index}
				></View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	playersContainer: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "purple",
	},
	playerStyle: {
		height: 13.5,
		width: 15,
		borderRadius: 30,
		margin: 4,
	},
});

export default Players;
