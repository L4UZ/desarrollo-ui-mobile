import * as React from 'react';
import { object, shape, func } from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';

import ContinentsNavigator from './ContinentsNavigator';
import PlacesByDistanceNavigator from './PlacesByDistanceNavigator';
import TripsNavigator from './TripsNavigator';

import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { useAuth } from '../AuthProvider';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Signin';

const getHeaderTitle = route => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Signin':
      return 'Sign in';
    case 'Signup':
      return 'Sign up';
    case 'Continents':
      return 'Continents';
    case 'Trips':
      return 'Trips';
    case 'HomeScreen':
      return 'HomeScreen';
    case 'PlacesByDistance':
      return 'Places by Distance';
    case 'Profile':
      return 'Profile';
    default:
      return '';
  }
};

const BottomTabNavigator = ({ navigation, route }) => {
  const { token } = useAuth();

  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {token ? (
        <>
          <BottomTab.Screen
            name="Continents"
            component={ContinentsNavigator}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
            }}
          />
          <BottomTab.Screen
            name="Trips"
            component={TripsNavigator}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-airplane" />,
            }}
          />
          <BottomTab.Screen
            name="PlacesByDistance"
            component={PlacesByDistanceNavigator}
            options={{
              title: 'Places By Distance',
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
            }}
          />
        </>
      ) : (
        <>
          <BottomTab.Screen
            name="Signin"
            component={SigninScreen}
            options={{
              title: 'Sign In',
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
            }}
          />
          <BottomTab.Screen
            name="Signup"
            component={HomeScreen}
            options={{
              title: 'Sign Up',
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
            }}
          />
        </>
      )}
    </BottomTab.Navigator>
  );
};

BottomTabNavigator.propTypes = {
  navigation: shape({
    setOptions: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  route: object.isRequired,
};

export default BottomTabNavigator;
