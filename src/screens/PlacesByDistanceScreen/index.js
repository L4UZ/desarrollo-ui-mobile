import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ActivityIndicator } from 'react-native-paper';
import { shape, func } from 'prop-types';
import * as Location from 'expo-location';

import styles from './styles';

const PlacesByDistanceScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') navigation.navigate('Continents');
        else if (!location) {
          const { coords } = await Location.getCurrentPositionAsync({});
          setLocation(coords);
        }
      })();
    }, [location])
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {location ? (
          <>
            <View style={styles.helpContainer}>
              <Button
                onPress={() => navigation.navigate('Place', { placeId: 'PLACE_ID_FROM_DISTANCE' })}
              >
                Go to place
              </Button>
            </View>
            <Text>
              `${location.latitude} ${location.longitude}`
            </Text>
          </>
        ) : (
          <ActivityIndicator size="large" animating />
        )}
      </ScrollView>
    </View>
  );
};

PlacesByDistanceScreen.navigationOptions = {
  header: null,
};

PlacesByDistanceScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default PlacesByDistanceScreen;
