import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsListScreen() {
	return (
		<View style={styles.container}>
			<Text> Meals List</Text>
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
