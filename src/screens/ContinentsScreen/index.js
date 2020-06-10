import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Title } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import styles from './styles';
import { CONTINENTS } from '../../api/queries';

const ContinentsScreen = ({ navigation }) => {
  const { data, loading } = useQuery(CONTINENTS);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {data?.continents.map(continent => (
          <>
            <Title key={continent.id}>{continent.name}</Title>
            {continent.regions.map(region => (
              <Card
                onPress={() => navigation.navigate('Region', { regionId: region.id })}
                style={{ marginBottom: 20 }}
                key={region.id}
              >
                <Card.Content>
                  <Title>{region.name}</Title>
                </Card.Content>
                <Card.Cover source={{ uri: region.imageSrc }} />
              </Card>
            ))}
          </>
        ))}
      </ScrollView>
    </View>
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
