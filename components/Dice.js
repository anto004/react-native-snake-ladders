import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

function Dice({ dice, rollDice }) {
	return (
		<View>
			<Button
				title={dice.toString()}
				type="outline"
				raised={true}
				onPress={rollDice}
				buttonStyle={styles.buttonStyle}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonStyle: {
		width: 50,
		height: 50,
		margin: 0,
	},
});

export default Dice;
