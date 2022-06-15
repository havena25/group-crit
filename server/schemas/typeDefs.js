// imports
const { gql } = require("apollo-server-express");

// not finished yet
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    friends: [User]
  }
  type Query {
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    addComment(commentText: String!): Comment
  }

  type Auth {
    token: ID!
    user: User
  }
`;
