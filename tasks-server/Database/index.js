import { connect } from "mongoose";

const mongoUri = "mongodb://localhost:27017/test_3pm";

class Database {
  static connect() {
    return connect(mongoUri);
  }
}

export default Database;
