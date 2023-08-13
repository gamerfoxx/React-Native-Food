import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsListScreen({ route }) {
	const categoryId = route.params.categoryId;
	return (
		<View style={styles.container}>
			<Text> Meals List -- {categoryId}</Text>
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
