import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import CategoryListingScreen from '../components/CategoryListingScreen';
import AdvanceSearchScreen from '../components/AdvanceSearchScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';
import CompareAssertScreen from '../components/CompareAssertScreen';
import CartDetailScreen from '../components/CartDetailScreen';

const CategoryNavigator = createStackNavigator(
    {
        HomeCategory: HomeScreen,
        CategoryListing: CategoryListingScreen,
        AdvanceSearch: AdvanceSearchScreen,
        HouseDetail: HouseDetailScreen,
        CompareAssert: CompareAssertScreen,
        CardDetail: CartDetailScreen,
    },
    { initialRouteName: 'HomeCategory', defaultNavigationOptions: { header: null } },
);

CategoryNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default CategoryNavigator;
