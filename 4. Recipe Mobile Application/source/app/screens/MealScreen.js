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
	Animated,
} from "react-native";
import { SimpleAnimation } from "react-native-simple-animations";
import { useScrollToTop } from "@react-navigation/native";
import axios from "axios";

const AppButton = ({ fun, text, style }) => (
	<TouchableOpacity
		style={[style.button, { paddingHorizontal: 20 }]}
		onPress={fun}
	>
		<Text style={style.text}>{text}</Text>
	</TouchableOpacity>
);
const If = ({ condition, children }) => {
	if (condition) {
		return children;
	}
	return <Text>{padding}</Text>;
};
const padding = "\n";
function RandomScreen({ route, navigation }) {
	const url = route.params.url;
	const scrollRef = React.useRef();
	const [meal, onChangeMeal] = React.useState(" ");
	const [ingr, onChangeIngr] = React.useState(" ");
	const [instr, onChangeInstr] = React.useState(" ");
	const [imgUrl, onChangeImgUrl] = React.useState(" ");
	const [update, onUpdate] = React.useState(true);
	const [savedArray, onSavedArray] = React.useState("[]");
	React.useEffect(() => {
		axios.request(url).then(function (response) {
			onChangeMeal(response.data.meals[0]["strMeal"]);
			var ingredients = "";
			for (var i = 1; i < 21; i++) {
				if (
					response.data.meals[0]["strIngredient" + i] != "" &&
					response.data.meals[0]["strIngredient" + i] != "null" &&
					response.data.meals[0]["strIngredient" + i] != null
				) {
					ingredients +=
						"•" +
						response.data.meals[0]["strIngredient" + i] +
						": " +
						response.data.meals[0]["strMeasure" + i] +
						"\n";
				}
			}
			onChangeIngr(ingredients);
			onChangeInstr(response.data.meals[0]["strInstructions"]);
			onChangeImgUrl(response.data.meals[0]["strMealThumb"]);
		});
	}, [update]);
	return (
		<SafeAreaView style={styles.container}>
			<Image source={{ uri: imgUrl }} style={styles.background} />
			<ScrollView
				ref={scrollRef}
				style={styles.scrollView}
				contentContainerStyle={{ flexGrow: 1 }}
				enableOnAndroid={true}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>{meal}</Text>
				<Text style={styles.subtitle}>Ingredients:</Text>
				<Text style={styles.ingr}>{ingr}</Text>
				<Text style={styles.subtitle}>Instructions</Text>
				<Text style={styles.instructions}>{instr}</Text>
				<If
					condition={
						url.split("/")[url.split("/").length - 1] ==
						"random.php"
					}
				>
					<Text>{padding}</Text>
					<AppButton
						text="⟲"
						fun={() => onUpdate(!update)}
						style={buttonStyle}
					/>

					<Text>{padding}</Text>
				</If>
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#dee2e6",
		alignItems: "center",
		position: "absolute",
	},
	background: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
	},
	scrollView: {
		backgroundColor: "#f8f9fa",
		marginTop: -150,
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 10,
	},
	title: {
		fontSize: 32,
		margin: 10,
		backgroundColor: "#ff6b6b",
		borderRadius: 10,
		elevation: 10,
		textAlign: "center",
		color: "#fff",
		paddingHorizontal: 20,
	},
	subtitle: {
		fontSize: 28,
		color: "#fff",
		backgroundColor: "#ff6b6b",
		borderRadius: 10,
		elevation: 10,
		alignSelf: "flex-start",
		paddingHorizontal: 20,
		margin: 10,
	},
	ingr: {
		fontSize: 24,
		paddingHorizontal: 10,
	},
	instructions: {
		fontSize: 20,
		paddingHorizontal: 10,
		alignSelf: "center",
		textAlign: "justify",
	},
});

const buttonStyle = StyleSheet.create({
	button: {
		backgroundColor: "#ff6b6b",
		elevation: 10,
		borderRadius: 10,
		marginHorizontal: 10,
	},
	text: {
		fontSize: 32,
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});
export default RandomScreen;
