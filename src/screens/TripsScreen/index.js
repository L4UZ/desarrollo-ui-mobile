import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { useAuth } from '../../AuthProvider/index';
import { USER_TRIPS } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import styles from './styles';
import Card from '../../components/common/Card';

const TripsScreen = ({ navigation }) => {
  const { token } = useAuth();

  const { data, loading } = useQuery(USER_TRIPS, { variables: { token } });

  return (
    <LoadingWrapper isLoading={loading}>
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.helpContainer}>
            <Button onPress={() => navigation.navigate('AddTrip')}>Add Trip</Button>
          </View>
          {data?.trips.map(trip => (
            <Card
              key={trip.id}
              onPress={() => navigation.navigate('Trip', { tripId: trip.id })}
              title={trip.name}
              image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40"
            />
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
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
