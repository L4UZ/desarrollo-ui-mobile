import gql from 'graphql-tag';

export const CONTINENTS = gql`
  {
    continents {
      id
      name
      regions {
        id
        name
        imageSrc
      }
    }
  }
`;

export const REGION_DETAIL = gql`
  query RegionDetail($regionId: String!) {
    region(id: $regionId) {
      id
      continentId
      continentName
      name
      places {
        id
        name
        imagesSrc
      }
    }
  }
`;

export const PLACE_DETAIL = gql`
  query Place($placeId: String!) {
    place(id: $placeId) {
      id
      name
      description
      imagesSrc
      activities {
        id
        name
        price
        description
      }
      reviews {
        id
        comment
        score
        userEmail
        userFullName
      }
      overallScore
    }
  }
`;

export const PLACES_BY_DISTANCE = gql`
  query PlacesByDistance($coords: PlacesByDistanceInput!) {
    placesByDistance(coords: $coords) {
      distance
      id
      name
      imagesSrc
    }
  }
`;

export const USER_TRIPS = gql`
  query Trips($token: String!) {
    trips(token: $token) {
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
        description
        imagesSrc
      }
    }
  }
`;

export const TRIP = gql`
  query Trip($tripId: String!) {
    trip(id: $tripId) {
      id
      name
      user {
        email
        firstName
        lastName
      }
      places {
        id
        name
        imagesSrc
        regionId
      }
    }
  }
`;
