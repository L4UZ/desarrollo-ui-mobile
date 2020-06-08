import * as React from 'react';
import { View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Title, TextInput, Button, ActivityIndicator, HelperText } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { pick } from 'lodash';

import { useAuth } from '../../AuthProvider';
import { SIGN_UP_MUTATION } from '../../api/mutations';
import { signUpSchema } from '../../constants/validations';
import Logo from '../../assets/images/logo192.png';

import styles from './styles';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignupScreen = () => {
  const { setToken } = useAuth();

  const [signUp, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: ({ signUp: token }) => {
      setToken(token);
      // TODO: Redirect
    },
    onError: () => {},
  });

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView enabled>
        <ScrollView style={styles.form} keyboardShouldPersistTaps="handled">
          <Image style={styles.logo} source={Logo} />
          <View style={styles.innerContainer}>
            <Title style={{ alignSelf: 'center' }}>SIGN UP</Title>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={(values, { resetForm }) => {
                signUp({
                  variables: { user: pick(values, ['firstName', 'lastName', 'email', 'password']) },
                });
                resetForm();
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <View style={{ marginTop: '2%' }}>
                  <View>
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="name"
                      keyboardType="default"
                      label="First Name"
                      mode="outlined"
                      placeholder="Enter your first name"
                      required
                      textContentType="name"
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                      error={errors.firstName && touched.firstName}
                    />
                    {errors?.firstName && (
                      <HelperText type="error" visible>
                        {errors.firstName}
                      </HelperText>
                    )}
                  </View>
                  <View style={{ marginTop: '2%' }}>
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="name"
                      keyboardType="default"
                      label="Last name"
                      mode="outlined"
                      placeholder="Enter your last name"
                      required
                      textContentType="name"
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                      error={errors.lastName && touched.lastName}
                    />
                    {errors?.lastName && (
                      <HelperText type="error" visible>
                        {errors.lastName}
                      </HelperText>
                    )}
                  </View>
                  <View style={{ marginTop: '2%' }}>
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="email"
                      keyboardType="email-address"
                      label="Email Address"
                      mode="outlined"
                      placeholder="Enter your email"
                      required
                      textContentType="emailAddress"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      error={errors.email && touched.email}
                    />
                    {errors?.email && (
                      <HelperText type="error" visible>
                        {errors.email}
                      </HelperText>
                    )}
                  </View>
                  <View style={{ marginTop: '2%' }}>
                    <TextInput
                      autoCapitalize="none"
                      label="Password"
                      mode="outlined"
                      placeholder="Enter your password"
                      required
                      textContentType="password"
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      error={errors.password && touched.password}
                    />
                    {errors?.password && (
                      <HelperText type="error" visible>
                        {errors.password}
                      </HelperText>
                    )}
                  </View>
                  <View style={{ marginTop: '2%' }}>
                    <TextInput
                      autoCapitalize="none"
                      label="Password confirmation"
                      mode="outlined"
                      placeholder="Confirm your password"
                      required
                      textContentType="password"
                      secureTextEntry
                      onChangeText={handleChange('passwordConfirmation')}
                      onBlur={handleBlur('passwordConfirmation')}
                      value={values.passwordConfirmation}
                      error={errors.passwordConfirmation && touched.passwordConfirmation}
                    />
                    {errors?.passwordConfirmation && (
                      <HelperText type="error" visible>
                        {errors.passwordConfirmation}
                      </HelperText>
                    )}
                  </View>
                  <Button mode="contained" onPress={handleSubmit} style={styles.formElement}>
                    Sign up
                  </Button>
                </View>
              )}
            </Formik>
            {loading && <ActivityIndicator size="large" animating style={{ marginTop: '4%' }} />}
            {error && (
              <HelperText type="error" visible>
                Wrong email or password
              </HelperText>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;
