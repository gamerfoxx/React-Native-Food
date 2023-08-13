import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';

function CategoriesScreen({ navigation }) {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate('MealsList', {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CategoryGridItem
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
