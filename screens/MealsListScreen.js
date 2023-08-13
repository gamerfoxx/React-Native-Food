import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

function MealsListScreen({ route }) {
	const categoryId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(categoryId) >= 0;
	});

	function renderMealItem(itemData) {
		return <MealItem title={itemData.item.title} />;
	}

	return (
		<View style={styles.container}>
			<Text> Meals List -- {categoryId}</Text>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				numColumns={2}
			/>
		</View>
	);
}

export default MealsListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
