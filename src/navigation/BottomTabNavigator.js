import * as React from 'react';
import { object, shape, func } from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const getHeaderTitle = route => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Signin':
      return 'Sign in';
    default:
      return '';
  }
};

const BottomTabNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Sign In"
        component={SignupScreen}
        options={{
          title: 'Sign In',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
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
