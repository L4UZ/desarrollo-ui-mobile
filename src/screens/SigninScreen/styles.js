import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  mainContainer: {
    height: Layout.window.height,
    justifyContent: 'center',
    marginTop: 25,
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 25,
    marginTop: -110,
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
