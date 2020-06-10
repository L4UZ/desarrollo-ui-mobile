import * as React from 'react';
import { Text, View } from 'react-native';
import { Title, List, Image } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, string, bool } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { PLACE_DETAIL } from '../../api/queries';
import styles from './styles';

const PlaceDetailScreen = ({
  route: {
    params: { placeId },
  },
}) => {
  const state = { expanded: 'true' };
  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });

  // ratingCompleted(rating) {
  //   console.log("Rating is: " + rating)
  // }

  // const handlePress = () =>
  //   this.setState({
  //     expanded: !this.state.expanded,
  //   });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {!loading && (
          <>
            <Title>{data.place.name}</Title>
            <Text>{data.place.description}</Text>

            <List.Section>
              <List.Accordion
                title="Activities"
                // expanded={this.state.expanded}
                // onPress={this.handlePress}
              >
                {data.place.activities.map(activity => (
                  <List.Item
                    title={`${activity.name} - $${activity.price}`}
                    description={activity.description}
                  />
                ))}
              </List.Accordion>

              <List.Accordion
                title="Reviews"
                // expanded={this.state.expanded}
                // onPress={this.handlePress}
              >
                {data.place.reviews.map(review => (
                  <>
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
                  </>
                ))}
              </List.Accordion>
            </List.Section>

            {/* <View>
              {data.place.imagesSrc.map(image => (
                // <Image
                //   style={{ heigth: 50, width: 50 }}
                //   source={{ url: 'https://www.dw.com/image/44228683_303.jpg' }}
                // />
                <Text>{image}</Text>
              ))}
            </View> */}
          </>
        )}
      </ScrollView>
    </View>
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
  state: shape({
    expanded: bool,
  }).isRequired,
};

export default PlaceDetailScreen;
