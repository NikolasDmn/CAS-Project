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
import axios from "axios";
import ImageBlurLoading from "react-native-image-blur-loading";
const MealButton = ({ navigation, img, text, nav, fun }) => (
	<TouchableOpacity
		style={[buttonStyle.button, { paddingHorizontal: 20 }]}
		onPress={fun}
	>
		<Image source={{ uri: img }} style={buttonStyle.image} />
		<Text style={buttonStyle.text}>{text}</Text>
	</TouchableOpacity>
);
function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
}

const pad = "\n\n\n\n";
function CatFoodScreen({ route, navigation }) {
	const category = route.params.category;
	const url =
		"https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
	const [Buttons, setButtons] = React.useState([]);
	React.useEffect(() => {
		axios.request(url).then((response) => {
			response.data.meals.map((info, key) => {
				setButtons((Buttons) => [
					...Buttons,
					[info["strMeal"], info["strMealThumb"], info["idMeal"]],
				]);
			});
		});
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.title}>{category} Meals</Text>
				{shuffle(Buttons).map((info, key) => {
					return (
						<MealButton
							text={info[0]}
							img={info[1]}
							key={key}
							fun={() =>
								navigation.navigate("meal", {
									url:
										"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
										info[2],
								})
							}
						/>
					);
				})}
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
});
const buttonStyle = StyleSheet.create({
	text: {
		marginTop: 10,
		fontSize: 15,
		backgroundColor: "#4ecdc4",
		textAlign: "center",
		alignSelf: "center",
		paddingHorizontal: 20,
		borderRadius: 15,
		textTransform: "uppercase",
		fontWeight: "bold",
		color: "#fff",
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,
		elevation: 2,
	},
	button: {
		backgroundColor: "#f8f9fa",
		margin: 10,
		paddingHorizontal: 0,
		paddingVertical: 10,
		borderRadius: 20,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,
		elevation: 10,
		width: "90%",
		alignSelf: "center",
	},
	image: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
		margin: 0,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,
	},
});
export default CatFoodScreen;
