import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealsList/MealList';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';

function FavouritesScreen() {
	const favMealsContext = useContext(FavouritesContext);
	const favMeals = MEALS.filter((meal) =>
		favMealsContext.ids.includes(meal.id)
	);
	if (favMeals.length === 0) {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.text}>You have no favourites</Text>
			</View>
		);
	}
	return <MealList items={favMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});
