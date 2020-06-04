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
