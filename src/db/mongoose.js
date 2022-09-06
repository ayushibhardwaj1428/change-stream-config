const mongoose = require('mongoose');

function connect() {
  try {
    mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = connect;
