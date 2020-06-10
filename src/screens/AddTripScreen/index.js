import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button, ActivityIndicator, HelperText } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';

import { ADD_TRIP } from '../../api/mutations';
import { useAuth } from '../../AuthProvider';
import styles from './styles';

const AddTripScreen = () => {
  const { token } = useAuth();

  const [addTrip, { loading, error }] = useMutation(ADD_TRIP);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, { resetForm }) => {
            addTrip({ variables: { trip: { token, name: values.name } } });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <View style={styles.form}>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="name"
                keyboardType="default"
                label="Trip Name"
                mode="outlined"
                placeholder="Enter your trip's name"
                required
                textContentType="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                error={errors.name && touched.name}
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
    </View>
  );
};

AddTripScreen.navigationOptions = {
  header: null,
};

export default AddTripScreen;
