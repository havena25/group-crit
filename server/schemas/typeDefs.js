// imports
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar DateTime
  type Art {
    _id: ID
    artTitle: String
    artSummary: String
    artDescription: String
    artStartDate: DateTime
    artStatus: String
    artAuthor: String
    createdAt: String
    username: String
    critiqueCount: Int
    critiques: [Critique]
  }
  type Critique {
    _id: ID
    critiqueText: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    art: [Art]
    friends: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    artCollection(username: String): [Art]
    artPiece(_id: ID!): Art
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addArt(
      artTitle: String!
      artSummary: String!
      artDescription: String!
      artStartDate: String!
      artStatus: String!
    ): Art
    addCritique(artId: ID!, critiqueText: String!): Art
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
