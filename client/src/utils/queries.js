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
export const QUERY_PIECES = gql`
  {
    pieces {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_PIECE = gql`
  query piece($id: ID!) {
    piece(_id: $id) {
      _id
      pieceText
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