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
  fab: {
    position: 'absolute',
    backgroundColor: Theme.colors.primary,
    bottom: 20,
    right: 20,
  },
});
