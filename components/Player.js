import React from "react";
import { View, StyleSheet } from "react-native";

function Player({ color }) {
	return <View style={[styles.playerStyle, { backgroundColor: color }]}></View>;
}

const styles = StyleSheet.create({
	playerStyle: {
		height: 13.5,
		width: 15,
		borderRadius: 30,
		margin: 1,
	},
});

export default Player;
