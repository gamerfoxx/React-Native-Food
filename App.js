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
				<Stack.Navigator>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
					/>
					<Stack.Screen
						name="MealsList"
						component={MealsListScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
//top most Stack.Screen will always be rendered first

const styles = StyleSheet.create({});
