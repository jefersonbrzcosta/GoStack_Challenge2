import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import File from "../app/models/file";

import User from "../app/models/User";

const models = [User, File];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.init();
  }

  init() {
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
