const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookshelf extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Bookshelf.init({
    bookId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
    author: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
    authorPhoto: {
      type: DataTypes.STRING,
      unique: false,
      required: false,
    },
    bookPhoto: {
      type: DataTypes.STRING,
      unique: false,
      required: false,
    },
  }, {
    sequelize,
    modelName: 'Bookshelf',
  });
  return Bookshelf;
};
