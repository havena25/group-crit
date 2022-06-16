import { gql } from "@apollo/client";

export const QUERY_ARTWORKS = gql`
  query art($username: String) {
    art(username: $username) {
      _id
      artTitle
      artSummary
      artDescription
      artStatus
      artStartDate
      createdAt
      username
      critiqueCount
      critiques {
        _id
        createdAt
        username
        critiqueText
      }
    }
  }
`;

export const QUERY_ART = gql`
  query art($id: ID!) {
    art(_id: $id) {
      _id
      artTitle
      artDescription
      artStatus
      artStartDate
      createdAt
      username
      critiqueCount
      critiques {
        _id
        createdAt
        username
        critiqueText
      }
    }
  }
`;

export const QUERY_CRITIQUES = gql`
  query critiques($username: String) {
    critiques(username: $username) {
      _id
      critiqueText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      art {
        _id
        artTitle
        artDescription
        artStatus
        artStartDate
        createdAt
        critiqueCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
      friendCount
      art {
        _id
        artTitle
        artDescription
        artStatus
        artStartDate
        createdAt
        critiqueCount
        critiques {
          username
          createdAt
          critiqueText
          _id
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  query Query {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
