import React from 'react';
import { View } from 'react-native';
import { Button, Title, Caption, Avatar } from 'react-native-paper';

import { useAuth } from '../../AuthProvider';
import CenterWrapper from '../../components/common/CenterWrapper';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import styles from './styles';

const ProfileScreen = () => {
  const { resetToken } = useAuth();

  const currentUser = useCurrentUser();

  return (
    <CenterWrapper>
      <Avatar.Icon size={100} icon="account" />
      <View style={styles.userInformationContainer}>
        <CenterWrapper>
          <Title>{`${currentUser?.firstName} ${currentUser?.lastName}`}</Title>
          <Caption>{currentUser.email}</Caption>
        </CenterWrapper>
      </View>
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
