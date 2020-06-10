import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';
import { Chip } from 'react-native-paper';

import styles from './styles';

const Card = ({ onPress, image, title, distance }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.imageBackground}>
      <View style={styles.overlay}>
        {!!distance && (
          <Chip style={styles.chip} icon="map-marker-radius">
            {distance}
          </Chip>
        )}
        <Text style={styles.title}>{title}</Text>
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
  distance: null,
};

export default Card;
