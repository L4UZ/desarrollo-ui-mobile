import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { string } from 'prop-types';
import { Button, Title, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { useAuth } from '../../AuthProvider/index';
import { ADD_REVIEW_MUTATION } from '../../api/mutations';
import { PLACE_DETAIL } from '../../api/queries';

import styles from './styles';

const AddReview = ({ placeId }) => {
  const { token } = useAuth();
  const initialValues = { score: 0, comment: '' };

  const [addReview, { loading }] = useMutation(ADD_REVIEW_MUTATION, {
    update(cache, { data: { addReview: addedReview } }) {
      const { place } = cache.readQuery({ query: PLACE_DETAIL, variables: { placeId } });
      cache.writeQuery({
        query: PLACE_DETAIL,
        variables: { placeId },
        data: {
          place: {
            ...place,
            overallScore: addedReview.overallScore,
            reviews: [...place.reviews, addedReview],
          },
        },
      });
    },
  });

  return (
    <View style={styles.container}>
      <Title variant="h6" gutterBottom>
        Add review
      </Title>
      <Formik
        initialValues={initialValues}
        onSubmit={({ comment, score }, { resetForm }) => {
          addReview({
            variables: {
              review: {
                comment,
                score: +score,
                placeId,
                token,
              },
            },
          });
          resetForm(initialValues);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <View>
            <AirbnbRating
              ratingCount={5}
              defaultRating={values.score}
              fractions={0}
              size={30}
              showRating={false}
              style={styles.formElement}
              onFinishRating={rating => handleChange({ target: { name: 'score', value: rating } })}
            />
            <TextInput
              helperText={touched.comment && errors.comment}
              label="Comment"
              multiline
              onBlur={handleBlur('comment')}
              onChange={({ nativeEvent: { text } }) =>
                handleChange({ target: { name: 'comment', value: text } })
              }
              placeholder="Add a review"
              required
              type="text"
              style={styles.formElement}
              value={values.comment}
              mode="outlined"
            />
            <Button
              loading={loading}
              disabled={loading}
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

AddReview.propTypes = {
  placeId: string.isRequired,
};

export default AddReview;
