import React from 'react';
import { View } from 'react-native';
import { node } from 'prop-types';

import styles from './styles';

const Loading = ({ children }) => <View style={styles.container}>{children}</View>;

Loading.propTypes = {
  children: node.isRequired,
};

export default Loading;
