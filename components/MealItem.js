import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
	id,
}) {
	const navigation = useNavigation();

	function selectMealHandler() {
		navigation.navigate('MealDetails', {
			mealId: id,
		});
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				style={({ pressed }) => (pressed ? styles.pressed : null)}
				android_ripple={{ color: '#aaa' }}
				onPress={selectMealHandler}>
				<View style={styles.innerContainer}>
					<View>
						<Image
							style={styles.image}
							source={{ uri: imageUrl }}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
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
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	pressed: {
		opacity: 0.5,
	},
});
