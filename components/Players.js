import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Player from "./Player";

function PlayerWithArrow({ color, playersTurn }) {
	return (
		<View style={styles.playerStyle}>
			<Player color={color} />
			{playersTurn === color && (
				<View style={styles.iconStyle}>
					<FontAwesome5 name="arrow-up" size={20} color="black" />
				</View>
			)}
		</View>
	);
}
// Pass an array of players
// playerColors ["red", "green", "blue", "yellow"];
function Players({ players, playersTurn }) {
	return (
		<View style={styles.playersContainer}>
			{players[0] && <PlayerWithArrow color="red" playersTurn={playersTurn} />}
			{players[1] && (
				<PlayerWithArrow color="green" playersTurn={playersTurn} />
			)}
			{players[2] && <PlayerWithArrow color="blue" playersTurn={playersTurn} />}
			{players[3] && (
				<PlayerWithArrow color="yellow" playersTurn={playersTurn} />
			)}
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
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 2,
	},
	iconStyle: {
		padding: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Players;
