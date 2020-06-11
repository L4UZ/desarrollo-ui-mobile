import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { List, Caption, Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, string, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Rating } from 'react-native-ratings';

import { PLACE_DETAIL } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import AddReview from '../../components/AddReview';
import Photos from '../../components/Photos';
import Accordions from '../../components/Accordions';
import styles from './styles';

const PlaceDetailScreen = ({
  route: {
    params: { placeId },
  },
  navigation,
}) => {
  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });

  navigation.setOptions({ title: data?.place.name || 'Place' });

  return (
    <LoadingWrapper isLoading={loading || !data}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Rating
            ratingCount={5}
            startingValue={data?.place.overallScore}
            fractions={0}
            imageSize={35}
            readonly
          />

          <Photos images={data?.place.imagesSrc} />

          {data?.place.description ? (
            <Text>{data?.place.description}</Text>
          ) : (
            <Text>No description Provided</Text>
          )}

          <Accordions activities={data?.place.activities} reviews={data?.place.reviews} />

          {!!data && <AddReview placeId={data?.place.id} />}
        </ScrollView>
      </View>
    </LoadingWrapper>
  );
};

PlaceDetailScreen.navigationOptions = {
  header: null,
};

PlaceDetailScreen.propTypes = {
  route: shape({
    params: shape({
      placeId: string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: shape({ setOptions: func.isRequired }).isRequired,
};

export default PlaceDetailScreen;
