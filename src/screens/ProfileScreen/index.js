import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import { useAuth } from '../../AuthProvider';
import styles from './styles';

const ProfileScreen = () => {
  const { resetToken } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>This is the ProfileScreen view</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button onPress={resetToken}>Sign out</Button>
        </View>
      </ScrollView>
    </View>
  );
};

ProfileScreen.navigationOptions = {
  header: null,
};

export default ProfileScreen;
