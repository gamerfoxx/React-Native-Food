import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsListScreen from './screens/MealsListScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
			/>
		</Drawer.Navigator>
	);
}

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
						component={DrawerNavigator}
						options={{
							title: 'All Categories',
						}}
					/>
					<Stack.Screen
						name="MealsList"
						component={MealsListScreen}
					/>
					<Stack.Screen
						name="MealDetails"
						component={MealDetailsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
//top most Stack.Screen will always be rendered first
//If error when nesting navigators, run expo start -c

const styles = StyleSheet.create({});
