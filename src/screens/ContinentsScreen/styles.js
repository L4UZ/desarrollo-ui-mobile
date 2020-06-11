import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: '100',
    fontSize: 50,
    paddingTop: 65,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  anchorsContainer: {
    paddingHorizontal: 40,
    marginTop: 15,
  },
  anchors: {
    marginVertical: 5,
    borderColor: Theme.colors.accent,
  },
  anchorsContent: {
    paddingVertical: 10,
  },
  anchorsLabel: {
    fontSize: 18,
  },
});
