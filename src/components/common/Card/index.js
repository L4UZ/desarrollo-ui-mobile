import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

import styles from './styles';

const Card = ({ onPress, image, title, distance }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.imageBackground}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{`${title} ${distance}`}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

Card.propTypes = {
  onPress: func.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  distance: string,
};

Card.defaultProps = {
  distance: '',
};

export default Card;
