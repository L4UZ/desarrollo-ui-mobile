import React from 'react';
import { View, Image } from 'react-native';
import { string } from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import Layout from '../../constants/Layout';

const Photos = ({ images }) => {
  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => <Image style={{ aspectRatio: 16 / 9 }} source={{ uri: item }} />;

  return (
    <View style={{ marginVertical: 30 }}>
      <Carousel
        layout="tinder"
        loop
        data={images}
        renderItem={renderItem}
        sliderWidth={Layout.window.width - 30}
        itemWidth={Layout.window.width - 30}
      />
    </View>
  );
};

Photos.propTypes = {
  images: string,
};

Photos.defaultProps = {
  images: null,
};

export default Photos;
