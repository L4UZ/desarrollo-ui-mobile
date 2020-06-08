import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ActivityIndicator } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import * as Location from 'expo-location';

import { PLACES_BY_DISTANCE } from '../../api/queries';
import styles from './styles';

const PlacesByDistanceScreen = ({ navigation }) => {
  const [getPlaces, { data, loading }] = useLazyQuery(PLACES_BY_DISTANCE);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') navigation.navigate('Continents');
        else if (!data) {
          const {
            coords: { latitude, longitude },
          } = await Location.getCurrentPositionAsync({});
          getPlaces({ variables: { coords: { latitude, longitude } } });
        }
      })();
    }, [data])
  );

  if (!data || loading)
    return (
      <View>
        <ActivityIndicator size="large" animating />
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <>
          <View style={styles.helpContainer}>
            <Button
              onPress={() => navigation.navigate('Place', { placeId: 'PLACE_ID_FROM_DISTANCE' })}
            >
              Go to place
            </Button>
          </View>
          {data.placesByDistance.map(place => (
            <Text key={place.id}>{`${place.name} (${place.distance})`}</Text>
          ))}
        </>
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
