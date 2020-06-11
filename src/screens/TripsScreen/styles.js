import { StyleSheet } from 'react-native';

import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  fab: {
    position: 'absolute',
    backgroundColor: Theme.colors.accent,
    bottom: 20,
    right: 20,
  },
});
