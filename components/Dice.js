import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
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
				titleStyle={styles.textStyle}
			/>
			<FontAwesome5
				name="dice"
				size={24}
				color="black"
				style={styles.iconStyle}
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
	textStyle: {
		fontWeight: "bold",
		fontSize: 25,
	},
	iconStyle: {
		margin: 6,
	},
});

export default Dice;
