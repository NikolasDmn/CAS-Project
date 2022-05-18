import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenScreen from "./app/screens/OpenScreen";
import MealScreen from "./app/screens/MealScreen";
import ChooseScreen from "./app/screens/ChooseScreen";
import CatFoodScreen from "./app/screens/CatFoodScreen";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="open"
			>
				<Stack.Screen name="open" component={OpenScreen} />
				<Stack.Screen name="meal" component={MealScreen} />
				<Stack.Screen name="choose" component={ChooseScreen} />
				<Stack.Screen name="catfood" component={CatFoodScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
