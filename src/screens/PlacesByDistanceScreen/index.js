import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func } from 'prop-types';

import styles from './styles';

const PlacesByDistanceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the PlacesByDistanceScreen view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button
            onPress={() => navigation.navigate('Place', { placeId: 'PLACE_ID_FROM_DISTANCE' })}
          >
            Go to place
          </Button>
        </View>
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
