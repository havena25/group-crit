const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/group-crit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = async function connection() {
  try {
      const connectionParams = {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
      };
      await mongoose.connect(process.env.DB, connectionParams);
      console.log("connected to database");
  } catch (error) {
      console.log(error);
      console.log("could not connect to database");
  }
};

module.exports = mongoose.connection;
