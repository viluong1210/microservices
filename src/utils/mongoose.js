const mongoose = require("mongoose");
const connectString = "mongodb://study:study@localhost:27017/shopdev";
class Datebase {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("Connected Mongodb Success");
      })
      .catch((err) => console.log("Error Connect!", err));
  }
  static getInstance() {
    if (!Datebase.instance) {
      Datebase.instance = new Datebase();
    }

    return Datebase.instance;
  }
}

const initDatabase = Datebase.getInstance();
module.exports = initDatabase;
