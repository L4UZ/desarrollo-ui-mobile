import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  signOutButton: {
    backgroundColor: Theme.colors.accent,
    color: 'white',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  userInformationContainer: {
    marginTop: 20,
    marginBottom: 60,
    height: 50,
  },
});
