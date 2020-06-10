import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { CONTINENTS } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import Card from '../../components/common/Card';
import styles from './styles';

const ContinentsScreen = ({ navigation }) => {
  const { data, loading } = useQuery(CONTINENTS);

  return (
    <LoadingWrapper isLoading={loading}>
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {data?.continents.map(continent => (
            <>
              <Title style={styles.title} key={continent.id}>
                {continent.name}
              </Title>
              {continent.regions.map(region => (
                <Card
                  onPress={() => navigation.navigate('Region', { regionId: region.id })}
                  title={region.name}
                  image={region.imageSrc}
                  key={region.id}
                />
              ))}
            </>
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
  );
};

ContinentsScreen.navigationOptions = {
  header: null,
};

ContinentsScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default ContinentsScreen;
