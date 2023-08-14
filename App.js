import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsListScreen from './screens/MealsListScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favourites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#aaa' },
				sceneContainerStyle: { backgroundColor: '#3f2f35' },
				drawerContentStyle: { backgroundColor: '#3f2f35' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#3f2f35',
				drawerActiveBackgroundColor: '#aaa',
			}}>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="list"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="star"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<FavouritesContextProvider>
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
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsList"
							component={MealsListScreen}
						/>
						<Stack.Screen
							name="MealDetails"
							component={MealDetailsScreen}
							options={{
								title: 'Meal info',
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavouritesContextProvider>
		</>
	);
}
//top most Stack.Screen will always be rendered first
//If error when nesting navigators, run expo start -c

const styles = StyleSheet.create({});
