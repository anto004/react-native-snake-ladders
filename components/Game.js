import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Grid from "./Grid";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.gameContainer}>
        <Text>Game Component</Text>
        <Grid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Game;
