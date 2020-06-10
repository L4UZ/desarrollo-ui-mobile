import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func, string } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import styles from './styles';
import { TRIP } from '../../api/queries';

const TripDetailScreen = ({
  navigation,
  route: {
    params: { tripId },
  },
}) => {
  const { data, loading } = useQuery(TRIP, { variables: { tripId } });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the {tripId} Trip view!</Text>
        </View>
        {data?.trip.places.map(place => (
          <View style={styles.helpContainer}>
            <Button onPress={() => navigation.navigate('Place', { placeId: place.id })}>
              Go to {place.name}
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

TripDetailScreen.navigationOptions = {
  header: null,
};

TripDetailScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      tripId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TripDetailScreen;
