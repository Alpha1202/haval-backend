const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({ User, Artist, Song }) {
      this.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
      this.belongsTo(Artist, { foreignKey: 'artistId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
      this.hasMany(Song, { foreignKey: 'albumId' });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Album.init({
    albumId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
