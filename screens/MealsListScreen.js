import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

import MealItem from '../components/MealItem';

function MealsListScreen({ route, navigation }) {
	const categoryId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(categoryId) >= 0;
	});
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId
		).title;

		navigation.setOptions({ title: categoryTitle });
	}, [categoryId, navigation]); //used when the effect has to be handled before the component is loaded

	function renderMealItem(itemData) {
		const item = itemData.item;
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
			id: item.id,
		};
		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			<Text> Meals List -- {categoryId}</Text>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
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
