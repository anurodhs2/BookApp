import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryScreen from '../screens/categoryScreen/CategoryScreen';
import CategoryDetailScreen from '../screens/categoryDetailScreen/CategoryDetailScreen';

const StackNavigator = createStackNavigator(
  {
    CategoryScreen: {screen: CategoryScreen},
    CategoryDetailScreen: {screen: CategoryDetailScreen},
  },
  {
    initialRouteName: 'CategoryScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);
