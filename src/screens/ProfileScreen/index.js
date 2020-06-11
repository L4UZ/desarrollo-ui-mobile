import React from 'react';
import { Button } from 'react-native-paper';
import CenterWrapper from '../../components/common/CenterWrapper';

import { useAuth } from '../../AuthProvider';
import styles from './styles';

const ProfileScreen = () => {
  const { resetToken } = useAuth();

  return (
    <CenterWrapper>
      <Button onPress={resetToken} style={styles.signOutButton} mode="contained">
        Sign out
      </Button>
    </CenterWrapper>
  );
};

ProfileScreen.navigationOptions = {
  header: null,
};

export default ProfileScreen;
