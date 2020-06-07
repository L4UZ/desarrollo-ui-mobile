import * as React from 'react';
import { object, shape, func } from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from '../screens/TripsScreen';
import TripDetailScreen from '../screens/TripDetailScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Trips';

const getHeaderTitle = route => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Trips':
      return 'Trips';
    case 'Trip':
      return 'Trip';
    case 'Place':
      return 'Place';
    default:
      return '';
  }
};

const TripsNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen name="Trips" component={TripsScreen} />
      <Stack.Screen name="Trip" component={TripDetailScreen} />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

TripsNavigator.propTypes = {
  navigation: shape({
    setOptions: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  route: object.isRequired,
};

export default TripsNavigator;
