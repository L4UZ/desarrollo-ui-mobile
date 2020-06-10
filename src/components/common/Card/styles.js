import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    height: 140,
    width: '100%',
    marginBottom: 7,
  },
  overlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  chip: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
