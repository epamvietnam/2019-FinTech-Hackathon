import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SettingsScreen from '../components/SettingsScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';
import { Colors } from '../styles/DefaultStyles';
import { Icon } from 'react-native-elements';
import CategoryNavigator from './CategoryNavigator';

export default createBottomTabNavigator(
    {
        Home: {
            screen: CategoryNavigator,
        },
        Search: {
            screen: CategoryNavigator,
        },
        Wishlist: {
            screen: CategoryNavigator,
        },
        Shop: {
            screen: SettingsScreen,
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                switch (routeName) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Search':
                        iconName = 'search';
                        break;
                    case 'Wishlist':
                        iconName = 'heart';
                        break;
                    case 'Shop':
                        iconName = 'shopping-bag';
                        break;
                }

                return (
                    <Icon
                        name={iconName}
                        type="font-awesome"
                        size={25}
                        color={tintColor}
                    />
                );
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.disable,
            showIcon: true,
            showLabel: false,
        },
    },
);
