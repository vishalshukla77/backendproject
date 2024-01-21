const mongoose = require("mongoose");
const mongo_URI="mongodb://127.0.0.1:27017/registration";
mongoose.connect(mongo_URI).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection`);
});
