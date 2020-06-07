import * as React from 'react';
import { object, shape, func } from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesByDistanceScreen from '../screens/PlacesByDistanceScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Trips';

const getHeaderTitle = route => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Trips':
      return 'Trips';
    case 'Continents':
      return 'Continents';
    default:
      return '';
  }
};

const PlacesByDistanceNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlacesByDistance" component={PlacesByDistanceScreen} />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

PlacesByDistanceNavigator.propTypes = {
  navigation: shape({
    setOptions: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  route: object.isRequired,
};

export default PlacesByDistanceNavigator;
