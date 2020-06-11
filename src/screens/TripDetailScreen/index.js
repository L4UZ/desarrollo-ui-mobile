import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, func, string } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { TRIP } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import styles from './styles';
import Card from '../../components/common/Card';

const TripDetailScreen = ({
  navigation,
  route: {
    params: { tripId },
  },
}) => {
  const { data, loading } = useQuery(TRIP, { variables: { tripId } });

  navigation.setOptions({ title: data?.trip.name || 'Trip' });

  return (
    <LoadingWrapper isLoading={loading}>
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {data?.trip.places.map((place, i) => (
            <Card
              onPress={() => navigation.navigate('Place', { placeId: place.id })}
              title={place.name}
              image={place.imagesSrc[0]}
              key={`${place.id}${i}`}
            />
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
  );
};

TripDetailScreen.navigationOptions = {
  header: null,
};

TripDetailScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
    setOptions: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      tripId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TripDetailScreen;
