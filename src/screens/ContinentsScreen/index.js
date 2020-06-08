import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { shape, func } from 'prop-types';

import styles from './styles';

const ContinentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the Continents view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={() => navigation.navigate('Region', { regionId: 'REGION_ID' })}>
            Go to region
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

ContinentsScreen.navigationOptions = {
  header: null,
};

ContinentsScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default ContinentsScreen;