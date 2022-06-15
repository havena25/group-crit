// imports
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Art {
    _id: ID
    artTitle: String
    artDescription: String
    artStartDate: String
    artStatus: String
    artAuthor: String
    createdAt: String
    username: String
  }
  type Query {
    artworks: [Art]
  }
`;

// // not finished yet
// const typeDefs = gql`
//   type Art {
//     _id: ID
//     artTitle: String
//         artDescription: String
//         artStartDate: String
//         artStatus: String
//         artAuthor: String
//         createdAt: String
//     username: String
//   }
//   type Query {
//     artworks: [Art]
//     user(username: String): User
//   }
//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     addFriend(friendId: ID!): User
//     addComment(commentText: String!): Comment
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }
// `;

module.exports = typeDefs;
