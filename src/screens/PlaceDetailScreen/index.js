import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

const PlaceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the PlaceDetailScreen view</Text>
        </View>
      </ScrollView>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = {
  header: null,
};

export default PlaceDetailScreen;
