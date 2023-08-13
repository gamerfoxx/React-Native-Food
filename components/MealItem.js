import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealItem({ title, imageUrl }) {
	return (
		<View>
			<Pressable>
				<View>
					<Image
						style={styles.image}
						source={{ uri: imageUrl }}
					/>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 16,
	},
});
