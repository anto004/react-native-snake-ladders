import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

function Player({ color }) {
	return <View style={[styles.playerStyle, { backgroundColor: color }]}></View>;
}

const styles = StyleSheet.create({
	playerStyle: {
		height: 13.5,
		width: 15,
		borderRadius: 30,
		margin: 1,
		//alignSelf: "flex-end",
	},
});

export default Player;
