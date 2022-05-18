import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	Image,
	Dimensions,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
} from "react-native";

const cat1 = [
	["beef", require("../assets/categories/beef.png")],
	["chicken", require("../assets/categories/chicken.png")],
	["dessert", require("../assets/categories/dessert.png")],
	["lamb", require("../assets/categories/lamb.png")],
	["miscellaneous", require("../assets/categories/miscellaneous.png")],
	["pasta", require("../assets/categories/pasta.png")],
	["pork", require("../assets/categories/pork.png")],
];
const cat2 = [
	["seafood", require("../assets/categories/seafood.png")],
	["side", require("../assets/categories/side.png")],
	["starter", require("../assets/categories/starter.png")],
	["vegan", require("../assets/categories/vegan.png")],
	["vegetarian", require("../assets/categories/vegetarian.png")],
	["breakfast", require("../assets/categories/breakfast.png")],
	["goat", require("../assets/categories/goat.png")],
];
const IngrButton = ({ navigation, img, text, nav }) => (
	<TouchableOpacity
		style={[buttonStyle.button, { paddingHorizontal: 20 }]}
		onPress={() => {
			navigation.navigate("catfood", {
				category: text,
				a: true,
			});
		}}
	>
		<Image source={img} style={buttonStyle.image} />
		<Text style={buttonStyle.text}>{text}</Text>
	</TouchableOpacity>
);

const pad = "\n\n\n\n";
function ChooseScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.title}>Choose a Category</Text>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						margin: 0,
						padding: 0,
					}}
				>
					<View style={{ width: "50%", margin: 0, padding: 0 }}>
						{cat1.map((info, key) => {
							return (
								<IngrButton
									img={info[1]}
									key={key}
									text={info[0]}
									navigation={navigation}
								/>
							);
						})}
					</View>
					<View style={{ width: "50%", margin: 0, padding: 0 }}>
						<Text>{"\n"}</Text>
						{cat2.map((info, key) => {
							return (
								<IngrButton
									img={info[1]}
									key={key}
									text={info[0]}
									navigation={navigation}
								/>
							);
						})}
					</View>
				</View>
				<Text>{pad}</Text>
			</ScrollView>
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
	scrollView: {
		backgroundColor: "#e0e0e0",
		elevation: 10,
		width: "100%",
		paddingTop: 50,
	},
	title: {
		fontSize: 30,
		margin: 10,
		backgroundColor: "#ff6b6b",
		borderRadius: 10,
		elevation: 10,
		textAlign: "center",
		color: "#fff",
		paddingHorizontal: 20,
		alignSelf: "center",
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
const buttonStyle = StyleSheet.create({
	text: {
		marginTop: 10,
		fontSize: 15,
		backgroundColor: "#4ecdc4",
		textAlign: "center",
		alignSelf: "center",
		paddingHorizontal: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
		borderRadius: 20,
		color: "#fff",
	},
	button: {
		backgroundColor: "#f8f9fa",
		margin: 10,
		paddingHorizontal: 0,
		borderRadius: 20,
		padding: 10,
		width: "90%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 10,
	},
	image: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
		margin: 0,
		borderRadius: 20,
	},
});
export default ChooseScreen;
