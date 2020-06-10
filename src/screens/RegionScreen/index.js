import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { shape, func, string } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { REGION_DETAIL } from '../../api/queries';
import styles from './styles';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import Card from '../../components/common/Card';

const RegionScreen = ({
  navigation,
  route: {
    params: { regionId },
  },
}) => {
  const { data, loading } = useQuery(REGION_DETAIL, { variables: { regionId } });

  navigation.setOptions({ title: data?.region.name || 'Region' });

  return (
    <LoadingWrapper isLoading={loading}>
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {data?.region.places.map(place => (
            <Card
              onPress={() => navigation.navigate('Place', { placeId: place.id })}
              title={place.name}
              image={place.imagesSrc[0]}
              key={place.id}
            />
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
  );
};

RegionScreen.navigationOptions = {
  header: null,
};

RegionScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
    setOptions: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      regionId: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RegionScreen;
