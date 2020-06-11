import React, { useRef } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from 'react-native-paper';
import { shape, func } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { wrapScrollView, ScrollIntoView } from 'react-native-scroll-into-view';
import { useScrollToTop } from '@react-navigation/native';

import { CONTINENTS } from '../../api/queries';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import Card from '../../components/common/Card';
import styles from './styles';
import Theme from '../../constants/Theme';

const AutoScroll = wrapScrollView(ScrollView);

const ContinentsScreen = ({ navigation }) => {
  const { data, loading } = useQuery(CONTINENTS);

  const scrollAnchors = data?.continents.map(({ name }) => name);
  const elementsRef = useRef([]);
  const scrollRef = useRef();

  useScrollToTop(scrollRef);

  return (
    <LoadingWrapper isLoading={loading || !data}>
      <View style={styles.container}>
        <AutoScroll
          style={styles.container}
          scrollIntoViewOptions={{ immediate: false }}
          ref={ref => {
            scrollRef.current = ref;
          }}
        >
          <ScrollIntoView style={styles.anchorsContainer}>
            {scrollAnchors?.map((anchor, i) => (
              <Button
                key={`${anchor}${i}`}
                style={styles.anchors}
                contentStyle={styles.anchorsContent}
                labelStyle={styles.anchorsLabel}
                color={Theme.colors.accent}
                onPress={() => elementsRef.current[i].scrollIntoView()}
                mode="outlined"
              >
                {anchor}
              </Button>
            ))}
          </ScrollIntoView>
          {data?.continents.map((continent, i) => (
            <View key={continent.id}>
              <ScrollIntoView
                align="top"
                ref={ref => {
                  elementsRef.current[i] = ref;
                }}
              >
                <Text style={styles.title}>{continent.name}</Text>
              </ScrollIntoView>
              {continent.regions.map(region => (
                <Card
                  onPress={() => navigation.navigate('Region', { regionId: region.id })}
                  title={region.name}
                  image={region.imageSrc}
                  key={region.id}
                />
              ))}
            </View>
          ))}
        </AutoScroll>
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
