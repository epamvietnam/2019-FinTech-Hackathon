import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import CategoryListingScreen from '../components/CategoryListingScreen';
import AdvanceSearchScreen from '../components/AdvanceSearchScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';
import CompareAssertScreen from '../components/CompareAssertScreen';

export default createStackNavigator(
    {
        HomeCategory: HomeScreen,
        CategoryListing: CategoryListingScreen,
        AdvanceSearch: AdvanceSearchScreen,
        HouseDetail: HouseDetailScreen,
        CompareAssert: CompareAssertScreen,
    },
    { initialRouteName: 'HomeCategory', defaultNavigationOptions: { header: null } },
);
