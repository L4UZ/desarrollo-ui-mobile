import * as React from 'react';
import { View, Image } from 'react-native';
import { Title, TextInput, Button, ActivityIndicator, HelperText } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';

import { useAuth } from '../../AuthProvider';
import { SIGN_IN_MUTATION } from '../../api/mutations';
import { signInSchema } from '../../constants/validations';
import Logo from '../../assets/images/logo192.png';

import styles from './styles';

const SigninScreen = () => {
  const { setToken } = useAuth();

  const [signIn, { loading, error }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: ({ signIn: token }) => {
      setToken(token);
    },
    onError: () => {},
  });
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.innerContainer}>
        <Title style={{ alignSelf: 'center' }}>SIGN IN</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInSchema}
          onSubmit={(values, { resetForm }) => {
            signIn({ variables: { credentials: values } });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <View>
              <View>
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
              <View style={{ marginTop: 5 }}>
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
              <Button mode="contained" onPress={handleSubmit} style={styles.formElement}>
                Sign In
              </Button>
            </View>
          )}
        </Formik>
        {loading && <ActivityIndicator size="large" animating style={{ marginTop: 20 }} />}
        {error && (
          <HelperText type="error" visible>
            Wrong email or password
          </HelperText>
        )}
      </View>
    </View>
  );
};

export default SigninScreen;
