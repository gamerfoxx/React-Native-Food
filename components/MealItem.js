import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
} from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
	return (
		<View style={styles.mealItem}>
			<Pressable>
				<View>
					<Image
						style={styles.image}
						source={{ uri: imageUrl }}
					/>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration} M</Text>
					<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 16,
		margin: 8,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
		justifyContent: 'center',
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
