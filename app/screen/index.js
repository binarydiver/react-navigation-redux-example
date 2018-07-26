import { createStackNavigator } from 'react-navigation';

import HomeContainer from '@screen/container/HomeContainer';
import DetailsContainer from '@screen/container/DetailsContainer';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer
    },
    Details: {
      screen: DetailsContainer,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;