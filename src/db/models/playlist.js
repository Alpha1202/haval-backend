const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    static associate({ User, Song }) {
      this.hasMany(Song, { foreignKey: 'playlistId' });
      this.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Playlist.init({
    playlistId: {
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
    modelName: 'Playlist',
  });
  return Playlist;
};
