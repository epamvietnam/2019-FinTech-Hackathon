import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import CategoryListingScreen from '../components/CategoryListingScreen';
import AdvanceSearchScreen from '../components/AdvanceSearchScreen';

export default createStackNavigator(
    {
        HomeCategory: HomeScreen,
        CategoryListing: CategoryListingScreen,
        AdvanceSearch: AdvanceSearchScreen,
    },
    { initialRouteName: 'HomeCategory', defaultNavigationOptions: { header: null } },
);
