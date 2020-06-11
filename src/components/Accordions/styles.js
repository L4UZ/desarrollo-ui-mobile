import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  listItem: {
    borderBottomColor: Theme.colors.disabled,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  itemTitle: {
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
