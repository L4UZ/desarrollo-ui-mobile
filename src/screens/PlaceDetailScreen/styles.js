import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 100,
    paddingHorizontal: 15,
  },
  reviewItem: {
    borderBottomColor: Theme.colors.disabled,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  reviewItemTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  accordionTitle: {
    fontSize: 25,
    marginLeft: -10,
  },
});
