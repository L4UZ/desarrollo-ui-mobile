import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesByDistanceScreen from '../screens/PlacesByDistanceScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'PlacesByDistance';

const PlacesByDistanceNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name="PlacesByDistance"
        component={PlacesByDistanceScreen}
        options={{ title: 'Places by Distance' }}
      />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

export default PlacesByDistanceNavigator;
