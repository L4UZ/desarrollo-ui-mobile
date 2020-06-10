import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Title, Card } from 'react-native-paper';
import { shape, func, string } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { REGION_DETAIL } from '../../api/queries';
import styles from './styles';

const RegionScreen = ({
  navigation,
  route: {
    params: { regionId },
  },
}) => {
  const { data, loading } = useQuery(REGION_DETAIL, { variables: { regionId } });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {data?.region.places.map(place => (
          <>
            <Title key={place.id}>{place.name}</Title>
            <Card
              onPress={() => navigation.navigate('Place', { placeId: place.id })}
              style={{ marginBottom: 20 }}
              key={place.id}
            >
              <Card.Content>
                <Title>{place.name}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: place.imagesSrc[0] }} />
            </Card>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

RegionScreen.navigationOptions = {
  header: null,
};

RegionScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      regionId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RegionScreen;
