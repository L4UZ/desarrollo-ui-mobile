import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($user: SignUpInput!) {
    signUp(user: $user)
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($credentials: CredentialsInput!) {
    signIn(credentials: $credentials)
  }
`;

export const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($review: ReviewInput!) {
    addReview(review: $review) {
      id
      comment
      score
      userFullName
      userEmail
      overallScore
    }
  }
`;

export const ADD_TRIP = gql`
  mutation AddTrip($trip: TripInput!) {
    addTrip(trip: $trip) {
      id
      user {
        email
        firstName
        lastName
      }
      name
      places {
        id
        name
      }
    }
  }
`;

export const ADD_PLACE_TRIP = gql`
  mutation AddPlaceToTrip($tripPlace: TripPlaceInput!) {
    addPlaceToTrip(tripPlace: $tripPlace) {
      id
      user {
        email
        firstName
        lastName
      }
      name
      places {
        id
        name
      }
    }
  }
`;
