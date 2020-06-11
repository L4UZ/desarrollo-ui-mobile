import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    paddingLeft: 8,
  },
  form: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
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
