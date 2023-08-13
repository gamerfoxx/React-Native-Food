import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsListScreen from './screens/MealsListScreen';
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#aaa' },
						contentStyle: { backgroundColor: '#3f2f35' },
					}}>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: 'All Categories',
						}}
					/>
					<Stack.Screen
						name="MealsList"
						component={MealsListScreen}
						// options={({ route, navigation }) => {
						// 	const categoryId = route.params.categoryId;
						// 	return { title: categoryId };
						// }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
//top most Stack.Screen will always be rendered first

const styles = StyleSheet.create({});
