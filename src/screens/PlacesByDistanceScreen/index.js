import React, { useCallback, useRef } from 'react';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, func } from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import * as Location from 'expo-location';

import { PLACES_BY_DISTANCE } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import styles from './styles';
import Card from '../../components/common/Card';

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

  const scrollRef = useRef();

  useScrollToTop(scrollRef);

  return (
    <LoadingWrapper isLoading={loading || !data}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          ref={ref => {
            scrollRef.current = ref;
          }}
        >
          {data?.placesByDistance.map(place => (
            <Card
              onPress={() => navigation.navigate('Place', { placeId: place.id })}
              title={place.name}
              image={place.imagesSrc[0]}
              distance={place.distance}
              key={place.id}
            />
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
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
