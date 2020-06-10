import React from 'react';
import { Text, View, Image } from 'react-native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, string, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Rating } from 'react-native-ratings';

import { PLACE_DETAIL } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>{data?.place.description}</Text>

          <List.Section>
            <List.Accordion title="Activities">
              {data?.place.activities.map(activity => (
                <List.Item
                  key={activity.id}
                  title={`${activity.name} - $${activity.price}`}
                  description={activity.description}
                />
              ))}
            </List.Accordion>

            <List.Accordion title="Reviews">
              {data?.place.reviews.map(review => (
                <View key={review.id}>
                  <Rating
                    ratingCount={5}
                    startingValue={review.score}
                    fractions={20}
                    imageSize={25}
                  />
                  <List.Item
                    title={review.comment}
                    description={`By: ${review.userFullName} (${review.userEmail})`}
                  />
                </View>
              ))}
            </List.Accordion>
          </List.Section>

          <View>
            {data?.place.imagesSrc.map((image, i) => (
              <Image key={`${image}${i}`} height={50} width={50} source={{ uri: image }} />
            ))}
          </View>
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
