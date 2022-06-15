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
    critiques: [critique]
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
    art(username: String): [Art]
    art(_id: ID!): art
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
    ): art
    addCritique(artId: ID!, critiqueText: String!): art
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
