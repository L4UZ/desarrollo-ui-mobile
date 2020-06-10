import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    height: 140,
    width: '100%',
    position: 'relative',
    marginBottom: 7,
  },
  overlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  title: {
    fontWeight: '400',
    fontSize: 35,
    color: 'white',
    bottom: 0,
    left: 0,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
});
