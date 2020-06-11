import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { List, Caption, Title } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { arrayOf, object } from 'prop-types';

import styles from './styles';

const Accordions = ({ activities, reviews }) => {
  const [isReviewsExpanded, setIsReviewsExpanded] = useState(true);
  const [isActivitiesExpanded, setIsActivitiesExpanded] = useState(true);

  return (
    <List.Section>
      <List.Accordion
        title="Activities"
        titleStyle={styles.accordionTitle}
        expanded={isActivitiesExpanded}
        onPress={() => setIsActivitiesExpanded(!isActivitiesExpanded)}
      >
        {activities.map(activity => (
          <View key={activity.id} style={styles.listItem}>
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
        {reviews.map(review => (
          <View key={review.id} style={styles.listItem}>
            <View style={styles.itemTitle}>
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
  );
};

Accordions.propTypes = {
  activities: arrayOf(object),
  reviews: arrayOf(object),
};

Accordions.defaultProps = {
  activities: null,
  reviews: null,
};

export default Accordions;
