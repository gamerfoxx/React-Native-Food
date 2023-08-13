import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealItem({ title }) {
	return (
		<View style={styles.container}>
			<Text>{title}</Text>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
