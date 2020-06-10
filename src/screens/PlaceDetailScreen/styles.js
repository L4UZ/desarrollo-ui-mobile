import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  overallScore: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  reviewItem: {
    borderBottomColor: Theme.colors.disabled,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  reviewItemTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
