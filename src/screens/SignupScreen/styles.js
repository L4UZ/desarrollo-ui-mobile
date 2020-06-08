import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    marginTop: '20',
    height: Layout.window.height,
  },
  keyboard: {
    flex: 1,
    height: 100,
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
    marginLeft: 5,
    marginRight: 5,
  },
  formElement: {
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
