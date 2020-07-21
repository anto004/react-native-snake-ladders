import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Pass an array of players
function Players({ players }) {
	const playerColor = ["red", "green", "blue", "yellow"];
	return (
		<View style={styles.playersContainer}>
			{players.map((player, index) => (
				<View key={index}>
					<View
						style={[
							styles.playerStyle,
							{ backgroundColor: playerColor[index] },
						]}
						key={index}
					></View>
					<FontAwesome5 name="arrow-up" size={24} color="black" />
					<Text>Your turn</Text>
				</View>
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
