import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

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

export default TripsScreen;
