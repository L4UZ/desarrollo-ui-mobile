import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  mainContainer: {
    height: Layout.window.height,
    justifyContent: 'center',
    marginTop: 25,
  },
  keyboard: {
    flex: 1,
    height: 100,
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    marginBottom: 100,
    marginHorizontal: 25,
  },
  formElement: {
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    alignSelf: 'center',
  },
});
