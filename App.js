import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Game from "./components/Game";

export default function App() {
	/* eslint-disable no-underscore-dangle */
	const store = createStore(
		reducer /* preloadedState, */,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
	);
	/* eslint-enable */

	return (
		<Provider store={store}>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Game />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
