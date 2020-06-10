import React from 'react';
import { View } from 'react-native';
import { node } from 'prop-types';

import styles from './styles';

const CenterWrapper = ({ children }) => <View style={styles.container}>{children}</View>;

CenterWrapper.propTypes = {
  children: node.isRequired,
};

export default CenterWrapper;
