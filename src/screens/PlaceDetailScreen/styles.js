import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  overallScore: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 100,
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
});
