import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
mutation {
  addPost($title: String!, $body: String!) {
    _id
    title
    body
  }
}
`;

export const ADD_ART = gql`
  mutation addArt($artTitle: String!, $artDescription: String!, $artStatus: String!, $artStartDate: String!) {
    addArt(artTitle: $artTitle, artDescription: $artDescription, artStatus: $artStatus, artStartDate: $artStartDate) {
      _id
      artTitle
      artDescription
      artStatus
      artStartDate
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_CRITIQUE = gql`
  mutation addCritique($critiqueText: String!) {
    addCritique(critiqueText: $critiqueText) {
      _id
      critiqueText
      createdAt
      username
    }
  }
`;
