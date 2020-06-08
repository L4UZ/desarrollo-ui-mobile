import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func, string } from 'prop-types';

import styles from './styles';

const RegionScreen = ({
  navigation,
  route: {
    params: { regionId },
  },
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the {regionId} RegionScreen view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('Place', { placeId: 'PLACE_ID_FROM_REGION' })}>
            Go to place
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

RegionScreen.navigationOptions = {
  header: null,
};

RegionScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      regionId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RegionScreen;