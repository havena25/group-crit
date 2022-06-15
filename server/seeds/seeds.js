const faker = require('faker');

const db = require('../config/connection');
const { Art } = require('../models');

db.once('open', async () => {
  await Art.deleteMany({});

  // create user data
  const artData = [];

  for (let i = 0; i < 5; i++) {
    const artTitle = faker.name.findName();
    const artDescription = faker.lorem.paragraphs();
    const artStartDate = faker.date.past();
    const artStatus = "WIP";
    const artAuthor = faker.name.findName();

    artData.push({ artTitle, artDescription, artStartDate, artStatus, artAuthor });
  }
  await Art.collection.insertMany(artData);

  console.log('all done!');
  process.exit(0);
});