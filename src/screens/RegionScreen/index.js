import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import styles from './styles';

const RegionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the RegionScreen view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('Place')}>Go to place</Button>
        </View>
      </ScrollView>
    </View>
  );
};

RegionScreen.navigationOptions = {
  header: null,
};

export default RegionScreen;
