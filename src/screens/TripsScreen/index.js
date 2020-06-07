import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func } from 'prop-types';

import styles from './styles';

const TripsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the TripsScreen view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('Trip')}>Go to trip</Button>
        </View>
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
