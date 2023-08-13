import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	);
}

export default Subtitle;

const styles = StyleSheet.create({
	subTitle: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
	subTitleContainer: {
		borderBottomColor: 'white',
		borderBottomWidth: 2,
		padding: 6,
		marginVertical: 4,
		marginHorizontal: 24,
	},
});
