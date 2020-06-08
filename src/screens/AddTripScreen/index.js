import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

const AddTripScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the AddTripScreen view</Text>
        </View>
      </ScrollView>
    </View>
  );
};

AddTripScreen.navigationOptions = {
  header: null,
};

export default AddTripScreen;
