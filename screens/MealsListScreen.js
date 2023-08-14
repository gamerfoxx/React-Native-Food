import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

import MealList from '../components/MealsList/MealList';

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

	return <MealList items={displayedMeals}></MealList>;
}

export default MealsListScreen;
