import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	ImageBackground,
	TouchableOpacity,
	Image,
} from "react-native";

const AppButton = ({ fun, text, style }) => (
	<TouchableOpacity style={style.button} onPress={fun}>
		<Text style={style.text}>{text}</Text>
	</TouchableOpacity>
);

function OpenScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require("../assets/background.jpg")}
				style={styles.background}
			>
				<Text style={styles.title}>Recipes</Text>

				<AppButton
					text="Random Recipe"
					fun={() =>
						navigation.navigate("meal", {
							url: "https://www.themealdb.com/api/json/v1/1/random.php",
						})
					}
					style={randButtonStyle}
				/>
				<AppButton
					text="Choose Main ingredient"
					fun={() => navigation.navigate("choose")}
					style={ingrButtonStyle}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0F0F0",
		alignItems: "center",
		justifyContent: "center",
	},
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		width: "100%",
		height: "100%",
	},
	title: {
		position: "absolute",
		top: "10%",
		width: "90%",
		backgroundColor: "#ff6b6b",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		borderRadius: 10,
		elevation: 24,
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
		fontSize: 40,
		color: "#fff",
		textAlign: "center",
	},
});
const randButtonStyle = StyleSheet.create({
	button: {
		backgroundColor: "#ff6b6b",
		elevation: 8,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: "95%",
		margin: 10,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	text: {
		fontSize: 24,
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});
const ingrButtonStyle = StyleSheet.create({
	button: {
		backgroundColor: "#4ecdc4",
		elevation: 8,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: "95%",
		margin: 10,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	text: {
		fontSize: 24,
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});
export default OpenScreen;
