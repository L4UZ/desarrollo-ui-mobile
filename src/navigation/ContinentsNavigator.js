import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContinentsScreen from '../screens/ContinentsScreen';
import RegionScreen from '../screens/RegionScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Continents';

const ContinentsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen name="Continents" component={ContinentsScreen} />
      <Stack.Screen name="Region" component={RegionScreen} />
      <Stack.Screen name="Place" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

export default ContinentsNavigator;
