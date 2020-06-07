import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { string, bool } from 'prop-types';

import theme from '../constants/theme';

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? theme.colors.accent : theme.colors.disabled}
  />
);

TabBarIcon.propTypes = {
  name: string.isRequired,
  focused: bool,
};
TabBarIcon.defaultProps = {
  focused: bool,
};

export default TabBarIcon;
