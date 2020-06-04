import * as React from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';

import { useAuth } from '../../AuthProvider';
import { SIGN_IN_MUTATION } from '../../api/mutations';
import { signInSchema } from '../../constants/validations';
// import styles from './styles';

const SigninScreen = () => {
  const { setToken } = useAuth();

  const [signIn /* , { loading, error } */] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: ({ signIn: token }) => {
      setToken(token);
      // TODO: Redirect
    },
    onError: () => {},
  });
  return (
    <View>
      <Title>Sign in</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={signInSchema}
        onSubmit={(values, { resetForm }) => {
          signIn({ variables: { credentials: values } });
          resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <>
            <View>
              <TextInput
                mode="outlined"
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoCompleteType="email"
                textContentType="emailAddress"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
              />
            </View>
            <View>
              <TextInput
                mode="outlined"
                required
                label="Password"
                textContentType="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
              />
            </View>
            <Button mode="contained" onPress={handleSubmit}>
              Sign In
            </Button>
            <View>
              {/* <Link to="/signup" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link> */}
            </View>
          </>
        )}
      </Formik>
      {/* {loading && <CircularProgress />} */}
      {/* {error && (
        <Alert severity="error" className={classes.errorMessage}>
          Wrong email or password
        </Alert>
      )} */}
    </View>
  );
};

export default SigninScreen;
