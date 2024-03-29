import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Transaction') {
								iconName = 'book';
							} else if (route.name === 'Search') {
								iconName = 'search';
							}

							// You can return any component that you like here!
							return <Ionicons name={iconName} size={size} color={color} />;
						},
					})}
					tabBarOptions={{
						activeTintColor: '#273148',
						inactiveTintColor: 'black',
						style: {
							height: 100,
							borderTopWidth: 0,
							backgroundColor: '#273148',
						},
						labelStyle: {
							fontSize: 20,
							fontFamily: 'Rajdhani_600SemiBold',
						},
						labelPosition: 'beside-icon',
						tabStyle: {
							marginTop: 25,
							marginLeft: 10,
							marginRight: 10,
							borderRadius: 20,
							borderWidth: 2,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'white',
						},
					}}>
					<Tab.Screen name='Transaction' component={TransactionScreen} />
					<Tab.Screen name='Search' component={SearchScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}
