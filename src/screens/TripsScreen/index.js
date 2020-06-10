import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title, Card } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import styles from './styles';
import { useAuth } from '../../AuthProvider/index';
import { USER_TRIPS } from '../../api/queries';

const TripsScreen = ({ navigation }) => {
  const { token } = useAuth();

  const { data, loading } = useQuery(USER_TRIPS, { variables: { token } });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('AddTrip')}>Add Trip</Button>
          <Button onPress={() => navigation.navigate('Trip', { tripId: 'TRIP_ID' })}>
            Go to trip
          </Button>
        </View>

        {data?.trips.map(trip => (
          <>
            {/* <Title key={trip.id}>{trip.name}</Title> */}
            <Card
              onPress={() => navigation.navigate('Trip', { tripId: trip.id })}
              style={{ marginBottom: 20 }}
            >
              <Card.Content>
                <Title>{trip.name}</Title>
              </Card.Content>
              <Card.Cover
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40',
                }}
              />
            </Card>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

TripsScreen.navigationOptions = {
  header: null,
};

TripsScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default TripsScreen;
