import * as React from 'react';
import { object, shape, func } from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import ContinentsScreen from '../screens/ContinentsScreen';
import RegionScreen from '../screens/RegionScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Continents';

const getHeaderTitle = route => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Continents':
      return 'Continents';
    case 'Region':
      return 'Region';
    default:
      return '';
  }
};

const ContinentsNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen name="Continents" component={ContinentsScreen} />
      <Stack.Screen name="Region" component={RegionScreen} />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

ContinentsNavigator.propTypes = {
  navigation: shape({
    setOptions: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  route: object.isRequired,
};

export default ContinentsNavigator;
