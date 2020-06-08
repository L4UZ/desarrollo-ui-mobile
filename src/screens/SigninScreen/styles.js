import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  form: {
    height: Layout.window.height,
    marginTop: '20%',
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
    marginLeft: '5%',
    marginRight: '5%',
  },
  formElement: {
    marginTop: '5%',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: '10%',
    alignSelf: 'center',
  },
});
