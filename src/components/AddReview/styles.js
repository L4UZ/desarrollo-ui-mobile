import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  formElement: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },
});
