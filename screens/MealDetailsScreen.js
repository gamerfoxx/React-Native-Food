import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;
	const mealDetails = MEALS.find((meal) => meal.id === mealId);

	function headerButtonPressed() {
		console.log('Pressed');
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						title="tap me"
						onPress={headerButtonPressed}
						icon="star"
						color="black"
					/>
				);
			},
		});
	}, [navigation, headerButtonPressed]);
	return (
		<ScrollView>
			<Image
				style={styles.image}
				source={{ uri: mealDetails.imageUrl }}
			/>
			<Text style={styles.title}>{mealDetails.title}</Text>
			<MealDetails
				duration={mealDetails.duration}
				complexity={mealDetails.complexity}
				affordability={mealDetails.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={mealDetails.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={mealDetails.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25,
		margin: 10,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: { alignItems: 'center' },
	listContainer: {
		width: '80%',
	},
});
