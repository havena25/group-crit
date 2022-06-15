// imports
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Art } = require("../models");

// resolvers

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("art")
          .populate("friends");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all art
    art: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Art.find(params).sort({ createdAt: -1 });
    },
    // get one art by ID
    art: async (parent, { _id }) => {
      return Art.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("art");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("art");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addArt: async (parent, args, context) => {
      if (context.user) {
        const artWork = await Art.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { art: artWork._id } },
          { new: true }
        );
        fco;
        return artWork;
      }

      throw new AuthenticationError("You need to be logged in");
    },
    addCritique: async (parent, { artId, critiqueText }, context) => {
      if (context.user) {
        const updatedArt = await Art.findOneAndUpdate(
          { _id: artId },
          {
            $push: {
              critiques: { critiqueText, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedArt;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

// // exports
module.exports = resolvers;
