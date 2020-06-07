import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, string } from 'prop-types';

import styles from './styles';

const PlaceDetailScreen = ({
  route: {
    params: { placeId },
  },
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the {placeId} PlaceDetailScreen view</Text>
        </View>
      </ScrollView>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = {
  header: null,
};

PlaceDetailScreen.propTypes = {
  route: shape({
    params: shape({
      placeId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlaceDetailScreen;
