const faker = require("faker");

const db = require("../config/connection");
const { Art, User } = require("../models");

db.once(
  "open",
  async () => {
    await Art.deleteMany({});
    await User.deleteMany({});

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

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(
        Math.random() * createdUsers.ops.length
      );
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  },

  // art data
  // const artData = [];

  // for (let i = 0; i < 5; i++) {
  //   const artTitle = faker.name.findName();
  //   const artDescription = faker.lorem.paragraphs();
  //   const artStartDate = faker.date.past();
  //   const artStatus = "WIP";
  //   const artAuthor = faker.name.findName();

  //   artData.push({ artTitle, artDescription, artStartDate, artStatus, artAuthor });
  // }
  // await Art.collection.insertMany(artData);
  process.exit(0)
);
