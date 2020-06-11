import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  signOutButton: {
    backgroundColor: Theme.colors.accent,
    color: 'white',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});
