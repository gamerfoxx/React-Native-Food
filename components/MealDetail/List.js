import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
	return data.map((dataPoint) => (
		<View
			style={styles.listItem}
			key={dataPoint}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
}

export default List;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 8,
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: '#000',
	},
	itemText: {
		color: '#fff',
		textAlign: 'center',
	},
});
