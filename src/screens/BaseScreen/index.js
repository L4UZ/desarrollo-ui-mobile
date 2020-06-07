import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import styles from './styles';

const ContinentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the Continent view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('Trips')}>Go to trips</Button>
        </View>
      </ScrollView>
    </View>
  );
};

ContinentsScreen.navigationOptions = {
  header: null,
};

export default ContinentsScreen;
