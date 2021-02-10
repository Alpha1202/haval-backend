const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Song, Album, Playlist, Bookshelf
    }) {
      this.hasMany(Song, { foreignKey: 'userId' });
      this.hasMany(Album, { foreignKey: 'userId' });
      this.hasMany(Playlist, { foreignKey: 'userId' });
      this.hasMany(Bookshelf, { foreignKey: 'userId' });
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined, updatedAt: undefined, createdAt: undefined };
    }
  }
  User.init({
    userId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    gender: {
      type: DataTypes.ENUM(['male', 'female']),
    },
    age: {
      unique: false,
      type: DataTypes.INTEGER,
      required: true,
    },
    country: {
      type: DataTypes.STRING,
      required: false,
      defaultValue: 'nigeria'
    },
    state: {
      type: DataTypes.ENUM(['abia', 'adamawa', 'akwa ibom', 'anambra', 'bauchi', 'bayelsa', 'benue', 'borno', 'cross river', 'delta', 'ebonyi', 'edo', 'ekiti', 'enugu', 'gombe', 'imo', 'jigawa', 'kaduna', 'kano', 'katsina', 'kebbi', 'kogi', 'kwara', 'lagos', 'Nasarawa', 'niger', 'ogun', 'ondo', 'osun', 'oyo', 'plateau', 'rivers', 'sokoto', 'taraba', 'yobe', 'zamfara', 'abuja']),
      required: false,
      defaultValue: 'lagos'
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
