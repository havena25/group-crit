const faker = require("faker");
const artSeeds = require("./artSeeds.json");

const userSeeds = require("./userSeeds.json");
const db = require("../config/connection");
const { Art, User } = require("../models");

db.once("open", async () => {
  try {
    await Art.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);

    for (let i = 0; i < artSeeds.length; i++) {
      const { _id, artArtist } = await Art.create(artSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: artArtist },
        {
          $addToSet: {
            artCollection: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(
        Math.random() * createdUsers.ops.length
      );
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  let createdArts = [];
  for (let i = 0; i < 100; i += 1) {
    const artTitle = faker.name.findName();
    const artSummary = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const artDescription = faker.lorem.words(
      Math.round(Math.random() * 20) + 1
    );
    const artStartDate = faker.date.past();
    const artStatus = "Unsolved";

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdArt = await Art.create({
      artTitle,
      artSummary,
      artDescription,
      artStartDate,
      artStatus,
      username,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { arts: createdArt._id } }
    );

    createdArts.push(createdArt);
  }

  // create Critiques
  // for (let i = 0; i < 100; i += 1) {
  //   const artText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomArtIndex = Math.floor(Math.random() * createdArts.length);
  //   const { _id: artId } = createdArts[randomArtIndex];

  //   await Art.updateOne(
  //     { _id: artId },
  //     { $push: { critiques: { artText, username } } },
  //     { runValidators: true }
  //   );
  // }

  console.log("all done!");
  process.exit(0);
});
