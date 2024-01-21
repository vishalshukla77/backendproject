const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const defaultDatabaseName = "registration";


const dbName = process.argv[2] || defaultDatabaseName;

const mongo_URI = process.env.MONGO_URI;

mongoose.connect(mongo_URI)
  .then(() => {
    console.log(`Connection successful to database: ${dbName}`);
  })
  .catch((e) => {
    console.log(`No connection to database: ${dbName}`);
    console.log(e);
  });
