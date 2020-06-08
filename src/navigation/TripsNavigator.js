import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from '../screens/TripsScreen';
import TripDetailScreen from '../screens/TripDetailScreen';
import AddTripScreen from '../screens/AddTripScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Trips';

const TripsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen name="Trips" component={TripsScreen} />
      <Stack.Screen name="Trip" component={TripDetailScreen} />
      <Stack.Screen name="AddTrip" component={AddTripScreen} options={{ title: 'Add Trip' }} />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

export default TripsNavigator;
