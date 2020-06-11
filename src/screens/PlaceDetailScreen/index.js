import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { List, Caption, Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, string, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Rating } from 'react-native-ratings';
import Carousel from 'react-native-snap-carousel';

import { PLACE_DETAIL } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import AddReview from '../../components/AddReview';
import styles from './styles';
import Layout from '../../constants/Layout';

const PlaceDetailScreen = ({
  route: {
    params: { placeId },
  },
  navigation,
}) => {
  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });
  const [isReviewsExpanded, setIsReviewsExpanded] = useState(true);
  const [isActivitiesExpanded, setIsActivitiesExpanded] = useState(true);

  navigation.setOptions({ title: data?.place.name || 'Place' });

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => <Image style={{ aspectRatio: 16 / 9 }} source={{ uri: item }} />;

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
          <View style={{ marginVertical: 30 }}>
            <Carousel
              layout="tinder"
              loop
              data={data?.place.imagesSrc}
              renderItem={renderItem}
              sliderWidth={Layout.window.width - 30}
              itemWidth={Layout.window.width - 30}
            />
          </View>

          <Text>{data?.place.description}</Text>

          <List.Section>
            <List.Accordion
              title="Activities"
              titleStyle={styles.accordionTitle}
              expanded={isActivitiesExpanded}
              onPress={() => setIsActivitiesExpanded(!isActivitiesExpanded)}
            >
              {data?.place.activities.map(activity => (
                <View key={activity.id} style={styles.reviewItem}>
                  <Text style={{ marginBottom: 5 }}>
                    <Title style={{ fontWeight: '600' }}>{`${activity.name} `}</Title>
                    <Title style={{ fontWeight: '400' }}>{`- $${activity.price}`}</Title>
                  </Text>
                  <Text style={{ flexShrink: 1 }}>{activity.description}</Text>
                </View>
              ))}
            </List.Accordion>

            <List.Accordion
              title="Reviews"
              titleStyle={styles.accordionTitle}
              expanded={isReviewsExpanded}
              onPress={() => setIsReviewsExpanded(!isReviewsExpanded)}
            >
              {data?.place.reviews.map(review => (
                <View key={review.id} style={styles.reviewItem}>
                  <View style={styles.reviewItemTitle}>
                    <Rating
                      ratingCount={5}
                      startingValue={review.score}
                      fractions={20}
                      imageSize={15}
                      readonly
                    />
                  </View>
                  <Text>{review.comment}</Text>
                  <Caption style={{ marginLeft: 0 }}>
                    {`${review.userFullName} (${review.userEmail})`}
                  </Caption>
                </View>
              ))}
            </List.Accordion>
          </List.Section>

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
