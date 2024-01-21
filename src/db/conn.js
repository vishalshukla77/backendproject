const mongoose = require("mongoose");


const defaultDatabaseName = "registration";


const dbName = process.argv[2] || defaultDatabaseName;

const mongo_URI = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(mongo_URI)
  .then(() => {
    console.log(`Connection successful to database: ${dbName}`);
  })
  .catch((e) => {
    console.log(`No connection to database: ${dbName}`);
  });
