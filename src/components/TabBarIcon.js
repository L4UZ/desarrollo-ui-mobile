import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { string, bool } from 'prop-types';

import theme from '../constants/Theme';

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? theme.colors.primary : theme.colors.disabled}
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
