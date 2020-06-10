import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import CenterWrapper from '../CenterWrapper';

const Loading = () => (
  <CenterWrapper>
    <ActivityIndicator size={100} animating />
  </CenterWrapper>
);

export default Loading;
