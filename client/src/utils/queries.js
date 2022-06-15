export const QUERY_CRITIQUES = gql`
  query critiques($username: String) {
    critiques(username: $username) {
      _id
      commentText
      createdAt
      username
    }
  }
`;

export const QUERY_ME = gql``;

export const QUERY_ARTWORKS = gql`
  {
    artworks {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_ART = gql`
  query art($id: ID!) {
    art(_id: $id) {
      _id
      artText
      createdAt
      username
      critiqueCount
      critiques {
        _id
        createdAt
        username
        critiqueBody
      }
    }
  }
`;
