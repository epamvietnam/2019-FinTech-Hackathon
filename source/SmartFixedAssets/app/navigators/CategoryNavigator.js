import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import CategoryListingScreen from '../components/CategoryListingScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';

export default createStackNavigator(
    {
        HomeCategory: HomeScreen,
        CategoryListing: CategoryListingScreen,
        HouseDetail: HouseDetailScreen,
    },
    { initialRouteName: 'HomeCategory', defaultNavigationOptions: { header: null } },
);
