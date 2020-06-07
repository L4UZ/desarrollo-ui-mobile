import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ApolloProvider } from '@apollo/react-hooks';

import apiClient from './src/api/apiClient';
import Theme from './src/constants/theme';
import useCachedResources from './src/hooks/useCachedResources';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import AuthProvider from './src/AuthProvider';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;
  return (
    <PaperProvider theme={Theme}>
      <ApolloProvider client={apiClient}>
        <AuthProvider>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
            <NavigationContainer linking={LinkingConfiguration}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </AuthProvider>
      </ApolloProvider>
    </PaperProvider>
  );
};

export default App;
