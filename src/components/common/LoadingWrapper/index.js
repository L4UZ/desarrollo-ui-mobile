import React from 'react';
import { bool, node } from 'prop-types';

import Loading from '../Loading';

const LoadingWrapper = ({ children, isLoading }) => (isLoading ? <Loading /> : children);

LoadingWrapper.propTypes = {
  children: node.isRequired,
  isLoading: bool,
};

LoadingWrapper.defaultProps = {
  isLoading: false,
};

export default LoadingWrapper;
