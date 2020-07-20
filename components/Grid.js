import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

function Row({ column }) {
  return (
    <View style={styles.rowStyle}>
      {column.map((data) => (
        <Cell data={data} />
      ))}
    </View>
  );
}

function Cell({ data }) {
  return (
    <View style={styles.cellStyle}>
      <Text>{data}</Text>
    </View>
  );
}
class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      ["Win", 14, 13, 12],
      [11, 10, 9, 8],
      [7, 6, 5, 4],
      ["Start", 1, 2, 3],
    ];
    return (
      <View style={styles.gridContainer}>
        {data.map((column) => (
          <Row column={column} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gridContainer: {
        width: 220,
    },
  rowStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cellStyle: {
    flex: 1,
    margin: 10,
  },
});
export default Grid;
