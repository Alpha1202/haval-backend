const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class WaitingList extends Model {
    static associate() {
      // define association here
    }
  }
  WaitingList.init({
    waitinglistId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
    lastname: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    category: {
      type: DataTypes.ENUM(['artist', 'author']),
      required: true,
    },
    organization: {
      type: DataTypes.ENUM(['independent', 'church']),
      required: true,
    },
  }, {
    sequelize,
    modelName: 'WaitingList',
  });
  return WaitingList;
};