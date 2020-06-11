import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, ActivityIndicator, HelperText } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { shape, func } from 'prop-types';

import { ADD_TRIP } from '../../api/mutations';
import { USER_TRIPS } from '../../api/queries';
import { useAuth } from '../../AuthProvider';
import styles from './styles';
import LoadingWrapper from '../../components/common/LoadingWrapper';
import CenterWrapper from '../../components/common/CenterWrapper';

const AddTripScreen = ({ navigation }) => {
  const { token } = useAuth();

  const [addTrip, { loading, error }] = useMutation(ADD_TRIP, {
    onCompleted: () => navigation.goBack(),
    update(cache, { data: { addTrip: newTrip } }) {
      const { trips } = cache.readQuery({ query: USER_TRIPS, variables: { token } });
      cache.writeQuery({
        query: USER_TRIPS,
        variables: { token },
        data: { trips: [...trips, newTrip] },
      });
    },
  });

  return (
    <LoadingWrapper isLoading={loading}>
      <CenterWrapper>
        <View style={styles.form}>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, { resetForm }) => {
              addTrip({ variables: { trip: { token, name: values.name } } });
              resetForm();
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <View>
                <TextInput
                  autoCapitalize="words"
                  label="Trip Name"
                  mode="outlined"
                  placeholder="Enter your trip's name"
                  required
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <Button mode="contained" onPress={handleSubmit} style={styles.formElement}>
                  Add trip
                </Button>
              </View>
            )}
          </Formik>
          {loading && <ActivityIndicator size="large" animating style={{ marginTop: 20 }} />}
          {error && (
            <HelperText type="error" visible>
              Error adding trip
            </HelperText>
          )}
        </View>
      </CenterWrapper>
    </LoadingWrapper>
  );
};

AddTripScreen.propTypes = {
  navigation: shape({ goBack: func.isRequired }).isRequired,
};

AddTripScreen.navigationOptions = {
  header: null,
};

export default AddTripScreen;
